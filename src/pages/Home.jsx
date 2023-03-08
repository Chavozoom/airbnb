import React from "react";
import Card from "../components/Card";
import { hotel1 } from "../../hotels";

function Home() {
  return (
    <div className="Home mt-5 ms-4">
      <div class="row row-cols-auto justify-content-evenly">
        {hotel1.map((hotel, id) => {
          const {rating, desc, imgSrc, date, title, price} = hotel;
          return (
            <Card
              key={id}
              rating={rating}
              desc={desc}
              imgSrc={imgSrc}
              date={date}
              title={title + id}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
