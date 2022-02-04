import React from "react";

import Modalka from './modal'

const Card = ({ character }) => {
  return (
    <>
          <div className="card mb-3 col-sm-12 col-md-6 col-lg-4">
            <div className="row g-0">
              <div className="col-4">
                <img
                  src={character.thumbnail}
                  alt="Человек-паук"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn btn-secondary btn-sm"
                  >
                    <Modalka />
                  </button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Card;
