import React from "react";
import Card from "../components/Card";
import { hotel1 } from "../../hotels";

function Home() {
  return (
    <div className="Home mt-5 ms-5">
      <div class="row row-cols-auto">
        {hotel1.map((hotel, id) => {
          return (
            <Card
              key={id}
              rating={hotel.rating}
              desc={hotel.desc}
              imgSrc={hotel.imgSrc}
              date={hotel.date}
              title={hotel.title}
              price={hotel.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
