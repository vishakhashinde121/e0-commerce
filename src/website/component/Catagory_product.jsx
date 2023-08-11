import React from 'react'
import { useEffect, useState } from 'react';
// import '../../App.css';
// import { FaHome, FaShoppingBasket } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Catagory_product = () => {

  let { cat_id, sub_id } = useParams();
 //product
  const[Category,setCategory]=useState([]);
  //categoryname  for banner
  const[category_,setCategory_]=useState([]);
//subcategoryname  for banner
  const[subcategory_,subCategory_]=useState([]);
  console.log(subcategory_);
//scroll menu
  const[Cat,setCate]=useState([]);
  const[brand,setBrand]=useState([]);

//slider after banner
  const[Sub,setSub]=useState([]);

  //count for brand and categorywise 
  const[Count,setCount]=useState([]);
  console.log(Count);
  const[Count1,setCount1]=useState([]);
  console.log(Count1);

  const getCategoryData =()=>{
    // console.log();
    try {
      fetch(`https://vsmart.ajspire.com/api/product-shop/${cat_id}/${sub_id}`)
      .then((response) => response.json())
      .then((data) => {
          // console.log(data);
        setCategory(data.category.data);
        setCategory_(data.category_);
        subCategory_(data.subcategory_);
        setCate(data.cat);
        setBrand(data.brand);
        setSub(data.sub);
        setCount(data.count);
        setCount1(data.count1);
      })
  
  
  
      .catch((error) => {
          console.error("Error fetching data:", error);
      });
      
    } catch (error) {
      
    }
   

  }
  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <>
     
      <div id="header-carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">

          <div className='img'>
            <img src='https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg' style={{ height: "500px", width: "1300px", opacity: "0.5",color: "green" }} />
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              
             
                <div className="container" style={{ paddingBottom: "150px",color:"black" }}>
                  <h2>{category_.category_name}</h2>
                  <h4 >

                       <Link to="/" style={{color:"black"}}>Home</Link>     /
                    {subcategory_.subcategory_name}
                  </h4>
                </div>
                </div>
          </div>
        </div>
      </div>
<div style={{marginTop:'30px',marginLeft:'160px'}}>
      <AliceCarousel 
      mouseTracking
      items={Sub.map((subslider) => (
        <div key={subslider.subcategory_image} className="slider-image-container" >
          <img src={subslider.subcategory_image} alt={subslider.Iceream} height={'100px'} width={'100px'} className="slider-image" />
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
<div class="container ">
        <div class="row content-reverse">
          <div class="col-lg-3">
            <div className="shop-widget">
              <h6 className="shop-widget-title">Filter by Category</h6>
              <form>
<ul class="shop-widget-list shop-widget-scroll">
                  {Cat.map((cat) => (
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                      <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                      <label className="custom-control-label" htmlFor="price-all">{cat.category_name} </label>/
                    
                       </div>
                  ))}
                </ul>
              </form>
            </div>




          </div>
          <div class="col-lg-9">
            <section class="shop_section layout_padding">
              <div class="container">
               
                <div class="row">
                {
                        Category.slice(0, 10).map((item) => (
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="box">
                                    <a href="">
                                        <div class="img-box">
                                            <img class="img-fluid w-100" src={item.product_image} alt="" style={{ width: "300%", height: "300px" }}    ></img>
                                        </div>
                                        <div class="detail-box">
                                            <h6>
                                                {item.english_name}
                                            </h6>
                                            <h6>

                                                <span>

                                                </span>
                                            </h6>

                                            <h6 class="feature-price">

                                                MRP<del style={{ color: 'red' }}>{item.mrp_price}</del><span style={{color:"green"}}>{item.sale_price}<small>/only</small></span>
                                            </h6>

                                        </div>
                                        <div class="new" >
                                            <span>
                                                &#8377;{item.mrp_price - item.sale_price}off
                                            </span>
                                        </div>
                                        <button className="product-add  addd" style={{ width: "250px", height: "40px" }} title="Add to Cart">
                                            <a className="link-dark" href="/user-login">
                                                

                                                <span>add


                                                </span>
                                            </a>
                                        </button>

                                    </a>
                                </div>

                            </div>
                        )
                        )

                    }
                </div>
               
              </div>
            </section>




          </div>
        </div>
      </div>
    </>
  )
}
export default Catagory_product