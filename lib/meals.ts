import { Meal } from "@/types/meals";
// @ts-expect-error - better-sqlite3 has no type definitions in Next.js environment
import sql from "better-sqlite3";

const db = sql("meals.db");

// Delay is added to simulate a slow database query
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(mealSlug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(mealSlug) as Meal;
}
