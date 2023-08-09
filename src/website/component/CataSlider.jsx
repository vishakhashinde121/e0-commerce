import React from 'react'
import { Carousel } from 'react-bootstrap'
import './New.css'

const CataSlider = () => {
  return (
    <div >
      <div className="slider-box" style={{marginTop:"100px"}}>
    <Carousel>
      <Carousel.Item>
        <img
          style={{ width: "1100px", height: "400px"}}
          className="d-block  abc "
          src="https://vsmart.ajspire.com/ecommerce/category_banner/category_banner/1658897374banner.jpg" 
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "1100px", height: "400px"}}
          className="d-block"
          src="https://vsmart.ajspire.com/uploads/product_image/default.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>  
        
        
        
        
        

    </div>
  )
}

export default CataSlider