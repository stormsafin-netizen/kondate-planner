// 人数と予算から1週間（7日 × 朝・昼・夜）の献立を生成する。
import { RECIPES } from "./data/recipes.js";

export const DAY_LABELS = ["月", "火", "水", "木", "金", "土", "日"];
const SLOTS = ["breakfast", "lunch", "dinner"];

// 子どもは0.7人前換算。最低1人前。
export function servingsNeeded(settings) {
  const s = (settings.adults || 0) + (settings.children || 0) * 0.7;
  return Math.max(1, s);
}

// 家族分の費用（円・整数）。
export function recipeCost(recipe, servings) {
  const base = recipe.ingredients.reduce(
    (sum, ing) => sum + ing.pricePerUnit * ing.qty,
    0
  );
  return Math.round((base * servings) / recipe.baseServings);
}

function passesFilter(recipe, settings) {
  if (settings.avoid && settings.avoid.some((t) => recipe.tags.includes(t))) {
    return false;
  }
  return true;
}

// 指定スロットの候補レシピ。avoid適用後に空ならavoidを無視してフォールバック。
function candidatesForSlot(slot, settings) {
  const inSlot = RECIPES.filter((r) => r.mealSlots.includes(slot));
  let pool = inSlot.filter((r) => passesFilter(r, settings));
  if (pool.length === 0) pool = inSlot; // 苦手食材で全滅したら無視

  // ジャンル希望は夕食のみソフト適用。候補が2件未満なら無視。
  if (settings.genrePref && slot === "dinner") {
    const byGenre = pool.filter((r) => r.genre === settings.genrePref);
    if (byGenre.length >= 2) pool = byGenre;
  }
  return pool;
}

function toMeal(recipe, servings) {
  return {
    recipeId: recipe.id,
    name: recipe.name,
    genre: recipe.genre,
    cost: recipeCost(recipe, servings),
    nutrition: { ...recipe.nutritionPerServing },
  };
}

function pick(pool, { avoidId, avoidGenre } = {}) {
  let choices = pool;
  if (avoidId) {
    const filtered = choices.filter((r) => r.id !== avoidId);
    if (filtered.length) choices = filtered;
  }
  if (avoidGenre) {
    const filtered = choices.filter((r) => r.genre !== avoidGenre);
    if (filtered.length) choices = filtered;
  }
  return choices[Math.floor(Math.random() * choices.length)];
}

function recipeById(id) {
  return RECIPES.find((r) => r.id === id);
}

function dailyNutrition(day) {
  const sum = { kcal: 0, protein: 0, fat: 0, carb: 0 };
  for (const slot of SLOTS) {
    const n = day[slot].nutrition;
    sum.kcal += n.kcal;
    sum.protein += n.protein;
    sum.fat += n.fat;
    sum.carb += n.carb;
  }
  return sum;
}

function planTotalCost(days) {
  return days.reduce(
    (sum, d) => sum + d.breakfast.cost + d.lunch.cost + d.dinner.cost,
    0
  );
}

// 予算オーバー時：最も高い食を同スロットのより安いレシピに順次差し替える（貪欲法）。
function reduceToBudget(days, settings) {
  const servings = servingsNeeded(settings);
  const budget = settings.weeklyBudget;
  let guard = days.length * SLOTS.length * 2; // 無限ループ防止

  while (planTotalCost(days) > budget && guard-- > 0) {
    let best = null; // { dayIndex, slot, newRecipe, saving }
    days.forEach((day, dayIndex) => {
      for (const slot of SLOTS) {
        const current = day[slot];
        const pool = candidatesForSlot(slot, settings);
        let cheapest = null;
        for (const r of pool) {
          const c = recipeCost(r, servings);
          if (c < current.cost && (!cheapest || c < cheapest.cost)) {
            cheapest = { recipe: r, cost: c };
          }
        }
        if (cheapest) {
          const saving = current.cost - cheapest.cost;
          if (!best || saving > best.saving) {
            best = { dayIndex, slot, recipe: cheapest.recipe, saving };
          }
        }
      }
    });
    if (!best) break; // これ以上下げられない
    days[best.dayIndex][best.slot] = toMeal(best.recipe, servings);
  }
}

export function generatePlan(settings) {
  const servings = servingsNeeded(settings);
  const days = [];
  let prev = { breakfast: null, lunch: null, dinner: null, dinnerGenre: null };

  for (let i = 0; i < 7; i++) {
    const day = { label: DAY_LABELS[i] };
    for (const slot of SLOTS) {
      const pool = candidatesForSlot(slot, settings);
      const opts = { avoidId: prev[slot] };
      if (slot === "dinner") opts.avoidGenre = prev.dinnerGenre;
      const recipe = pick(pool, opts);
      day[slot] = toMeal(recipe, servings);
      prev[slot] = recipe.id;
      if (slot === "dinner") prev.dinnerGenre = recipe.genre;
    }
    day.nutrition = dailyNutrition(day);
    days.push(day);
  }

  reduceToBudget(days, settings);
  days.forEach((d) => (d.nutrition = dailyNutrition(d)));

  const totalCost = planTotalCost(days);
  return {
    days,
    totalCost,
    budget: settings.weeklyBudget,
    overBudget: totalCost > settings.weeklyBudget,
    servings,
  };
}

// 1食だけ別のレシピに差し替える。現在と違うレシピを返す。
export function swapMeal(plan, dayIndex, slot, settings) {
  const servings = servingsNeeded(settings);
  const pool = candidatesForSlot(slot, settings);
  const currentId = plan.days[dayIndex][slot].recipeId;
  const recipe = pick(pool, { avoidId: currentId });
  plan.days[dayIndex][slot] = toMeal(recipe, servings);
  plan.days[dayIndex].nutrition = dailyNutrition(plan.days[dayIndex]);
  plan.totalCost = planTotalCost(plan.days);
  plan.overBudget = plan.totalCost > plan.budget;
  return plan;
}

export { recipeById };
