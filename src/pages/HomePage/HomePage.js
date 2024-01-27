import React from 'react'
import { useMealContext } from '../../context/mealContext'
import Loader from '../../components/Loader/Loader'
import CategoryList from '../../components/Category/CategoryList'

function HomePage() {
  const {categories, meals, categoryLoading, mealsLoading} = useMealContext();
  console.log (categories, meals, categoryLoading, mealsLoading);
  return (
    <main className='container'>
      {
        (categoryLoading) ? <Loader/> : <CategoryList categories={categories}/>
      }
    </main>
  )
}

export default HomePage
