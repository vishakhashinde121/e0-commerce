import React, { useState } from 'react'

const SearchTest = () => {
  const product=[{
    "id":101,
    "name":"abc",
    "price":200
  },{
    "id":102,
    "name":"buscuit",
    "price":150
  },
  {
    "id":103,
    "name":"fairness cream",
    "price":300
  }
  ]
  const [prod,setProd]=useState(" ");
  return (
    <div  >
      <input type="text" name="ans" id="ans" ></input>
<h2>Which Product do You want to see?</h2>
<input type='text' onChange={((e)=>setProd(e.target.value))} style={{background:"blue",color:"white",textAlign:"center"}}></input>
<button type='submit' style={{height:'35px',width:"50px",background:"green"}}>Find</button>




    </div>
  )
}

export default SearchTest