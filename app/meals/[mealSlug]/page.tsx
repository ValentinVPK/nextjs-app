type MealDetailPageParams = {
  mealSlug: string;
};

type MealDetailPageProps = {
  params: MealDetailPageParams;
};

export default function MealDetailsPage({ params }: MealDetailPageProps) {
  return (
    <main>
      <h1>Meal Detail Page</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
