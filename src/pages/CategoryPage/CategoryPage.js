import React, { useEffect } from "react";
import { useMealContext } from "../../context/mealContext";
import MealList from "../../components/Meal/MealList";
import { useParams } from "react-router-dom";
import { startFetchMealByCategory } from "../../actions/mealActions";

function CategoryPage() {
  const { name } = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  let catDescription = "";
  if (categories) {
    categories.forEach((category) => {
      if (category?.strCategory === name)
        catDescription = category?.strCategoryDescription;
    });
  }
  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);
  return (
    <div className="my-4 container">
      <div className="bg-light rounded-4 p-3">
        <h3 className="text-warning ">{name}</h3>
        <p className="text-muted text-justify">{catDescription}</p>
      </div>
      {
        (categoryMeals?.length) ? <MealList meals={categoryMeals}/> : null
      }
    </div>
  );
}

export default CategoryPage;
