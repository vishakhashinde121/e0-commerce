import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Brands = () => {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    fetch('https://vsmart.ajspire.com/api/brands')
      .then((response) => response.json())
      .then((data) => setBrand(data));
  }, []);

  const handleOnSlideChange = (event) => {
    // Handle slide change if needed
    console.log(event);
  };

  const handleOnSlideChanged = (event) => {
    // Handle slide changed if needed
    console.log(event);
  };

  return (
    <div>
      <h2>Shop By Brands</h2>
      <AliceCarousel
        mouseTracking
        items={brand.map((item) => (
          <div key={item.id} className="slider-image-container">
            <p>{item.brand_name}</p>
          </div>
        ))}
        onSlideChange={handleOnSlideChange}
        onSlideChanged={handleOnSlideChanged}
        responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        }}
        autoPlay
        autoPlayInterval={3000} // Set to the desired interval in milliseconds
        infinite
      />
    </div>
  );
};

export default Brands;
