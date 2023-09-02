import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import Authuser from "../authentication/Authuser";
import AliceCarousel from 'react-alice-carousel';



const Minislider = () => {
  const{http,token}=Authuser();

  const [Sli2, SetSli2] = useState([]);

  const getSlid2 = ()=>{
    http.get("/categories").then((res)=>{
      console.log(res.data);
      SetSli2(res.data.categories)
    })
    
  }

  useEffect(() => {
    getSlid2();
  }, [token]);


  return (
    <>
      
      <div style={{marginTop:'30px',marginLeft:'160px'}}>
      <AliceCarousel 
      mouseTracking
      items={Sli2.map((el) => (
        <div  className="slider-image-container" >
          <img src={el.category_banner} height={'100px'} width={'100px'} className="slider-image" />
        </div>
      ))}
      
      responsive={{
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
        1200: { items: 5 },
      }}
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
    </div>

   
    </>
     
  );
};

export default Minislider;
