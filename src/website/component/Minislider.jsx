import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";


const Minislider = () => {
  const [Sli2, SetSli2] = useState([]);

  const getSlid2 = async () => {
    try {
      const response = await fetch("https://vsmart.ajspire.com/api/categories");
      const data = await response.json();
      SetSli2(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getSlid2();
  }, []);
  const blink = keyframes`
    50% {
      opacity: 0.5;
    }
  `;
  const HeartIcon = styled(FontAwesomeIcon)`
    &.heart {
      font-size: 50px;
      animation: ${blink} 3s infinite;
      color: maroon;
      margin-right: 5px;
    }

    &.font-30 {
      font-size: 40px;
      color: pink;
    }
    &.font-10 {
        font-size: 40px;
        color: pink;
      }
  `;

  return (
    <div>
      <section
        className=""
        style={{ marginTop: "120px", background:"None" }}
      >
        <div className="container">
         
          {/* <div className="section-title text-center">
                        <h2 >Categories</h2>
                    </div> */}
          <Carousel interval={1000}>
            {Sli2.map((category, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around" >
                  {Sli2.slice(index, index + 5).map((category) => (
                    <div>
                      <link
                        to={"/category"}
                        key={category.category_id}
                        classname="suggest-card shadow my-2 rounded-bottom-5 "
                      />
                       <h5 classname="text-center text-bg-dark mt-12">
                          {category.category_name}

                          <br />
                        </h5>
                     
                      <div>
                        <img
                        classname="rounded-pill"
                        style={{ width: 200, height: 200 }}
                        src={category.category_banner}
                        alt=""
                      />
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Minislider;
