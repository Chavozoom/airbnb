import React from "react";
import { hotel1 } from "../../hotels";
import CreateCards from "../components/CreateCard";

function Home() {

  return (
    <div className="Home mt-5 ms-4">
      <div class="row row-cols-auto justify-content-evenly">
          <CreateCards key="hotelArray" hotel1={hotel1} />;
      </div>
    </div>
  );
}

export default Home;
