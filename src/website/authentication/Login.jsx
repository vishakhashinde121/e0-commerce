import React, { useEffect, useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Authuser from "./Authuser";
import { toast } from "react-toastify";

const Login = () => {
  const notify =(M)=> toast.error(M);
  const{http,token,settoken}=Authuser();
  const[Disable,setDisable]=useState(0);
  const navigate = useNavigate();
  useEffect(() => {
 
       if(token !=null){
          navigate('/');
       }
       window.scrollTo({
          top:0,
          behavior:"smooth"
         });
      
    }, [navigate,token]);
   
  const[formData,setformData]= useState(
      {
       
         email:'',
         
         password:'',
         

      }
  );
  const onInputchange=(e)=>{
      setformData({...formData,[e.target.name]:e.target.value})
  
      }
      const onSubmit = (e) => {e.preventDefault();
          http.post("/user/login",formData).then((responce)=>{
             console.log(responce.data)
             if(responce.data.token){
              settoken(responce.data.user_data ,responce.data.token);
              navigate ('/');
             }else{
              notify(responce.data.massage);
             }
             setDisable();
          });
         };
         
  return (
    <section className="user-form-part">
  <div className="container">
    <div className="row" style={{ justifyContent: "center", marginTop: "40px" }}>
      <div className="col-lg-6 col-md-8 col-sm-10">
        <a>
          <img
            src="https://vsmart.ajspire.com/images/logo1.png"
            alt=""
            style={{ width: "100%", marginBottom: "20px" }}
          />
        </a>
        <div
          style={{
            backgroundColor: "#73c2fb",
            padding: '20px',
            boxShadow: '1px 0px 5px 5px grey',
            borderRadius: '10px'
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="email" onChange={(e) => onInputchange(e)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => onInputchange(e)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me!" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => onSubmit(e)}
            style={{ width: "100%", height: "40px" }}
          >
            Login
          </Button>
          <br></br>
          <p style={{ height: "10px" }}>
            Forgot Your Password !{" "}
            <a href="" style={{ color: "maroon" }}>
              Reset Here
            </a>
          </p>
        </div>
      </div>
    </div>
    <br />
    <div
      className="col-lg-6 col-md-8 col-sm-10"
      style={{
        backgroundColor: "#73c2fb",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px",
        boxShadow: "1px 0px 5px 5px grey",
        borderRadius: '10px',
        marginTop: '20px',
      }}
    >
      <p style={{ paddingTop: "10px" }}> Don't Have Any Account? <Link to={"/register"}>Register Here</Link></p>
    </div>
  </div>
</section>

//     <section className="user-form-part">
//       <div className="container">
//         <div className="row" style={{justifyContent:"center",marginTop:"140px" }}>
//           <div className="col">
//             <a>
//               <img
//                 src="https://vsmart.ajspire.com/images/logo1.png"
//                 alt=""
//                 style={{ marginLeft:"450px"}}
//               />
//             </a>
//             <br/>
//             <div style={{
//                 marginLeft: '250px',
//                 backgroundColor: '#73c2fb',
//                 marginRight:"300px",

//                 // marginRight: "{spacing}em;",
//                 padding: '20px',
//                 boxShadow: '1px 0px 5px 5px grey'
//               }}>
//             {/* <Form
              
//             > */}
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="text" placeholder="Enter email" name="email"  onChange={(e)=>onInputchange(e)}/>
//                 <Form.Text className="text-muted">
//                   We'll never share your email with anyone else.
//                 </Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" name="password"  onChange={(e)=>onInputchange(e)}/>
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Remember Me !" />
//               </Form.Group>
//               <Button
//                 variant="primary"
//                 type="submit" onClick={(e)=>onSubmit(e)}
//                 style={{ marginLeft: "200px",height: "40px",width:"100px" ,position:'relative'}}
//               >
//                 Login
//               </Button>
//               <br></br>
//               <p style={{height: "10px", marginLeft:"100px" }}>
//                 Forgot Your Password !{" "}
//                 <a href="" style={{ color: "maroon" }}>
//                   Reset Here
//                 </a>
//               </p>
//             {/* </Form> */}
//             </div>
//           </div>
//         </div>
//         <br/>
//         <div className="col" style={{height:"70px",width:"580px",backgroundColor:"#73c2fb",marginLeft:"250px" ,padding:"10px", boxShadow: "1px 0px 5px 5px grey"}}>
// <p style={{marginLeft:"100px",paddingTop:"10px"}}> Don't Have Any Account? <Link to={"/register"}>Register Here</Link></p>
   
//             </div>
//       </div>
//     </section>
  );
};

export default Login;
