export type Meal = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

export type MealFormData = {
  title: FormDataEntryValue | null;
  summary: FormDataEntryValue | null;
  instructions: FormDataEntryValue | null;
  image: File;
  creator: FormDataEntryValue | null;
  creator_email: FormDataEntryValue | null;
};
