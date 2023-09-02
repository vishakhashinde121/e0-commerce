import React from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom'
import Minislider from '../component/Minislider'
import Brandslider from '../component/Brandslider'
import Product from '../component/Product'

// import Brands from '../component/Brands'




const Home = () => {
  return (
    <div>
     

<Slider/>

      <div class="p-b-10">
				<h3 class="ltext-103 cl5 text-center" style={{textShadow:"2px 2px #fffff0"}}>
					Categories
				</h3>
			</div>
      <Minislider/>
      {/* <div class="p-b-10">
				<h3 class="ltext-103 cl5 text-center">
					Product Overview
				</h3>
			</div> */}
      <section class="bg0 p-t-23 p-b-140">
		<div class="container">
			<div class="p-b-10">
				<h3 class="ltext-103 cl5 text-center">
					Product Overview
				</h3>
			</div>
    

              {/* <Product/> */}
<Product/>			  
             

<div className="flex-c-m flex-w w-full p-t-45 m-t-50">
  <Link to={"/shop"} className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"> Load More</Link>
    
  </div>


</div>

</section>
<div class="p-b-10">
				<h3 class="ltext-103 cl5 text-center">
					Our Brands
				</h3>
			</div>
      <div className='container-fluid'>
<Brandslider/>
</div>

    </div>
    
  )
}

export default Home