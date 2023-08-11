import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [Login,setLogin]=useState({
    
    email:'',
    
    password:''
   
    
  });
  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`https://vsmart.ajspire.com/api/user/login`, {
      method: 'POST',
      body: JSON.stringify(Login),  // Convert formData to JSON string
      headers: {
        'Content-Type': 'application/json',  // Specify content type as JSON
        // Include other headers if needed
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle response data here
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const  oninputChange=(e)=>{
    setLogin({...Login,[e.target.name]:e.target.value})
  }
  return (
    <section className="user-form-part">
      <div className="container">
        <div className="row" style={{justifyContent:"center",marginTop:"140px" }}>
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
            {/* <Form
              
            > */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name="email"  onChange={(e)=>oninputChange(e)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"  onChange={(e)=>oninputChange(e)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me !" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit" onClick={(e)=>onSubmit(e)}
                style={{ marginLeft: "200px",height: "40px",width:"100px" ,position:'relative'}}
              >
                Login
              </Button>
              <br></br>
              <p style={{height: "10px", marginLeft:"100px" }}>
                Forgot Your Password !{" "}
                <a href="" style={{ color: "maroon" }}>
                  Reset Here
                </a>
              </p>
            {/* </Form> */}
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
