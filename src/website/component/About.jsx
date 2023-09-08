import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    < div>
     

      <section className="inner-section single-banner"  style={{
          marginTop:'180px'                                           
        }}>
        <div
          className="container"
          style={{ backgroundImage:"url(https://himotto.com/storage/main_banner/images/11628333935.jpg)",height:"380px",opacity: "0.5",color: "green" }}
        >
          <h2 style={{marginLeft:"350px",marginTop:"90px"}}>About our company</h2>
          <h4 className="text-black">
            <ol className="breadcrumb" >
              <i   className="fas fa-home" /> 
              <li className="breadcrumb-item">
                <Link to={"/"}style={{marginLeft:"350px",marginTop:"30px"}}>Home</Link>
                
                             </li>
              <li style={{marginLeft:"430px",marginTop:"-25px"}}> About</li>
            </ol>
          </h4>
        </div>
      </section>
      <section
        className="inner-section about-company"
        style={{ boxShadow: "5px 0px 5px 5px grey",padding:"30px" ,marginTop:"200px"}}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Vishwakarma Super Mart Private Limited</h2>
                <p>
                  is a direct selling company that deals with the distribution
                  of a wide range of high quality, lifestyle products for day to
                  day life. Our aim is to deliver the best products directly to
                  our consumers, who form the core of the company. Our networks
                  of registered distributors are trained leaders and
                  representatives who ensure that consumers get the best
                  products, with additional free business opportunity benefits.
                  The profitable opportunities offered have influenced many
                  customers to purchase products from non-retail environments,
                  owing to the expansion of direct selling across the country.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <img
                  style={{ width: 250 }}
                  src="https://vsmart.ajspire.com/images\about1.png"
                  alt="about"
                  data-pagespeed-url-hash={3642807828}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <img
                  style={{ width: 250 }}
                  src="https://vsmart.ajspire.com/images\about2.png"
                  alt="about"
                  data-pagespeed-url-hash={3937307749}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="inner-section about-company"
        style={{ boxShadow: "5px 5px 5px 5px grey" ,marginBottom:"20px"}}
      >
        <div className="container">
          <div className="row align-items-center" style={{padding:"30px",marginTop:"55px"}}>
            <div className="col-lg-6" >
              <div className="about-content">
                <h2 style={{ color: "orangered" }}>Our Vision</h2>
                <p>
                  Vishwakarma Super Mart Private Limited to strive hard
                  continuously and constantly to make every individual customer
                  financially self-reliant, economically and socially strong
                  through the self - help team concept.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 style={{ color: "orangered" }}>Our Mission</h2>
                <p>
                  Vishwakarma Super Mart Private Limited has vision to create
                  wealth that provides personal, professional, social, financial
                  and spiritual growth to everyone. We aim to provide the
                  highest level of quality and service possible with respect to
                  the products and services that we offer and strive to create
                  an environment and culture that lends itself to our
                  distributor’s success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
