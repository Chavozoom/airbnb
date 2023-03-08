import React from "react";
import Carousel from "./ImageCarousel";
import Star from "../assets/star-fill.svg";

function Card({ rating, imgSrc, price, date, title, desc }) {
  return (
    <div class="col mx-2 mb-5">
      <div
        class="card"
        style={{ width: "320px", height: "400px", border: "none" }}
      >
        <Carousel imgSrc={imgSrc} />
        <div class="card-body" style={{ position: "relative" }}>
          <div class="d-flex justify-content-between">
            <h5 class="card-title">{title}</h5>
            <div class="card-text ">
              <img src={Star} alt="star" width={18} />
              <strong className="mt-5">{rating}</strong>
            </div>
          </div>

          <p class="card-title">{desc}</p>
          <p class="card-title">{date}</p>
          <p class="card-title">
            R$<strong>{price}</strong> noite
          </p>
          <a href="#" class="stretched-link"></a>
        </div>
      </div>
    </div>
  );
}

export default Card;
