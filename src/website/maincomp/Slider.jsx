import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div class="sec-banner bg0 p-t-80 p-b-50">
		<div class="container">
			<div class="row">
    <Carousel >
      <Carousel.Item>
      <div class="col-md-6 col-xl-4  col-lg-12 p-b-30 m-lr-auto">
        <img
          style={{ width: "100%", height: "70%" ,marginTop:"100px"}}
          className="d-block w-100"
          src="https://vsmart.ajspire.com/uploads/slider/1667996845.jpg" 
          alt="First slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="col-md-6 col-xl-4  col-lg-12 p-b-30 m-lr-auto">
        <img
          style={{ width:"100%", height:"70%" }}
          className="d-block w-100"
          src="https://vsmart.ajspire.com/uploads/slider/1671082475.jpg"
          alt="Second slide"
        />
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
		</div>
	</div>
  );
}

export default Slider;
