import React from "react";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <div className="jumbotron ">
      <div className="py-5">
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/Rick--Morty-Season-6EWKSF-feature.jpg"
          classNameName="card-img-top"
          alt="..."
        />
        <p className="lead text-light">
          Discover your favorite Rick & Morty characters
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
        Discover characters
      </a>
      </div>
      
    </div>
  );
}
