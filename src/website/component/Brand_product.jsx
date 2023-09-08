import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link, useParams } from 'react-router-dom';
import Authuser from '../authentication/Authuser';

const Brand_product = () => {
    const{http}=Authuser();
  let { brand_id } = useParams();
  //product
   const[Brand,setBrand]=useState([]);
   //brandsname  for banner
   const[Brands_,setBrands_]=useState([])
 
 //scroll menu
   const[Cat,setCate]=useState([]);
   const[Brandss,setBrandss]=useState([]);
 
 //slider after banner
   const[Sub,setSub]=useState([]);
 
   //count for brand and categorywise 
   const[Count,setCount]=useState([]);
  //  console.log(Count);
   const[Brand1,setBrand1]=useState([]);
  //  console.log(Brand1);
 
   const getCategoryData =()=>{
     // console.log();
     
http.get(`/product-shop/${brand_id}`)
      //  fetch(`https://vsmart.ajspire.com/api`)
      //  .then((response) => response.json())
       .then((data) => {
        console.log(data.data);
           // console.log(data);
         setBrand(data.data.brand);
         setBrands_(data.data.brands_);
         setCate(data.data.cat);
        setBrandss(data.data.brandss);
        //  setSub(data.data.sub);
         setCount(data.data.count['']);
         setBrand1(data.data.count1['']);
       })
   
   
   
      //  .catch((error) => {
      //      console.error("Error fetching data:", error);
      //  });
       
     
 
   }
   useEffect(() => {
     getCategoryData();
   }, [brand_id]);
 
   return (
     <>
      
       <div id="header-carousel" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
 
           <div className='img'>
             <img src='https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg' style={{ height: "500px", width: "1300px", opacity: "0.5" }} />
             <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
               
              
                 <div className="container" style={{ paddingBottom: "150px",color:"black" }}>
                   <h2>{Brands_.brand_name}</h2>
                   <h4 >
 
                        <Link to="/" style={{color:"black"}}>Home</Link>     /
                   </h4>
                 </div>
                 </div>
           </div>
         </div>
       </div>
 <div style={{marginTop:'30px',marginLeft:'160px'}}>
       <AliceCarousel 
       mouseTracking
       items={Brandss.map((brandss) => (
         <div key={brandss.brand_id} className="slider-image-container" >
           <img src={brandss.brand_image} alt="" height={'100px'} width={'100px'} className="slider-image" />
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
           <div class="col-lg-3 col-md-3 col-sm-3">
             <div className="shop-widget">
               <h6 className="shop-widget-title">Filter by Category</h6>
               <form>
 <ul class="shop-widget-list shop-widget-scroll scoll-active">
                   {Cat.map((cat) => (
                     <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                       <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                       <label className="custom-control-label" htmlFor="price-all">{cat.category_name} </label>/
                       {Count.filter((count)=>count.product_category_id==cat.category_id).map((count)=>(
                        count.cat_count
                       ))}
                     
                        </div>
                   ))}
                 </ul>
               </form>
             </div>
 
             <div className="shop-widget">
               <h4 className="shop-widget-title">Filter by Brand</h4>
               <form>
 <ul class="shop-widget-list shop-widget-scroll">
                   {Brandss.map((cat) => (
                     <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-2">
                       <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                       <label className="custom-control-label" htmlFor="price-all">{cat.brand_name} </label>/
                       {Brand1.filter((count1)=>count1.brand_id==cat.brand_id).map((count1)=>(
                        count1.brand_count
                       ))}
                     
                        </div>
                   ))}
                 </ul>
               </form>
             </div>
 
 
           </div>
           <div className="bg0 m-t-23 p-b-140">
        <div className="container">
         
          <div className="row isotope-grid">
          <div class="col-lg-9 col-md-9 col-sm-9">
          <section class="shop_section layout_padding">
               <div class="container">
                
                 <div class="row">
                 
                             <div class="col-sm-6 col-md-4 col-lg-3">
                                 <div class="box">

          {
                         Brand.slice(0, 10).map((item) => (

               
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div className="block2">
              <div class="feature-label">
                  <label class="label-text order"> &#8377;{item.mrp_price-item.sale_price} Off</label>
                      </div>
                <div className="block2-pic hov-img0">
                  <img src={item.product_image} alt="IMG-PRODUCT" />
                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Add to cart
                  </a>
                </div>
                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      {item.english_name}
                    </a>
                    <span class="stext-105 cl3"> MRP<del>{item.mrp_price}</del> {item.sale_price}</span>
                  </div>
                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
                ))
            }
           
          </div>
          {/* Load more */}
          
        </div>
      </div>
      </div>
      </section>
      </div>
      
      </div>
      </div>
      </div>
           {/* <div class="col-lg-9">
             <section class="shop_section layout_padding">
               <div class="container">
                
                 <div class="row">
                 
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
 
 
 
 
           </div> */}
         </div>
       </div>
     </>
   )
}

export default Brand_product