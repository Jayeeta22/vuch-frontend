import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink,useNavigate } from 'react-router-dom'


function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const userLogin=async(e)=>{
    e.preventDefault()
    
     const res=await fetch("http://localhost:5000/signin",{
      // const res=await fetch("https://vouch-backend-jayeeta.onrender.com/signin",{
      method:'POST',
     
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })

    const data=await res.json()
    console.log(data)
    if(data.Error==="All fields are mandatory" || !data){
      window.alert("All fields are mandatory")
      console.log("Invalid user")
    }else if(data.Error==="credencial error"){
      console.log("Invalid user")

    }else{
      const token = data.Token
          console.log(token) 
          localStorage.setItem('token',token)
          // localStorage.setItem('user',userData)
      window.alert("Login Successful")
      console.log("Login Successful")
      navigate("/about")
      
    }
}
return (
    
        <div  className='login'>
        <div className='login-heading'>
          <h2 style={{color:"gray"}}>LogIn</h2>  
        </div>
    <form method='POST'>

    

    <div className="input-group m-3">
    
      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
      <input id="email" type="text" className="form-control" name="email" placeholder="Email"
      value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>



    <div className="input-group m-3">
        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
      <input id="password" type="password" className="form-control" name="password" placeholder="Password"
      value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>



    <div className="input-group form-button m-3">
    <input class="btn btn-primary" type="submit" name="login" id="login" value="Submit" onClick={userLogin}  />
    </div>

        </form>
        <div className='already-register'>
        <NavLink  to="/signup">Create an Account</NavLink>

        </div>
       
    </div>
    
  )
}

export default Login