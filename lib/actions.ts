"use server";

import { MealFormData } from "@/types/meals";
import { createMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {
  const meal: MealFormData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image") as File,
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await createMeal(meal);
  redirect("/meals");
}
