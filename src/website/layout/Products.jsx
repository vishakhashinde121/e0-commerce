import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Authuser from "../authentication/Authuser";
import { Link } from "react-router-dom";

const Products = () => {
  const{http,token}=Authuser();
  const [shop, setshop] = useState([]);
 const addtoCart=(product_id)=>{
    console.log(product_id);
    http.get(`/add-to-cart/${product_id}`).then((res) =>{
    console.log(res.data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
    }
  const addtowishlist=(product_id)=>{
    http.get(`/add-to-wishlist/${product_id}`)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.error('error adding product to cart:',error);
    })
  }


const add=()=>{
  http.get(`/shop`)
  .then((response)=>{
    setshop
    (response.data.product.data);})
      .catch((error) => {
        console.error("error fetching data", error);
      });
}



  useEffect(() => {
    add();
  }, [token]);
  return (
    <>
      {/* Product */}
      <div className="bg0 m-t-30 p-b-140">
        <div className="container">
         
          <div className="row isotope-grid">

            {
               

               shop.map((el)=>(

                < div
                class="col-sm-6 col-md-4 col-lg-3 p-b-35  p-t-30 isotope-item women"
                style={{position: "relative", left: "0%", top: "0px",marginTop:"80px" }}
              >
                <div class="block2"> 
                
                  <div class="block2-pic hov-img0">
                  
                    <img
                      src={el.product_image}
                      alt="IMG-PRODUCT"
                      style={{height:"150px", width:"150px"}}
                      
                    />
          
                   
          <button className="btn block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1" onClick={()=>addtoCart( el.product_id)}> Add to cart</button>
                      
                    
                   
                  </div>
                 
          
                  <div class="block2-txt flex-w flex-t p-t-14">
                   
                    <div class="block2-txt-child1 flex-col-l ">
                      <a
                        href="product-detail.html"
                        class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                      >
                        {el.english_name}
                      </a>
          
                      <span class="stext-105 cl3">
                        
                        MRP<del>{el.mrp_price}</del> {el.sale_price}
          
                        
                      </span>
                    </div>
          
                    <div class="block2-txt-child2 flex-r p-t-3">
                      <a
                        href="#"
                        class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                      >
                       {token ? (
            
              <Link to="" data-toggle="tooltip" onClick={() => addtowishlist(el.product_id)}data-placement="right"title="Add to Wishlist" > 
                <i className="far fa-heart"/>
                
              </Link>
            
          ) : (
            null
          )}
                       
                       <a
                      href="#"
                      class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 "
                    >
                      &#8377;{el.mrp_price - el.sale_price} Off 
                      </a>
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
    </>
  );
};

export default Products;
