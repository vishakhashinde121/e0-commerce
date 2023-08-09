import React from "react";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";

const Register = () => {
  return (
    <section className="user-form-part" style={{boxShadow:"10px 4px 3px 2px grey" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
            <div className="user-form-logo">
              <a href="/">
                <img
                  src="https://vsmart.ajspire.com/images\logo1.png"
                  alt="logo"
                  
                  style={{marginLeft:"450px" }}
                />
              </a>
            </div>
            <div className="user-form-card" >
              <div className="user-form-title">
                <h2 style={{marginLeft:"400px", color:"black" }}>
                  Join Now!
                </h2>
                <br />
                <p style={{marginLeft: "400px", color: "black" }}>
                  Setup A New Account In A Minute
                </p>
              </div>
              <div className="user-form-group d-flex">
                <img
                  style={{width:"600px",height:"300px" }}
                  className="responsiv"
                  src="https://vsmart.ajspire.com/images\images.jpg"
                  alt=""
                  
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <form action="/register" method="POST" className="user-form" style={{padding:"15px"}}>
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="UmybbNMb6rdqaCJo0YNxnoy5NqjyMk9bw47LPoBE"
                  />{" "}
                  <div className="form-group">
                    <span style={{color:"black"}}>Name</span>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <span style={{color:"black"}}>Email</span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <span style={{color:"black"}}>Mobile No</span>
                    <input
                      type="number"
                      className="form-control"
                      name="mob_no"
                      placeholder="Enter your Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <span style={{color:"black"}}>Address</span>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter your address"
                    />
                  </div>
                  <div className="form-group">
                    <span style={{color:"black"}}>Password</span>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group">
                    <span style={{color:"black"}}>Password Confirm</span>
                    <input
                      type="password"
                      className="form-control"
                      name="confirm_password"
                      placeholder="Enter repeat password"
                    />
                  </div>
                  <div className="form-group">
                    <span style={{color:"black"}}>Select Franchise</span>
                    <select
                      name="franchise_id"
                      id="order"
                      className="form-control select2"
                      data-live-search="true"
                    >
                      <option value selected>
                        Choose Franchise
                      </option>
                      <option value={2059}>
                        Pimple Gurav Branch , Maharashtra colony, Galli
                        No-2,Amarnath Family Restaurant, Near Kalpataru
                        Society,Pimple-Gurav-411061
                      </option>
                      <option value={2058}>
                        Indapur Branch , Ingale Peth, near Bhargavrao Garden,Old
                        Kacheri road,Indapur -413106
                      </option>
                      <option value={2054}>
                        Wai Branch , Songirwadi,Bavdhan naka,Wai-412803
                      </option>
                      <option value={2}>Satara Branch , Satara</option>
                    </select>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="check"
                      style={{marginLeft:"5px"}}
                    />
                    <label className="form-check-label" htmlFor="check" >
                      Accept all the <a href="#">Terms &amp; Conditions</a>
                    </label>
                  </div>
                  <div className="form-button" style={{height:"30px",width:"200px",background:"green",marginLeft:"150px"}}>
                    <button type="submit" style={{color:"white" ,marginLeft:"70px",height:"30px"}}>register</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="user-form-remind">
              <p style={{marginLeft:"350px"}}>
                Already Have An Account? <Link to={"/login"}>login here</Link>
              </p>
            </div>
          <Bottom/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
