import React, { useState, useEffect } from "react";
import Card from "../components/Card";

function CreateCards({ hotel1 }) {
  const createCard = () => {
    return hotel1.map((hotel, id) => {
      const { rating, desc, imgSrc, date, title, price } = hotel;
      return (
        <Card
          id={id}
          key={id}
          rating={rating}
          desc={desc}
          imgSrc={imgSrc}
          date={date}
          title={title + id}
          price={price}
        />
      );
    });
  };

  return <>{createCard()}</>;
}

export default CreateCards;

/* hotel1.map((hotel, id) => {
          const { rating, desc, imgSrc, date, title, price } = hotel;
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
        }) */
/* hotel1.filter((hotel, id) => {
                if (search === undefined) {
                  return hotel;
                } else if (
                  (hotel.title + id)
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return hotel;
                }
              }).map((hotel, id) => {
                const { rating, desc, imgSrc, date, title, price } = hotel;
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
              })  */
