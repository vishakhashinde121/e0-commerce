import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);

   const [isCartOpen, setIsCartOpen] = useState(false);

  const handleShowCart = () => {
    setIsCartOpen(true);
  };

  const handleHideCart = () => {
    setIsCartOpen(false);
  };
  const handleSearchIconClick = () => {
    setSearchModalVisible(true);
  };

  const handleCloseModal = () => {
    setSearchModalVisible(false);
  };

  const [brand, setbrand] = useState([]);
  const [scatg, setscatg] = useState([]);
  const [subcat, setsubcat] = useState([]);
  const [showbrandmenu, setshowbrandmenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };

  const handmouseenter = () => {
    setshowbrandmenu(true);
  };
  const handmouseleave = () => {
    setshowbrandmenu(false);
  };

  const getcatagory = () => {
    fetch(`https://vsmart.ajspire.com/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        setscatg(data.categories);
        data.categories.forEach((category) => {
          getsubcatagory(category.category_id);
        });
        console.log(setscatg);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getsubcatagory = (category_id) => {
    fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`)
      .then((response) => response.json())
      .then((data) => {
        const newsubcategory = data.subcategories;
        setsubcat((previssubcat) => {
          const filtersubcategory = newsubcategory.filter(
            (newsubcategory) =>
              !previssubcat.some(
                (previs) =>
                  previs.subcategory_id === newsubcategory.subcategory_id
              )
          );

          return [...previssubcat, ...filtersubcategory];
        });
      });
  };

  useEffect(() => {
    getcatagory();
  }, []);

  return (
    <>
      <header>
        {/* <!-- Header desktop --> */}
        <div class="container-menu-desktop">
          {/* <!-- Topbar --> */}
          <div class="top-bar fixed-top">
            <div class="content-topbar flex-sb-m h-full container">
              <div class="left-top-bar">
                Welcome to VS Mart in Your Dream Online Store!
              </div>

              <div class="right-top-bar flex-w h-full">
                <a href="#" class="flex-c-m trans-04 p-lr-25">
                  Help &amp; FAQs
                </a>

                <Link to={"/login"} class="flex-c-m trans-04 p-lr-25">
                  My Account
                </Link>

                <a href="#" class="flex-c-m trans-04 p-lr-25">
                  EN
                </a>

                <a href="#" class="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>

          <div
            class="wrap-menu-desktop "
            style={{ top: "40px", backgroundColor: "white" }}
          >
            <nav class="limiter-menu-desktop container">
              {/* <!-- Logo desktop -->		 */}
              <a href="#" class="logo">
                <img
                  src="https://vsmart.ajspire.com/images/logo1.png"
                  alt="IMG-LOGO"
                />
              </a>

              {/* <!-- Menu desktop --> */}
              <div class="menu-desktop">
                <ul class="main-menu ">
                  <li class="nav-item">
                    <Link to={"/"}>Home</Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/Products">Shop</Link>
                  </li>

                  <li class="nav-item">
                    <Dropdown
                      show={showMegaMenu}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a href="" style={{ color: "black" }}>
                        Catagory
                      </a>

                      <Dropdown.Menu
                        className=""
                        style={{
                          height: "auto",
                          width: "1000px",
                          marginLeft: "-220px",
                        }}
                      >
                        <div className="row">
                          {scatg.slice(0, 10).map((el) => (
                            <div className=" col-sm-3 ">
                              <h5>{el.category_name} </h5>

                              <ul className="megamenu-list sub">
                                {subcat
                                  .filter(
                                    (sub) =>
                                      sub.subcategory_category_id ===
                                      el.category_id
                                  )
                                  .slice(0, 6)
                                  .map((sub) => (
                                    <li className="fltr ">
                                      {" "}
                                      <Link
                                        to={`/product-shop/${el.category_id}/${sub.subcategory_id}`}
                                      >
                                        <a>{sub.subcategory_name} </a>{" "}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                          <div class="col-lg-12">
                            <div class="section-btn-25">
                              <i class="fas fa-eye">
                                <Link
                                  to={"/catagory"}
                                  class="btn btn-outline"
                                  varient="secondary"
                                  style={{ backgroundColor: "green" }}
                                >
                                  {" "}
                                  View All Catagory
                                </Link>
                              </i>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li class="nav-item">
                    <Dropdown
                      show={showbrandmenu}
                      onMouseEnter={handmouseenter}
                      onMouseLeave={handmouseleave}
                    >
                      {/* <Link to={"/brands"} >Brands</Link> */}

                      <a href="" style={{ color: "black" }}>
                        Brands
                      </a>

                      <Dropdown.Menu
                        className="mega-menu"
                        style={{
                          height: "auto",
                          width: "1000px",
                          alignItems: "center",
                        }}
                      >
                        <a href="">
                          <ul>
                            <li>pragati</li>
                            <li>vish</li>
                            <li>tanaya</li>
                            <li>Harsha</li>
                            <li>Pranjali</li>
                          </ul>
                        </a>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  {/* 
              <li>
                
                <Link to={"/brands"}>Brands
            
        </Link>
              </li>  */}

                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>

                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Icon header --> */}
              <div class="wrap-icon-header flex-w flex-r-m">
                <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                    <i
                      class="zmdi zmdi-search"
                      onClick={handleSearchIconClick}
                    ></i>
                    {isSearchModalVisible && (
                      <div className="search-modal" onClick={handleCloseModal}>
                        <div className="search-modal-content">
                          <input
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                    )}
                  </div>
          
                </div>

                
                <div class="wrap-icon-header flex-w flex-r-m">
						

						<div className={`icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart`} data-notify="2" onClick={handleShowCart}>
        <i className="zmdi zmdi-shopping-cart"></i>
      </div>

						<a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
							<i class="zmdi zmdi-favorite-outline"></i>
						</a>
					</div>


                {/* <Link to={"/login"} class="flex-c-m trans-04 p-lr-25">My Account</Link> */}
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- Header Mobile --> */}
        <div class="wrap-header-mobile">
          {/* <!-- Logo moblie -->		 */}
          <div class="logo-mobile">
            <a href="">
              <img
                src="https://vsmart.ajspire.com/images/logo1.png"
                alt="IMG-LOGO"
              />
            </a>
          </div>

          {/* <!-- Icon header --> */}
          <div class="wrap-icon-header flex-w flex-r-m m-r-15">
            <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i class="zmdi zmdi-search"></i>
            </div>

            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify="2"
            >
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>

            <a
              href="#"
              class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify="0"
            ></a>
          </div>

          {/* <!-- Button show menu --> */}
          <div
            className="btn-show-menu-mobile hamburger hamburger--squeeze"
            onClick={() => {
              setIsMobileMenuVisible(!isMobileMenuVisible);
              console.log("isMobileMenuVisible:", isMobileMenuVisible);
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>
        <div
          className={`menu-mobile ${
            isMobileMenuVisible ? "active" : "not-active"
          }`}
        >
          <ul class="topbar-mobile">
            <li>
              <div class="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>

            <li>
              <div class="right-top-bar flex-w h-full">
                <a href="#" class="flex-c-m p-lr-10 trans-04">
                  Help &amp; FAQs
                </a>

                <Link to={"/login"} class="flex-c-m trans-04 p-lr-25">
                  My Account
                </Link>

                <a href="#" class="flex-c-m p-lr-10 trans-04">
                  EN
                </a>

                <a href="#" class="flex-c-m p-lr-10 trans-04">
                  USD
                </a>
              </div>
            </li>
          </ul>

          <ul className="main-menu-m">
            <li>
              <Link to={"/"}>Home</Link>
              <span class="arrow-main-menu-m">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </li>

            <li>
              <Link to={"/products"}>Products</Link>
            </li>

            <li>
              <a href="shoping-cart.html" class="label1 rs1" data-label1="hot">
                Features
              </a>
            </li>

            <li>
              <Link to={"/category"}>Categories</Link>
            </li>

            <li>
              <Link to={"/about"}>About</Link>
            </li>

            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* ... rest of the header content */}
        {/* <!-- Menu Mobile --> */}

        {/* <!-- Modal Search --> */}
        <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div class="container-search-header">
            <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <form class="wrap-search-header flex-w p-l-15">
              <button class="flex-c-m trans-04">
                <i class="zmdi zmdi-search"></i>
              </button>
              <input
                class="plh3"
                type="text"
                name="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </header>
      {/* <!-- cart--! */}
      <div className={`wrap-header-cart js-panel-cart ${isCartOpen ? 'show-header-cart' : ''}`}>
  <div className="s-full js-hide-cart" />
  <div className="header-cart flex-col-l p-l-65 p-r-25">
    <div className="header-cart-title flex-w flex-sb-m p-b-8">
      <span className="mtext-103 cl2">
        Your Cart
      </span>
      <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
        <i className="zmdi zmdi-close"  onClick={handleHideCart}/>
      </div>
    </div>
    <div className="header-cart-content flex-w js-pscroll">
      <ul className="header-cart-wrapitem w-full">
        <li className="header-cart-item flex-w flex-t m-b-12">
          <div className="header-cart-item-img">
            <img src="images/item-cart-01.jpg" alt="IMG" />
          </div>
          <div className="header-cart-item-txt p-t-8">
            <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
              White Shirt Pleat
            </a>
            <span className="header-cart-item-info">
              1 x $19.00
            </span>
          </div>
        </li>
        <li className="header-cart-item flex-w flex-t m-b-12">
          <div className="header-cart-item-img">
            <img src="images/item-cart-02.jpg" alt="IMG" />
          </div>
          <div className="header-cart-item-txt p-t-8">
            <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
              Converse All Star
            </a>
            <span className="header-cart-item-info">
              1 x $39.00
            </span>
          </div>
        </li>
        <li className="header-cart-item flex-w flex-t m-b-12">
          <div className="header-cart-item-img">
            <img src="images/item-cart-03.jpg" alt="IMG" />
          </div>
          <div className="header-cart-item-txt p-t-8">
            <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
              Nixon Porter Leather
            </a>
            <span className="header-cart-item-info">
              1 x $17.00
            </span>
          </div>
        </li>
      </ul>
      <div className="w-full">
        <div className="header-cart-total w-full p-tb-40">
          Total: $75.00
        </div>
        <div className="header-cart-buttons flex-w w-full">
          <Link to={"/shoppingcart"} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"> View Cart</Link>
          
          <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
            Check Out
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
	
  );
};

export default Header;
