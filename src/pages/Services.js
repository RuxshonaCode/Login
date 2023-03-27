import React from "react";
import { useParams } from "react-router-dom";
import allProducts from "../data";
const Services = () => {
  const params = useParams();

  const currentDate = allProducts.find((el) => {
    return el.id == params.id;
  });

  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={currentDate.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{currentDate.processor}</h5>
          <p class="card-text">
            {currentDate.azu}
          </p>
          <p>{currentDate.videcard}</p>
          <p>{currentDate.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
