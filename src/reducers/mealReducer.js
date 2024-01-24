import { FETCH_CATEGORY_BEGIN,FETCH_CATEGORY_SUCCESS,FETCH_CATEGORY_ERROR } from "../actions/actions";
export const mealReducer =(state,action) => {
  switch (action.type) {
    case FETCH_CATEGORY_BEGIN:
      return {
        ...state,
        categoryLoading: true,
      }

    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryLoading: false,
        categories: action.payload
      }
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        categoryLoading: false,
        categoryError: true
      } 
      
  
    default:
      return state;
  }

}