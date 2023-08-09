import React from 'react'
import Slider from './Slider'
import Productlist from '../component/Productlist'

import Catagorry from '../component/Catagorry'
import { Link } from 'react-router-dom'
import FeaturedItem from '../component/FeaturedItem'
import Homeblog from './Homeblog'
import Minislider from '../component/Minislider'
import Brands from '../component/Brands'
// import Brands from '../component/Brands'




const Home = () => {
  return (
    <div>
     

<Slider/>
<div class="p-b-10">
				<h3 class="ltext-103 cl5 text-center">
					Product Overview
				</h3>
			</div>
      <section class="bg0 p-t-23 p-b-140">
<div className='container'>
        <div className='row'>
    

              <Productlist/>
              

<div className="flex-c-m flex-w w-full p-t-45">
  <Link to={"/products"} className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"> Load More</Link>
    
  </div>
{/* <Catagorry/> */}

</div>
</div>
</section>
<div class="p-b-10">
				<h3 class="ltext-103 cl5 text-center">
					Catagories
				</h3>
			</div>
<Minislider/>
{/* <FeaturedItem/> */}
        {/* <Brands/> */}
        {/* <Homeblog/> */}
    </div>
    
  )
}

export default Home