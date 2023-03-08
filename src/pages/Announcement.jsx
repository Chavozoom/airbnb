import React from "react";
import { useLocation } from "react-router-dom";
import star from "../assets/star-fill.svg";
import share from "../assets/share.svg";
import ImageCarousel from "../components/ImageCarousel";

function Announcement() {
  const location = useLocation();
  const { rating, desc, imgSrc, date, title, price } = location.state.data;
  console.log(location);

  const copyURL = () => {
    navigator.clipboard.writeText("BPIJSGAPJ");
  };

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
              <img src={share} onClick={copyURL} alt="share" className="me-3" />
              Compartilhar
            </button>
          </div>
        </div>
        <div className="row ">
          <div className="col-6 d-none d-sm-block">
            <img class="w-100" src={imgSrc[0]} alt="Hotel" height={406} />
          </div>
          <div className="col-6 d-none d-sm-block">
            <div className="row">
              <div className="col d-none d-sm-block">
                <img class="w-100" src={imgSrc[1]} alt="Hotel" height={200} />
              </div>
              <div className="col d-none d-md-block">
                <img class="w-100 " src={imgSrc[2]} alt="Hotel" height={200} />
              </div>
            </div>
            <div className="row ">
              <div className="col d-none d-sm-block">
                <img
                  class="w-100 mt-2"
                  src={imgSrc[3]}
                  alt="Hotel"
                  height={200}
                />
              </div>
              <div className="col d-none d-md-block">
                <img
                  class="w-100 mt-2"
                  src={imgSrc[4]}
                  alt="Hotel"
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="d-sm-none">
          <ImageCarousel imgSrc={imgSrc} />
        </div>

        <div className="row my-2">
          <div className="col-8 ">
            <h3>{desc}</h3>
          </div>
          <div className="col text-end ">
            <h3><strong>R${price}</strong> noite</h3>
          </div>
          <div className="row">
            <p>4 hóspedes · 1 quarto · 2 camas · 1 banheiro</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcement;
