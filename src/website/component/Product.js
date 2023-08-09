import React from "react";

const Product = (props) => {
  return (
    

		
    
    <div
      class="col-sm-6 col-md-4 col-lg-3 p-b-35  p-t-30 isotope-item women"
      style={{position: "relative", left: "0%", top: "0px" }}
    >
      {/* <!-- Block2 --> */}
      <div class="block2">
        <div class="block2-pic hov-img0">
         
          <img
            src={props.product_image}
            alt="IMG-PRODUCT"
            style={{height:"150px", width:"150px"}}
            
          />

          <a
            href="#"
            class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
          >
            &#8377;{props.mrp_price - props.sale_price} Off 
            <br/>
            Add to cart
          </a>
         
        </div>

        <div class="block2-txt flex-w flex-t p-t-14">
         
          <div class="block2-txt-child1 flex-col-l ">
            <a
              href="product-detail.html"
              class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              {props.english_name}
            </a>

            <span class="stext-105 cl3">
              {" "}
              MRP<del>{props.mrp_price}</del> {props.sale_price}
            </span>
          </div>

          <div class="block2-txt-child2 flex-r p-t-3">
            <a
              href="#"
              class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
            >
              <img
                class="icon-heart1 dis-block trans-04"
                src="images/icons/icon-heart-01.png"
                alt="ICON"
              />
              <img
                class="icon-heart2 dis-block trans-04 ab-t-l"
                src="images/icons/icon-heart-02.png"
                alt="ICON"
              />
            </a>
            
          </div>
        </div>
      </div>
      
    </div>
   
  

  );
};

export default Product;
{
  
}
