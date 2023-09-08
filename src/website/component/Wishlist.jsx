import React, { useEffect, useState } from 'react'
import Authuser from '../authentication/Authuser';
import { Link } from 'react-router-dom';


const Wishlist = () => {
  const [wishcart,setwishcart]=useState([]);
  const[wishId,setwishId]=useState([]);
  const{token,http}=Authuser();
  const getwishcart=()=>{
http.get(`/get-wishlist`)
.then((response)=>{
  console.log(response.data);
  setwishcart(response.data.wishlist);
})
  }
  const removewishlist=(wishlistNumber)=>{
    http.get(`/remove-from-wishlist/${wishlistNumber}`).then((response)=>{
      setwishId(wishlistNumber)
alert("product removed succesfully");
    }).catch((error)=>{
      console.log("error",error);
    })
  }
  const addToCart = (product_id) => {
    http.get(`/add-to-cart/${product_id}`)
      .then((response) => {
        console.log( response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error adding product to cart:', error);
      });
  };

  useEffect(()=>{
    getwishcart();
  },[token],wishId)
  return (
  <div style={{marginTop:'200px'}}>
  
  <div className="all-title-box">
    <div className="container">
      <div className="row">
        
      <div className="col-lg-12 col-sm-12 col-md-12 asdf">
  <h2 style={{ textAlign: 'center', color: 'black' }}><b>Your Wishlist</b> </h2>
 
  <ul className="breadcrumb">
    <li className="breadcrumb-item"><Link to={'/shop'}>Shop</Link></li>
    <li className="breadcrumb-item active">Wishlist</li>
  </ul>
</div>
      </div>
    </div>
  </div>
  <div className="wishlist-box-main">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="table-main table-responsive">
            <table className="table">
              <thead>
                <tr>
                <th>SR.No</th>
                  <th>product</th>
                  <th> Name</th>
                  <th>Price </th>
                  <th>description</th>
                  <th>shoping</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {
                  wishcart.map((e)=>(
                  
                <tr>
                  <td></td>
                  <td className="thumbnail-img">
                    <a href="#">
                      <img className="img-fluid" src={`https://vsmart.ajspire.com/uploads/product_image/${e.product_image}`} style={{height:'70px'}} alt />
                    </a>
                  </td>
                  <td className="name-pr">
                    <a href="#">
                     {e.english_name}
                    </a>
                  </td>
                  <td className="price-pr">
                    <p>{e.online_price}</p>
                  </td>
                  <td className="quantity-box">{e.product_description}</td>
                  <td className="add-pr">
                    <a className="btn hvr-hover" href="#"><button onClick={()=>addToCart(e.product_id)}>Add to Cart</button></a>
                  </td>
                  <td className="remove-pr">
                    <a href="#">
                      <button onClick={removewishlist(e.wishe_id)}></button>
                      <i className="fas fa-times" />
                    </a>
                  </td>
                </tr>
                
                  ))
            }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Wishlist;