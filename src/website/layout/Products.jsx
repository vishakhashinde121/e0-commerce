import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Authuser from "../authentication/Authuser";

const Products = () => {
  const{http}=Authuser();
  const [shop, setshop] = useState([]);
  useEffect(() => {
    http.get(`/shop`)
    
      .then((data) => {
        setshop(data.shop.data);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, []);
  return (
    <>
      {/* Product */}
      <div className="bg0 m-t-30 p-b-140">
        <div className="container">
         
          <div className="row isotope-grid">

            {
               

               shop.map((el)=>(

               
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div className="block2">
              <div class="feature-label">
                  <label class="label-text order"> &#8377;{el.mrp_price-el.sale_price} Off</label>
                      </div>
                <div className="block2-pic hov-img0">
                  <img src={el.product_image} alt="IMG-PRODUCT" />
                  {/* <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Add to cart
                  </a> */}
                </div>
                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      {el.english_name}
                    </a>
                    <span class="stext-105 cl3"> MRP<del>{el.mrp_price}</del> {el.sale_price}</span>
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
              <button className="btn block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"> Add to cart</button>
            </div>
                ))
            }
           
          </div>
          {/* Load more */}
          
        </div>
      </div>
    </>
  );
};

export default Products;
