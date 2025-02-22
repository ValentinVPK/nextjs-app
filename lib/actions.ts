"use server";

import { MealFormData } from "@/types/meals";
import { createMeal } from "./meals";
import { redirect } from "next/navigation";
import { FormState } from "@/app/meals/share/page";
import { revalidatePath } from "next/cache";

export async function shareMeal(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const meal: MealFormData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image") as File,
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Simple server side form data validation
  if (!meal.title || !meal.summary || !meal.instructions || !meal.image) {
    return {
      message: "Invalid form data",
    };
  }

  await createMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
