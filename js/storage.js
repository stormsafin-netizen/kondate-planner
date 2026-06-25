// 設定と現在の献立を localStorage に保存/復元する。

const SETTINGS_KEY = "mealPlanner.settings";
const PLAN_KEY = "mealPlanner.plan";
const CHECKED_KEY = "mealPlanner.checked";
const FRIDGE_KEY = "mealPlanner.fridge";

export const DEFAULT_SETTINGS = {
  adults: 2,
  children: 1,
  weeklyBudget: 10000,
  avoid: [], // "meat" | "fish" | "egg" など。該当タグを含むレシピを除外
  genrePref: null, // null | "和食" | "洋食" | "中華"
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage が使えない環境では黙って何もしない
  }
}

export function loadSettings() {
  return { ...DEFAULT_SETTINGS, ...read(SETTINGS_KEY, {}) };
}

export function saveSettings(settings) {
  write(SETTINGS_KEY, settings);
}

export function loadPlan() {
  return read(PLAN_KEY, null);
}

export function savePlan(plan) {
  write(PLAN_KEY, plan);
}

export function loadChecked() {
  return read(CHECKED_KEY, {});
}

export function saveChecked(checked) {
  write(CHECKED_KEY, checked);
}

export function loadFridge() {
  return read(FRIDGE_KEY, []);
}

export function saveFridge(fridge) {
  write(FRIDGE_KEY, fridge);
}
