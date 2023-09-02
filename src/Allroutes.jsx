import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './website/layout/Master'
import Home from './website/maincomp/Home'

import Catagory from './website/component/Catagory'

import Products from './website/layout/Products'

// import Register from './website/component/Register'
import Blog from './website/component/Blog'
// import Brands from './website/component/Brands'
import Contact from './website/component/Contact'
import About from './website/component/About'

import Catagory_product from './website/component/Catagory_product'
import Shopingcart from './website/component/Shopingcart'
import Register from './website/authentication/Register'
import Login from './website/authentication/Login'
import Brand_product from './website/component/Brand_product'
import Search from './website/component/Search'


const Allroutes = () => {
  return (
    <div>
<BrowserRouter>

<Routes>

    <Route path='/register' element={<Register/>}/>





    <Route path='/' element={<Master Rcf={Home}/>}></Route>
    <Route path='/shoppingcart' element={<Master Rcf={Shopingcart}/>}></Route>
    <Route path='/shop' element={<Master Rcf={Products}/>}></Route>
    <Route path="/product-shop/:cat_id/:sub_id"  element={<Master Rcf={Catagory_product}     />} ></Route>
    <Route path="/product-shop/:brand_id"  element={<Master Rcf={Brand_product}     />} ></Route>

    {/* <Route path='/catagory' element={<Master Rcf={Catagory}/>}></Route> */}
    <Route path='/contact' element={<Master Rcf={Contact}/>}/>
    <Route path='/about' element={<Master Rcf={About}/>}/>
    <Route path='/blog' element={<Master Rcf={Blog}/>}/>
    {/* <Route path='/brands' element={<Master Rcf={Brands}/>}/> */}
    <Route path='/login' element={<Login/>}/>
<Route path='/search' element={<Master Rcf={Search}      />}/>
</Routes>
</BrowserRouter>




    </div>
  )
}

export default Allroutes