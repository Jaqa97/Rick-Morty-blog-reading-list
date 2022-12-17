import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark rounded border border-3 py-3">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand text-light" href="#">
            Rick & Morty
          </a>
        </Link>
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
              <Link to="/personajes">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Characters
                </a>
              </Link>
            </li>
            <li className="nav-item text-light">
              <Link to="/discover">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Locations
                </a>
              </Link>
            </li>
            <li className="nav-item text-light">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Episodes
              </a>
            </li>
          </ul>
          <div class="btn-group dropstart">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle bg-success"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos <i class="fas fa-heart"></i>
            </button>
            <ul class="dropdown-menu">
            <li className="dropdown-item">Personaje<i className="fas fa-trash ms-5"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
