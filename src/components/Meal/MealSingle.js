import React from "react";
import { Link } from "react-router-dom";

function MealSingle({ meal }) {
  console.log(meal);
  let tags = meal?.tags?.split(",");
  let instructions = meal?.instructions?.split("\r\n");
  instructions = instructions?.filter(
    (instructions) => instructions.length > 1
  );
  return (
    <>
      <div className="bg-warning p-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/" className="text-decoration-none text-dark">
                <i className="fa-solid fa-home"></i>
              </Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              {meal?.title}
            </li>
          </ol>
        </nav>
      </div>

      <h3 className="text-uppercase text-warning my-4">Meal Details</h3>

      <div className="my-4 card shadow border-0 p-4 rounded-4">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 justify-content-center align-items-start">
          <div className="col">
            <img
              src={meal?.thumbnail}
              className="img-fluid rounded-4"
              alt="mealImage"
            />
          </div>
          <div className="col">
            <h3 className="text-uppercase text-warning lh-lg">{meal?.title}</h3>
            <div className="py-4 border-top">
              <div className="d-flex my-3">
                <div className="fw-bold">Category : &nbsp;</div>
                <div className="text-muted">{meal?.category}</div>
              </div>
              <div className="d-flex my-3">
                <div className="fw-bold">Source : &nbsp;</div>
                <div className="text-muted">
                  <a
                    className="text-decoration-none text-dark"
                    href={meal.source}
                  >
                    {meal.source
                      ? (meal?.source).substring(0, 40) + "..."
                      : "Not Found"}
                  </a>
                </div>
              </div>
              <div className="d-flex my-3">
                <h6 className="fw-bold">Tags :</h6>
                <ul className="list-unstyled ps-4 ms-0 d-flex flex-wrap">
                  {tags?.map((tag, idx) => (
                    <li key={idx} className="me-2">
                      <span class="badge bg-transparent border border-warning text-dark">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-warning p-3">
                <h6 className="fw-bold">Ingredients :</h6>
                <ul className="row row-cols-2 nav align-items-center">
                  {meal?.ingredients?.map((ingredient, idx) => (
                    <li key={idx} className="text-light my-2 nav-item">
                      <span className="p-1 me-2">{idx + 1} :</span>
                      <span className="text-uppercase">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light p-3 my-3 rounded-4">
          <h3>Measure:</h3>
          <ul className="row row-cols-2 align-items-center justify-content-center">
            {meal?.measures?.map((measure, idx) => (
              <li key={idx} className="d-flex">
                <span className="mx-2">
                  <i className="fa-solid fa-spoon"></i>
                </span>
                <span className="text-muted">{measure}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-light p-3 my-3 rounded-4">
          <h3>Instructions:</h3>
          <ul className="row row-cols-1">
            {
              instructions?.map((instructions, idx) => (
              <li key={idx} className="d-flex mb-2">
                <span className="mx-2">
                  <i className="fa-solid fa-square-check"></i>
                </span>
                <span className="text-muted">{instructions}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MealSingle;
