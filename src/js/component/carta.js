import React from "react";
import { Link } from "react-router-dom";


export default function Carta() {
  return (
    <div className="card text-bg-dark">
      <img
        src="https://elvertederodeideas.files.wordpress.com/2018/05/total-rickall.png"
        className="card-img"
        alt="..."
      />
      <div className="card-img-overlay">
        <h1 className="col-3 text-center card-title border rounded border-4 border-dark bg-light bg-gradient p-1 opacity-75">
          Rick & Morty
        </h1>
        <h4 className="col-4 card-text text-center card-title border rounded border-4 border-dark bg-light bg-gradient p-1 opacity-75">
          All Rick & Morty's characters and locations in just one place
        </h4>
        <Link to="/discover/characters/:id">
          <button
            type="button"
            class="btn btn-outline-primary bg-success text-white justify-content-center border border-4 border-dark mt-3 me-5 ms-1 "
          >
            Discover all characters
          </button>
        </Link>

        <button
          type="button"
          class="btn btn-outline-primary bg-success text-light justify-content-center border border-4 border-dark mt-3 ms-4"
        >
          Discover all the locations
        </button>
      </div>
    </div>
  );
}
