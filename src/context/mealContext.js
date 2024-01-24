import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { mealReducer } from '../reducers/mealReducer'
import { startFetchCategories } from '../actions/mealAction';

const initialState = {
  categories:[],
  categoryLoading:false,
  categoryError:false,
  
  categoriesMeals:[],
  categoryMealsLoading:false,
  categoryMealsError:false,
}

const MealContext = createContext({});

export const MealProvider =  ({children}) => {
  const [state, dispatch] = useReducer(mealReducer, initialState)

  useEffect(()=>{
    startFetchCategories(dispatch);
  },[])
  return (
    <MealContext.Provider value={{...state,dispatch}}> {children} </MealContext.Provider>
  )
}

export const useMealContext = () => {
  return useContext(MealContext);
}


