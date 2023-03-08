import React, { useState } from "react";

import logo from "../assets/airbnb.svg";
import list from "../assets/list.svg";
import search from "../assets/search.svg";
import user from "../assets/person-circle.svg";

import DialogBoxLogin from "./DialogLogin";
import DialogBoxRegister from "./DialogRegister";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <nav className="fixed-top bg-body">
        <div class="row my-2 fixed ">
          <div class="col d-none d-md-block">
            <a class=" ms-5" href="/">
              <img src={logo} alt="logo" width="120" height="60" />
            </a>
          </div>

          <div class="col">
            <form class="d-flex flex items-center border-2 rounded-full py-2">
              <input
                class="form-control me-1"
                type="search"
                placeholder="Search for the place"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
                <img src={search} alt="Search" />
              </button>
            </form>
          </div>

          <div class="col d-none d-md-block">
            <div class="d-flex ">
              <ul class="navbar-nav me-auto d-none d-md-block">
                <li>
                  <a
                    class="btn btn-primary-outline mt-2 ms-5 d-none d-lg-block "
                    aria-current="page"
                    href="/create"
                  >
                    Anuncie seu espaço no Airbnb
                  </a>
                </li>
              </ul>

              <div class="dropdown me-3 my-auto ">
                <button
                  class="btn btn-white dropdown-toggle rounded"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={list} alt="menu" width="50" height="30" />
                  <img
                    src={user}
                    class="rounded-circle"
                    alt="person"
                    width="30"
                    height="30"
                  />
                </button>

                <ul
                  class="dropdown-menu me-5"
                  aria-labelledby="dropdownMenuButton1"
                >
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
                    <a class="dropdown-item " href="/create">
                      Anuncie seu espaço no Airbnb
                    </a>
                  </li>
                </ul>
              </div>

              <div class="collapse list-inline">
                <li class="dropdown"></li>

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
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row d-none d-md-block">
          <div className="col bg-warning">.</div>
          <div className="col bg-dark">f</div>
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
