import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

import { Link, useSearchParams } from "react-router-dom";
import "./header.css";
import Authuser from "../authentication/Authuser";

const Header = () => {
  const { user, logout, token,http } = Authuser();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);

   const [isCartOpen, setIsCartOpen] = useState(false);
  const[removecart,setRemovecart]=useState(false);
   
   const [brand, setbrand] = useState([]);
  const [scatg, setscatg] = useState([]);
  const [subcat, setsubcat] = useState([]);
  //cart product show
  const[Cartproduct,setCartproduct]=useState([]);
  const[Cartcount,setCartcount]=useState([]);
  //search 
  const [searchTerm, setSearchTerm] = useState('');
  const [param,setparam]=useSearchParams();
  //wishlist
  const[wish,setWish]=useState([]);
  const[wishcount,setWishcount]=useState([]);
  
    const handleSearchChange = event => {
      setSearchTerm(event.target.value);
    };
  //brand show
  const [showbrandmenu, setshowbrandmenu] = useState(false);
  //sub catagory show
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleShowCart = () => {
    setIsCartOpen(true);
  };

  const handleHideCart = () => {
    setIsCartOpen(false);
  };
  const handleSearchIconClick = () => {
    setSearchModalVisible(true);
    //console.log('Searching for:'+ searchQuery);
  };

  const handleCloseModal = () => {
    setSearchModalVisible(false);
  };

  
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
  const remove=()=>{
  
  setRemovecart(false);
  }

  const getbrand=()=>{
    http.get(`/brands`)
  
    .then((response)=>{
      setbrand(response.data.brands);
    })
    
  }
const Wishlist=(product_id)=>{
  http.get(`add-to-wishlist/${product_id}`)
  .then((resp)=>{
    console.log(resp.data)
    setWishcount(resp.data.wishlist.length)
    alert('product added');
    
    // setWish(resp.wishlist)
    // 


}).catch((error)=>{
  console.log("error"+error);
})
}
  const getcatagory = () => {
    http.get("/categories")
   
      .then((response) =>{
        setscatg( response.data.categories);
     
      
        
        response. data.categories.forEach((category) => {
          getsubcatagory(category.category_id);
        });
        console.log(setscatg);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const getcartproduct=()=>{
http.get(`/get-cart-list`).then((res)=>{ 
  setCartproduct(res.data.cart);
  setCartcount(res.data.cart.length);

})
  }

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
    getbrand();
      }, []);

      useEffect(()=>{ 
        if (token) {
          getcartproduct();
          Wishlist();
        }
        

      },[token])

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

                 
                  
                {token ? (
                  <a href="#">
                    <i className="fa fa-user s_color" /> {user.name}
                  </a>
                ):(
                  <a href="#">
                    <i className="fa fa-user s_color" /> My Account
                  </a>
                )}

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
                  src="https://www.48hourslogo.com/48hourslogo_data/2020/03/07/94379_1583572417.jpg"
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
                    <Link to="/shop">Shop</Link>
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
                                    
                                      <Link
                                        to={`/product-shop/${el.category_id}/${sub.subcategory_id}`}
                                      >
                                        <a style={{color:"black"}}>{sub.subcategory_name} </a>
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                          <div class="col-lg-12">
                            <div class="section-btn-25">
                              <i class="fa fa-eye" aria-hidden="true">

                                <Link
                                  to={"/catagory"}
                                  class="btn btn-outline"
                                  varient="secondary"
                                 
                                >
                                  
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

                      <a href="" style={{ color:"black" }}>
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
                        <div className="row">
                          
                            
                              <div className="col-sm-3">
                                <ul className="megamenu-list sub">
                                  {
                                brand.slice(0,10).map((el)=>(
                                  <li >
                                    <Link to={`/product-shop/${el.brand_id}`} style={{color:'black'}}>
                                    {el.brand_name}
                                    </Link>
                                  </li>



                                  ))
                                }
                                </ul>
                                </div>
                                <div className="col-lg-12">
                                <div class="section-btn-25">
                                <i class="fa fa-eye" aria-hidden="true">

                                  <Link to={"/brands"}>View All Brands</Link>
                                  </i>
                                  </div>
                                </div>
                           
                          
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

          

                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>

                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                  {token ? (
                        <Link onClick={logout} ><i class="fa "></i> Logout</Link>
                      ) : (
                        <Link to="/login"><i class="fa fa-lock"></i> Login</Link>
                      )}
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
                    {isSearchModalVisible ?(
                      <div className="search-modal" >
                        <div className="search-modal-content">
                      <i class="fa fa-times"  aria-hidden="true" onClick={handleCloseModal} style={{marginLeft:"290px"}}/>
                        <div className="search">
                        <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
<Link to={`/search?q=${encodeURIComponent(searchTerm)}`}
      onChange={()=>setparam({q:searchTerm})}>
      <i class="fa fa-search"></i>
      </Link>
</div>
                        </div>
                      </div>
                    ):( <></>)}
                  </div>
          
                </div>

                
                
						
                {token ? (
  <div className="wrap-icon-header flex-w flex-r-m">
    <div
      className={`icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart`}
      data-notify={Cartcount}
      onClick={handleShowCart}
    >
      <i className="zmdi zmdi-shopping-cart"></i>
      
    </div>
    <Link to={"/wishlist"}
      className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
      data-notify={wishcount}
      onClick={Wishlist}
    >
 <i className="zmdi zmdi-favorite-outline"></i>
    </Link>
  </div>
) : (
  <>
    <Link to="/login">Login</Link>
  </>
)}

						
            
						

						
					</div>


               
              {/* </div> */}
            </nav>
          </div>
        </div>

        {/* <!-- Header Mobile --> */}
        <div class="wrap-header-mobile">
          {/* <!-- Logo moblie -->		 */}
          <div class="logo-mobile">
            <a href="">
              <img
                src="https://www.48hourslogo.com/48hourslogo_data/2020/03/07/94379_1583572417.jpg"
                alt="IMG-LOGO"
              />
            </a>
          </div>

          {/* <!-- Icon header --> */}
          <div class="wrap-icon-header flex-w flex-r-m m-r-15">
            <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              
            <i
                      class="zmdi zmdi-search"
                      onClick={handleSearchIconClick}
                    ></i>
                    {isSearchModalVisible ?(
                      <div className="search-modal" >
                        <div className="search-modal-content">
                      <i class="fa fa-times"  aria-hidden="true" onClick={handleCloseModal} style={{marginLeft:"290px"}}/>
                        <div className="search">
                        <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
<Link to={`/search?q=${encodeURIComponent(searchTerm)}`}
      onChange={()=>setparam({q:searchTerm})}>
      <i class="fa fa-search"></i>
      </Link>
</div>
                        </div>
                      </div>
                    ):( <></>)}           </div>

{token ? (
  <div className="wrap-icon-header flex-w flex-r-m">
    <div
      className={`icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart`}
      data-notify={Cartcount}
      onClick={handleShowCart}
    >
      <i className="zmdi zmdi-shopping-cart"></i>
      
    </div>
    <Link to={"/wishlist"}
      className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
      data-notify={wishcount}
      onClick={Wishlist}
    >
 <i className="zmdi zmdi-favorite-outline"></i>
    </Link>
  </div>
) : (
  <>
    <Link to="/login">Login</Link>
  </>
)} 
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

                {token ? (
                  <a href="#">
                    <i className="fa fa-user s_color" /> {user.name}
                  </a>
                ) : (
                  <a href="#">
                    <i className="fa fa-user s_color" /> My Account
                  </a>
                )}

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
              <Link to={"/shop"}>Shop</Link>
            </li>

            {/* <li>
              <a href="shoping-cart.html" class="label1 rs1" data-label1="hot">
                Features
              </a>
            </li> */}

            <li>
              <Link to={"/category"}>Categories</Link>
            </li>

            <li>
              <Link to={"/about"}>About</Link>
            </li>

            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
                  {token ? (
                        <Link onClick={logout} ><i class="fa "></i> Logout</Link>
                      ) : (
                        <Link to="/login"><i class="fa fa-lock"></i> Login</Link>
                      )}
                  </li>
          </ul>
        </div>

        {/* ... rest of the header content */}
        {/* <!-- Menu Mobile --> */}

        {/* <!-- Modal Search --> */}
       
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
        
        
        <li className="header-cart-item flex-w flex-t m-b-12" >
         

        {Cartproduct.map((el)=>(
<>
<i classname="zmdi zmdi-close" onclick={remove}>
</i>
          <div className="header-cart-item-img">
          <img  src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" />
          </div>
          <div className="header-cart-item-txt p-t-8">
            <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
              {el.english_name}
            </a>
            <span className="header-cart-item-info">
              {el.cart_product_qty}x {el.cart_price}
            </span>
          </div>
          </>
           ))}
        </li>
       
      
      </ul>
      <div className="w-full">
        <div className="header-cart-total w-full p-tb-40">
          {}
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
    {/* !----wishlist--- */}
    {/* <div className={`wrap-header-cart js-panel-cart ${isCartOpen ? 'show-header-cart' : ''}`}>
  <div className="s-full js-hide-cart" />
  <div className="header-cart flex-col-l p-l-65 p-r-25">
    <div className="header-cart-title flex-w flex-sb-m p-b-8">
      <span className="mtext-103 cl2">
        Your Wishlist
      </span>
      <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
        <i className="zmdi zmdi-close"  onClick={handleHideCart}/>
      </div>
    </div>
    <div className="header-cart-content flex-w js-pscroll">
      <ul className="header-cart-wrapitem w-full">
        
        
        <li className="header-cart-item flex-w flex-t m-b-12">
        {wish.map((el)=>(
<>
          <div className="header-cart-item-img">
          <img  src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" />
          </div>
          <div className="header-cart-item-txt p-t-8">
            <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
              {el.english_name}
            </a>
            <span className="header-cart-item-info">
              {el.cart_product_qty}x {el.cart_price}
            </span>
          </div>
          </>
           ))}
        </li>
       
      
      </ul>
      <div className="w-full">
        <div className="header-cart-total w-full p-tb-40">
          {}
        </div>
        <div className="header-cart-buttons flex-w w-full">
          <Link to={"/wishlist"} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"> View Cart</Link>
          
          <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
            Check Out
          </a>
        </div>
      </div>
    </div>
  </div>
</div> */}
    </>
	
  );
};

export default Header;
