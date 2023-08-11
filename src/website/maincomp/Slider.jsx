import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vsmart.ajspire.com/uploads/slider/1667996845.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vsmart.ajspire.com/uploads/slider/1671082475.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
