import React from 'react'
import { useMealContext } from '../../context/mealContext'
import Loader from '../../components/Loader/Loader'
import CategoryList from '../../components/Category/CategoryList'
import NotFound from '../../components/NotFound/NotFound'
import MealList from '../../components/Meal/MealList'
function HomePage() {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();
  console.log(categories, meals, categoryLoading, mealsLoading);
  return (
    <main className='container'>
      {(mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals={meals} /> : ''}
      {(categoryLoading) ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  )
}

export default HomePage
