import React from 'react'
import { Link } from 'react-router-dom';

function CategoryList({categories}) {
  return (
    <>
      <h3 className='mt-3 text-yellow text-uppercase'>categories</h3>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center align-items-center'>
        {
          categories.map(category => {
            const {idCategory:id, strCategory:title,strCategoryThumb:thumbnail} = category;
            return(
              <Link to={`meal/category/${title}`} className='text-decoration-none text-dark my-3 col' key={id}>
                <div className="card text-bg-dark border-0">
                   <img src={thumbnail} class="card-img" alt="CategoryImage"/>
                   <div className="card-img-overlay">
                   <span className="badge text-bg-light">New</span>
                   </div>
                </div>
              </Link>
            )
          })
        }

      </div>
    </>
  )
}

export default CategoryList
