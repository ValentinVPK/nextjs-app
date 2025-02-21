import { Meal, MealFormData } from "@/types/meals";
// @ts-expect-error - better-sqlite3 has no type definitions in Next.js environment
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { saveImage } from "./utils";

const db = sql("meals.db");

// Delay is added to simulate a slow database query
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(mealSlug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(mealSlug) as Meal;
}

export async function createMeal(meal: MealFormData) {
  const slug = slugify(meal.title as string, { lower: true });
  const instructions = xss(meal.instructions as string);

  const imageFilename = await saveImage(meal.image, slug);

  const mealDbData = {
    ...meal,
    image: `/images/${imageFilename}`,
    instructions,
    slug,
  };

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )`
  ).run(mealDbData);
}

export function deleteMeal(mealSlug: string) {
  return db.prepare("DELETE FROM meals WHERE slug = ?").run(mealSlug);
}
