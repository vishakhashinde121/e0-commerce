import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="user-form-part">
      <div className="container">
        <div className="row" style={{justifyContent:"center" }}>
          <div className="col">
            <a>
              <img
                src="https://vsmart.ajspire.com/images/logo1.png"
                alt=""
                style={{ marginLeft:"450px"}}
              />
            </a>
            <br/>
            <div style={{
                marginLeft: '250px',
                backgroundColor: '#73c2fb',
                marginRight:"300px",

                // marginRight: "{spacing}em;",
                padding: '20px',
                boxShadow: '1px 0px 5px 5px grey'
              }}>
            <Form
              
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me !" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ marginLeft: "200px", height: "40px", width: "100px" }}
              >
                Login
              </Button>
              <br></br>
              <p style={{height: "10px", marginLeft: "100px" }}>
                Forgot Your Password !{" "}
                <a href="" style={{ color: "maroon" }}>
                  Reset Here
                </a>
              </p>
            </Form>
            </div>
          </div>
        </div>
        <br/>
        <div className="col" style={{height:"70px",width:"580px",backgroundColor:"#73c2fb",marginLeft:"250px" ,padding:"10px", boxShadow: "1px 0px 5px 5px grey"}}>
<p style={{marginLeft:"100px",paddingTop:"10px"}}> Don't Have Any Account? <Link to={"/register"}>Register Here</Link></p>
   
            </div>
      </div>
    </section>
  );
};

export default Login;
