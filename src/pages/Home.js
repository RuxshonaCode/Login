import React from "react";
import { Link } from "react-router-dom";
import allProducts from "../data";

const Home = () => {

  // const basePc = allProducts.filter(person => person.category === 'business')

  return (
    <div>
      <h1>Base</h1>
      {allProducts.map(el => {
        return(
          <Link to={`${el.id}`}><h1>{el.id}</h1></Link>
        )
      })}
    </div>
  );
};

export default Home;

