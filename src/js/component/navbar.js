import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark rounded border border-3 py-3">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Rick & Morty
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-light">
              <a className="nav-link active text-light" aria-current="page" href="#">
              Characters
              </a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link active text-light" aria-current="page" href="#">
                Locations
              </a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link active text-light" aria-current="page" href="#">
                Episodes
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 text-center"
              type="search"
              placeholder="Discover"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
