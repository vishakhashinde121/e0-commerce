import React from 'react'

const Blog = () => {
  return (
    <div>
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: 'url("https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg")',marginTop:"210px",height:"300px"}}>
  <h2 className="ltext-105 cl0 txt-center">
    Blog
  </h2>
</section>
<div className="row isotope-grid" style={{position: 'relative', height: '2439.29px',marginTop:"130px"}}>
  <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" style={{position: 'absolute', left: '0%', top: 0,boxShadow:"0px 4px 3px 5px grey",marginTop:"40px"}}>
    {/* Block2 */}
    <div className="block2">
      <div className="block2-pic hov-img0">
        {/* <img src="images/product-01.jpg" alt="IMG-PRODUCT" /> */}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur rerum explicabo ea consequatur illo, sunt, incidunt aspernatur quod assumenda, laboriosam veniam dolorum voluptate fugit nobis? Dolore omnis sapiente minima voluptate.</p>

        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
          Read More
        </a>
      </div>
      <div className="block2-txt flex-w flex-t p-t-14">
        <div className="block2-txt-child1 flex-col-l ">
          <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
            Esprit Ruffle Shirt
          </a>
          <span className="stext-105 cl3">
            Occupation
          </span>
        </div>
        <div className="block2-txt-child2 flex-r p-t-3">
          <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
            <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
            <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
          </a>
        </div>
      </div>
    </div>
  </div>

</div>






    </div>
  )
}

export default Blog