import React, { useEffect, useState } from "react";
import CatagoryItem from "./CatagoryItem";
import CataSlider from "./CataSlider";

const Catagory = () => {
  const [catg, setcatg] = useState([]);

  useEffect(() => {
    fetch(`https://vsmart.ajspire.com/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        setcatg(data.categories);
        console.log(setcatg);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="container">

        <div className="row"></div>
        <CataSlider/>
      </div>
    <div className="container">
      <div className="row">
          
          
          
          
      <div className='col-lg-3'>
          <CatagoryItem />
        </div>
        <div className="col-lg-9">
          <div className="container">
            <div className="row">
          
          {catg.map((el) => (
            <div className="col-lg-4" style={{boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',marginTop:"20px"}}>
              <div className="block1  d-flex ">
                <img
                  src={el.category_banner}
                  alt="IMG-BANNER"
                
                  style={{ height: "200px",width: "200px" }}
                />
                <a
                  href="product.html"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      {el.category_name}
                    </span>
                    <span className="block1-info stext-102 trans-04">
                      {el.updated_at}
                    </span>
                  </div>
                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
          </div>
          </div>
          </div>
          </div>
        </div>
     
    </>
  );
};

export default Catagory;
