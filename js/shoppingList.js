// 1週間の献立から、材料を合算した買い物リストを作る。
import { recipeById, servingsNeeded } from "./menuGenerator.js";

const CATEGORY_ORDER = ["野菜", "肉魚", "米・パン", "調味料"];

function roundQty(n) {
  return Math.round(n * 10) / 10;
}

export function buildShoppingList(plan, settings, fridge = []) {
  const servings = servingsNeeded(settings);
  const fridgeSet = new Set(fridge);
  const map = new Map(); // key: name|unit -> item

  for (const day of plan.days) {
    for (const slot of ["breakfast", "lunch", "dinner"]) {
      const recipe = recipeById(day[slot].recipeId);
      if (!recipe) continue;
      const scale = servings / recipe.baseServings;
      for (const ing of recipe.ingredients) {
        if (fridgeSet.has(ing.name)) continue;
        const key = `${ing.name}|${ing.unit}`;
        const addQty = ing.qty * scale;
        const addCost = ing.pricePerUnit * ing.qty * scale;
        const existing = map.get(key);
        if (existing) {
          existing.qty += addQty;
          existing.cost += addCost;
        } else {
          map.set(key, {
            name: ing.name,
            unit: ing.unit,
            category: ing.category,
            qty: addQty,
            cost: addCost,
          });
        }
      }
    }
  }

  const items = [...map.values()].map((it) => ({
    ...it,
    qty: roundQty(it.qty),
    cost: Math.round(it.cost),
  }));

  // カテゴリ別にまとめる（既知カテゴリの順 → その他）
  const groups = [];
  const byCategory = new Map();
  for (const it of items) {
    if (!byCategory.has(it.category)) byCategory.set(it.category, []);
    byCategory.get(it.category).push(it);
  }
  const orderedCats = [
    ...CATEGORY_ORDER.filter((c) => byCategory.has(c)),
    ...[...byCategory.keys()].filter((c) => !CATEGORY_ORDER.includes(c)),
  ];
  for (const cat of orderedCats) {
    const list = byCategory.get(cat).sort((a, b) => b.cost - a.cost);
    groups.push({ category: cat, items: list });
  }

  const totalCost = items.reduce((sum, it) => sum + it.cost, 0);
  return { groups, totalCost };
}
