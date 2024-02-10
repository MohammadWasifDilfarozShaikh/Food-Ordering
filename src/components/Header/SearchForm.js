import React, { useState } from 'react'
import { useMealContext } from '../../context/mealContext'
import { useNavigate } from 'react-router-dom'
import { startFetchMealBySearch } from '../../actions/mealActions';

function SearchForm() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const {dispatch, meals} = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if ((e.target.value.replace(/[^\w\s]/gi, '')).length !== 0) {
      setSearchTerm(e.target.value)
      setErrorMsg("")
    } else {
      setErrorMsg("Invalid search term ...")
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealBySearch(dispatch, searchTerm)
    console.log(meals)
  }
  

  return (
    <form className='d-flex align-items-center' onSubmit={(e) => handleSearchResult(e)}>
      <input
        onChange={(e) => handleSearchTerm(e)}
        type="text"
        className="form-control"
        name="search"
        id="search"
        placeholder="Search reciepes here...."
      />
      <button type="submit" className='btn btn-warning'>
        <i className='fa-solid fa-search'></i>
      </button>
    </form>
  )
}

export default SearchForm
