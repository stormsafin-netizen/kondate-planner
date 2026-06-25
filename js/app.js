// 画面の制御とUIの組み立て。
import {
  loadSettings,
  saveSettings,
  loadPlan,
  savePlan,
  loadChecked,
  saveChecked,
  loadFridge,
  saveFridge,
} from "./storage.js";
import { generatePlan, swapMeal } from "./menuGenerator.js";
import { buildShoppingList } from "./shoppingList.js";

const SLOT_LABELS = { breakfast: "朝", lunch: "昼", dinner: "夜" };
const SLOTS = ["breakfast", "lunch", "dinner"];
const yen = (n) => "¥" + n.toLocaleString("ja-JP");

let settings = loadSettings();
let plan = loadPlan();
let checked = loadChecked();
let fridge = loadFridge();

const $ = (id) => document.getElementById(id);

// 小さなDOM構築ヘルパー。テキストは textContent 経由なのでXSS安全。
function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.text != null) node.textContent = opts.text;
  if (opts.attrs) for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
  if (opts.style) node.style.cssText = opts.style;
  for (const c of children) if (c) node.appendChild(c);
  return node;
}

// ---------- 画面切り替え ----------
function showScreen(name) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.add("hidden"));
  $(`screen-${name}`).classList.remove("hidden");
  document.querySelectorAll(".tab-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.screen === name);
  });
  window.scrollTo(0, 0);
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screen));
});

// ---------- 設定 → 値の読み書き ----------
function readSettingsFromForm() {
  const avoid = [...document.querySelectorAll("#avoid-options input:checked")].map(
    (c) => c.value
  );
  return {
    adults: Math.max(0, parseInt($("adults").value, 10) || 0),
    children: Math.max(0, parseInt($("children").value, 10) || 0),
    weeklyBudget: Math.max(1000, parseInt($("budget").value, 10) || 1000),
    avoid,
    genrePref: $("genre").value || null,
  };
}

function readFridgeFromForm() {
  return [
    ...document.querySelectorAll("#fridge-veggie input:checked, #fridge-meat input:checked, #fridge-dairy input:checked"),
  ].map((c) => c.value);
}

function fillForm(s) {
  $("adults").value = s.adults;
  $("children").value = s.children;
  $("budget").value = s.weeklyBudget;
  $("genre").value = s.genrePref || "";
  document.querySelectorAll("#avoid-options input").forEach((c) => {
    c.checked = s.avoid.includes(c.value);
  });
}

function fillFridge(items) {
  document.querySelectorAll(
    "#fridge-veggie input, #fridge-meat input, #fridge-dairy input"
  ).forEach((c) => {
    c.checked = items.includes(c.value);
  });
}

// ---------- 献立の描画 ----------
function renderPlan() {
  if (!plan) return;
  const pct = Math.min(100, Math.round((plan.totalCost / plan.budget) * 100));
  $("budget-summary").textContent = `週合計 ${yen(plan.totalCost)} / 予算 ${yen(plan.budget)}`;
  const bar = $("budget-bar");
  bar.style.width = pct + "%";
  bar.style.background = plan.overBudget ? "#ef4444" : "#fb923c";

  const warn = $("budget-warning");
  if (plan.overBudget) {
    const over = plan.totalCost - plan.budget;
    warn.textContent = `予算を ${yen(over)} 超えています。予算を上げるか、品数を見直してください。`;
    warn.classList.remove("hidden");
  } else {
    warn.classList.add("hidden");
  }

  const list = $("days-list");
  list.replaceChildren();
  plan.days.forEach((day, dayIndex) => {
    const n = day.nutrition;
    const header = el("div", { class: "flex items-center justify-between mb-2" }, [
      el("span", { class: "font-bold", text: `${day.label}曜日` }),
      el("span", {
        class: "text-xs text-slate-500",
        text: `約 ${n.kcal} kcal ・ たんぱく ${n.protein}g`,
      }),
    ]);

    const card = el("div", { class: "bg-white rounded-xl shadow-sm p-3" }, [header]);

    SLOTS.forEach((slot) => {
      const meal = day[slot];
      const left = el("div", { class: "flex items-center gap-2 min-w-0" }, [
        el("span", {
          class:
            "shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs grid place-items-center",
          text: SLOT_LABELS[slot],
        }),
        el("span", { class: "truncate", text: meal.name }),
      ]);
      const swapBtn = el("button", {
        class: "swap-btn text-xs text-orange-600 underline",
        text: "変える",
      });
      swapBtn.addEventListener("click", () => {
        plan = swapMeal(plan, dayIndex, slot, settings);
        savePlan(plan);
        renderPlan();
        renderShopping();
      });
      const right = el("div", { class: "flex items-center gap-2 shrink-0" }, [
        el("span", { class: "text-xs text-slate-500", text: yen(meal.cost) }),
        swapBtn,
      ]);
      const row = el(
        "div",
        { class: "flex items-center justify-between py-1.5 border-t first:border-t-0" },
        [left, right]
      );
      card.appendChild(row);
    });
    list.appendChild(card);
  });
}

// ---------- 買い物リストの描画 ----------
function renderShopping() {
  const wrap = $("shopping-list");
  const empty = $("shopping-empty");
  if (!plan) {
    wrap.replaceChildren();
    empty.classList.remove("hidden");
    $("shopping-total").textContent = "合計 ¥0";
    return;
  }
  empty.classList.add("hidden");
  const { groups, totalCost } = buildShoppingList(plan, settings, fridge);
  $("shopping-total").textContent = "合計 " + yen(totalCost);

  wrap.replaceChildren();
  groups.forEach((group) => {
    const section = el("div", { class: "bg-white rounded-xl shadow-sm p-3" }, [
      el("h3", { class: "font-bold text-sm text-orange-700 mb-1", text: group.category }),
    ]);
    group.items.forEach((item) => {
      const key = `${item.name}|${item.unit}`;
      const isChecked = !!checked[key];

      const box = el("input", {
        class: "check",
        attrs: { type: "checkbox" },
        style: "accent-color:#fb923c",
      });
      box.checked = isChecked;
      box.addEventListener("change", () => {
        checked[key] = box.checked;
        saveChecked(checked);
        renderShopping();
      });

      const qtySpan = el("span", {
        class: "text-xs text-slate-500",
        text: ` ${item.qty}${item.unit}`,
      });
      const nameSpan = el(
        "span",
        { class: isChecked ? "line-through text-slate-400 truncate" : "truncate" },
        [document.createTextNode(item.name), qtySpan]
      );
      const left = el("span", { class: "flex items-center gap-2 min-w-0" }, [box, nameSpan]);
      const right = el("span", {
        class: "text-xs text-slate-500 shrink-0",
        text: yen(item.cost),
      });
      const row = el(
        "label",
        {
          class:
            "flex items-center justify-between py-1.5 border-t first:border-t-0 cursor-pointer",
        },
        [left, right]
      );
      section.appendChild(row);
    });
    wrap.appendChild(section);
  });
}

// ---------- 生成 ----------
function generate() {
  settings = readSettingsFromForm();
  saveSettings(settings);
  fridge = readFridgeFromForm();
  saveFridge(fridge);
  plan = generatePlan(settings);
  savePlan(plan);
  checked = {};
  saveChecked(checked);
  renderPlan();
  renderShopping();
  showScreen("plan");
}

$("generate-btn").addEventListener("click", generate);
$("regenerate-btn").addEventListener("click", generate);

// ---------- 初期表示 ----------
fillForm(settings);
fillFridge(fridge);
if (plan) {
  renderPlan();
  renderShopping();
  showScreen("plan");
} else {
  showScreen("settings");
}
