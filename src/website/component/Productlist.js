import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const Productlist = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
  fetch(`https://vsmart.ajspire.com/api/products`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setproduct(data.products.data);
    });
  }, []);
  
  return (
    <div className="container">
      <div className="row shadow">
        {
        product.slice(0, 15).map((el) => {
          return (
            <Product
              english_name={el.english_name}
              product_image={el.product_image}
              mrp_price={el.mrp_price}
              sale_price={el.sale_price}

            />
          );
        })}
      </div>
    </div>

   
  );
};

export default Productlist;
