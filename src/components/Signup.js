import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink ,useNavigate} from 'react-router-dom'

function Signup() {
  let navigate=useNavigate()
  const [user,setUser]=useState({
    name:"", email:"", phone:"" , password:"",Cpassword:""
  })

  let name, value;
  const handelInput=(e)=>{
    console.log(e)
    name=e.target.name
    value=e.target.value
    setUser({...user,[name]:value})
  }

  const handelsubmit=async(e)=>{
    e.preventDefault()
    const {name,email,phone,password,Cpassword}=user

     const res=await fetch("http://localhost:5000/register",{
      // const res=await fetch("https://vouch-backend-jayeeta.onrender.com/register",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, phone, password, Cpassword
      })
    })

    const data=await res.json()
    console.log(data.Error)

    if(data.Error==="All fields are mandatory" || !data){
      window.alert("All fields are mandatory")
      console.log("Invalid registatuation")
      // navigate("/signup")
    }else if(data.Error==="Please fill correct password"){
      window.alert("Please fill correct password")
    }else{
      window.alert("Registatuation Successful")
      console.log("Registatuation  Successful")
      navigate("/")
    }
    
  }
  return (
    <div  className='registration'>
        <div className='signup-heading'>
          <h2 style={{color:"gray"}}>Signup</h2>  
        </div>
    <form method='POST'>

    <div className="input-group m-3">
        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
      <input id="name" type="text" className="form-control" name="name" placeholder="Name"
      value={user.name} onChange={handelInput}/>
    </div>

    <div className="input-group m-3">
    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
      <input id="email" type="text" className="form-control" name="email" placeholder="Email"
      value={user.email} onChange={handelInput}/>
    </div>

    <div className="input-group m-3 ">
        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
      <input id="phone" type="text" className="form-control" name="phone" placeholder="Phone No"
      value={user.phone} onChange={handelInput}/>
    </div>

    <div className="input-group m-3">
        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
      <input id="password" type="password" className="form-control" name="password" placeholder="Password"
      value={user.password} onChange={handelInput}/>
    </div>

    <div className="input-group m-3">
        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
      <input id="Cpassword" type="password" className="form-control" name="Cpassword" placeholder="Confirm Password"
      value={user.Cpassword} onChange={handelInput}/>
    </div>


    <div className="input-group form-button m-3">
    <button type="submit" class="btn btn-info" onClick={handelsubmit}>Register</button>
    </div>

        </form>
        <div className='already-register'>
        <NavLink  to="/">Already Register</NavLink>

        </div>
       
    </div>
  )
}

export default Signup