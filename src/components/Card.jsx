import React from "react";
import Carousel from "./ImageCarousel";
import { useNavigate } from "react-router-dom";
import Star from "../assets/star-fill.svg";
import Announcement from "../pages/Announcement";

function Card({ rating, imgSrc, price, date, title, desc }) {
  const navigate = useNavigate();
  const data = { rating, imgSrc, price, date, title, desc };

  const directAnnouncement = () => {
    navigate("/announcement", {
      state: {
        data: data,
      },
    });
  };

  return (
    <div class="col mt-5">
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
            <strong>R${price}</strong> noite
          </p>
          <button
            className="btn stretched-link"
            onClick={directAnnouncement}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Card;
