import React from 'react'

function SearchForm() {
  return (
    <>
      <form className='d-flex align-items-center'>
      <input
        type="text"
        className="form-control"
        name="search"
        id="search"
        placeholder="Search reciepes here...."
      />
      <button className='btn btn-dark'>
        <i className='fa-solid fa-search'></i>
      </button>
    </form>
    </>
  )
}

export default SearchForm
