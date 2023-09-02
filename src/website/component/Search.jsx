import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Authuser from "../authentication/Authuser";

const Search = () => {
  const { http, token } = Authuser();
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const q = searchParams.get("q");
  const filterdata = product.filter((record) =>
    record.english_name.toLowerCase().includes(q.toLowerCase())
  );

  console.log(filterdata);

  const getproduct = () => {
    http
      .get(`/products`)
      .then((response) => {
        setProduct(response.data.products.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getproduct();
  }, [token]);

  const addtoCart = (product_id) => {
    console.log(product_id);
    http
      .get(`/add-to-cart/${product_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <>    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-all text-center mt-5">
            <h1>search product</h1>
          </div>
        </div>
      </div>
      </div>
      
      <div className="container">
        <div className="row aba">

      
        
        {filterdata.map((el) => (
          <div
            class="col-sm-6 col-md-4 col-lg-3 p-b-35  p-t-30 isotope-item women the_content">
            <div class="block2">
              <div class="block2-pic hov-img0">
                <img
                  src={el.product_image}
                  alt="IMG-PRODUCT"
                  style={{ height: "150px", width: "150px" }}
                />

                <button
                  className="btn block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  onClick={() => addtoCart(el.product_id)}
                >
                  
                  Add to cart
                </button>
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
        ))}
      {/* <h2>No Result Available</h2> */}
    
    </div>
    </div>
    </>

  );
};

export default Search;
