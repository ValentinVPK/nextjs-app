// This is loading component for the meals page
// It is purposefully renamed to loading-out to avoid conflict with the loading component in the meals page
// It is still used in the project to show the alternative loading state in Next JS
import classes from "./loading.module.css";

export default function MealsLoading() {
  return (
    <div className={classes.loading}>
      <p>Fetching meals...</p>
    </div>
  );
}
