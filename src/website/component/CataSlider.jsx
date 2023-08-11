import React from 'react'
import { Carousel } from 'react-bootstrap'
import './New.css'

const CataSlider = () => {
  return (
    <div className='container'>
      <div className='row'>
          <div  className='col-lg-12 col-sm-12 col-md-12'>
      <div className="slider-box" style={{marginTop:"100px"}}>
    <Carousel>
      <Carousel.Item>
        <div className='col-lg-12 col-sm-12 col-md-12'>
                 <img
          style={{ width: "auto", height: "auto" }}
          className="d-block"
          src="https://vsmart.ajspire.com/ecommerce/category_banner/category_banner/1658897374banner.jpg" 
          alt="First slide"
          fluid 
        />
      
      </div>
 
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "1100px", height: "400px"}}
          className="d-block"
          src="https://vsmart.ajspire.com/uploads/product_image/default.png"
          alt="Second slide" fluid 
        />
      </Carousel.Item>
    </Carousel>
    </div>  
        
        
        
        
        

    </div>
    </div>
    </div>
  )
}

export default CataSlider