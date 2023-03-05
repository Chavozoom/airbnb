import React, { useState } from "react";

import logo from "../assets/airbnb.svg";
import list from "../assets/list.svg";
import search from "../assets/search.svg";

import DialogBoxLogin from "./DialogLogin";
import DialogBoxRegister from "./DialogRegister";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

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

        <div className="flex items-center border-2 rounded-full py-2">
          <form class="px-11 d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search for the place"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              <img src={search} alt="Search" />
            </button>
          </form>
        </div>

        <div
          class="collapse navbar-collapse list-inline"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active list-inline"
                aria-current="page"
                href="/create"
              >
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
              <img src={list} alt="" width="100" height="40" />
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <button
                  onClick={() => setShowRegister(true)}
                  class="dropdown-item"
                >
                  <strong>Cadastrar-se</strong>
                </button>
              </li>

              <li>
                <button
                  onClick={() => setShowLogin(true)}
                  class="dropdown-item"
                >
                  Entrar
                </button>
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
      <div>
        <DialogBoxLogin
          showLogin={showLogin}
          onCloseLogin={() => setShowLogin(false)}
        />
      </div>
      <div>
        <DialogBoxRegister
          showRegister={showRegister}
          onCloseRegister={() => setShowRegister(false)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
