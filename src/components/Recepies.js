import React from "react";

const Recepies = ({ recipes }) => {
  return (
    <div className="container">
      <div className="row">
        {recipes &&
          recipes.length > 0 &&
          recipes.map((item) => {
            return (
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5>{item.recipe.label}</h5>
                    <img
                      src={item.recipe.image}
                      alt="my Img"
                      className="img-fluid w-50 mx-auto rounded-circle"
                    />
                    <h5>{item.recipe.calories}</h5>
                    {/* <ul className="list-group">
                      {recipes &&
                        recipes.length > 0 &&
                        recipes.map((data) => {
                          return (
                            <li className="list-group-item list-group-item-action">
                              {data.recipe.ingredientLines}
                            </li>
                          );
                        })}
                    </ul> */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Recepies;
