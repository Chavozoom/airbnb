import React from "react";
import search from "../assets/search.svg";
import heart from "../assets/heart.svg";
import user from "../assets/person-circle.svg";


function Footer() {
  return (
    <>
      <div
        className="d-md-none fixed-bottom bg-light d-flex justify-content-evenly  my-2 "
        style={{ height: 65 }}
      >
        <div>
          <img className="ms-2 mt-2" src={search} alt="Search" height={25} />
          <p>Explorar</p>
        </div>
        <div>
          <img className="ms-3 mt-2" src={heart} alt="heart" height={25} />
          <p>Favoritos</p>
        </div>
        <div className="d-fluid">
          <img className="ms-2 mt-2" src={user} alt="user" height={25}/>
          <p>Entrar</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
