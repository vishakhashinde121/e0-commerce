import React, { useState, useEffect } from 'react'; // Step 1: Import useState and useEffect
import './New.css'
import CataSlider from './CataSlider';

const CatagoryItem = () => {
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
    <div>
      
      <div className='container'>
        <div className='row'>
          
            <div className="overflow-auto">
              <h6>Filter by Category</h6>
              <ul class="shop-widget-scroll">
                {catg.slice(0, 20).map((el) => (
                  <li key={el.category_id}> 
                    <input  type="checkbox" />
                    
                      <label>
                        {el.category_name}
                      </label>
                      <span className="shop-widget-number">
                        (569)
                      </span>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CatagoryItem;
