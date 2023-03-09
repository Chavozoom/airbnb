import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel({ imgSrc }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={100000000}>
      {imgSrc.map((img, id) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img}
              alt={"image " + id}
              height={190}
              width={288}
              key={id}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
