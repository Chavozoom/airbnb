import React from "react";

import logo from "../assets/airbnb.svg";
import list from '../assets/list.svg';

import Login from "./Login";
import Register from "./Register";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="logo" width="120" height="60" />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/create">
                Anuncie seu espaço no Airbnb
              </a>
            </li>
          </ul>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
                <img src={list} alt=""  width="100" height="40" />
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  < Register />
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <Login />
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="/create">
                Anuncie seu espaço no Airbnb
                </a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
