import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const FeaturedItem = () => {
    const items = [
        <div className="item"><h3>Slide 1</h3></div>,
        <div className="item"><h3>Slide 2</h3></div>,
        <div className="item"><h3>Slide 3</h3></div>,
        // Add more items as needed
      ];
      const carouselConfig = {
        // Customize the carousel configuration as per your requirements
        // For example, you can set autoPlay, autoPlayInterval, animationDuration, etc.
        autoPlay: true,
        autoPlayInterval: 1000,
        animationDuration: 1000,
        // Add more configuration options here
      };
    
  return (
    




    <div>
      <AliceCarousel items={items} {...carouselConfig} />
    </div>
  




    
  )
}

export default FeaturedItem