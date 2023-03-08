import React from "react";
import { useLocation } from "react-router-dom";
import star from "../assets/star-fill.svg";
import share from "../assets/share.svg";

function Announcement() {
  const location = useLocation();
  const { rating, desc, imgSrc, date, title, price } = location.state.data;
  console.log(location);

  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <h2>{title}</h2>{" "}
          </div>
        </div>
        <div class="row d-flex justify-content-between">
          <div class="col-6">
            <img src={star} alt="" /> <strong>{rating}</strong> · {desc}
          </div>

          <div class="col-6 text-end">
            <button className="btn">
              <img src={share} alt="share" className="me-3" />
              Compartilhar
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6 ">
            <img class="w-100" src={imgSrc[0]} alt="Hotel" />
          </div>
          <div className="col-6 ">
            <div className="row">
              <div className="col">
                <img class="w-100" src={imgSrc[0]} alt="Hotel" />
              </div>
              <div className="col">
                <img class="w-100" src={imgSrc[0]} alt="Hotel" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img class="w-100 mt-2" src={imgSrc[0]} alt="Hotel" />
              </div>
              <div className="col">
                <img class="w-100 mt-2" src={imgSrc[0]} alt="Hotel" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mt-4">
            <h3>{desc}</h3>
          </div>
          <div className="col text-end mt-4">
            <h3>R${price} noite</h3>
          </div>
        </div>
        <div className="row">
          <p>4 hóspedes · 1 quarto · 2 camas · 1 banheiro</p>
        </div>
      </div>
    </>
  );
}

export default Announcement;
