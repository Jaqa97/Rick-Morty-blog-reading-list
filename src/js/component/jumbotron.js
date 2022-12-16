import React from "react";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <div className="jumbotron ">
      <div className="my-5 py-2">
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/Rick--Morty-Season-6EWKSF-feature.jpg"
          classNameName="card-img-top"
          alt="..."
        />
        <Link to="/personajes">
        <a className="btn btn-primary btn-lg mt-2 me-5" href="#" role="button">
        Discover characters
      </a>
      </Link>
      <Link to="/discover">
      <a className="btn btn-primary btn-lg ms-5 mt-2" href="#" role="button">
        Discover Locations
      </a>
      </Link>
      </div>
      
    </div>
  );
}
