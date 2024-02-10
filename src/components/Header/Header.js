import React from 'react'
import Navbar from './Navbar'
import SearchForm from './SearchForm'
function Header() {
  return (
    <header className='header'>
      <Navbar/>
      <div className='d-flex flex-column justify-content-center align-items-center vh-50 banner'>
      <SearchForm/>
      <h1 className='Fw-semibold lh-lg'>What are your favourite <br />  <span className='' > cuisines? </span> </h1>
      <p className='text-uppercase my-3 lh-base fw-bold text-decoration-underline'>Personalize your experience</p>
      </div>
    </header>
  )
}

export default Header