import React from "react";

export default function NewAppComponent() {
  return (
    <div className="row mt-3">
      {false &&
      <div className="container-fluid">
        <div className="alert alert-warning">No cards to join :(</div>
      </div>}
      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card 1</h5>
            <p className="card-text">Some Card 1 Description</p>
            <button
              onClick={() => {
              }}
              className="btn btn-outline-primary">Join Card
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card 2</h5>
            <p className="card-text">Some Card 2 Description</p>
            <button
              onClick={() => {
              }}
              className="btn btn-outline-primary">Join Card
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card 3</h5>
            <p className="card-text">Some Card 3 Description</p>
            <button
              onClick={() => {
              }}
              className="btn btn-outline-primary">Join Card
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card 4</h5>
            <p className="card-text">Some Card 4 Description</p>
            <button
              onClick={() => {
              }}
              className="btn btn-outline-primary">Join Card
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}