import React, { useEffect, useState } from 'react';
 import '../Styles/hader.css'

function Header() {
    const [data,setData]=useState("")
    useEffect(()=>{
        
        
        fetch('https://sim.iamvouched.com/v1/escrow/fetch_escrow_account_balance', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwNjA1OTliMi0xZGM4LTQ4MzUtYjRkNS05NjliNDdkNDQzNmYiLCJuYW1lIjoiWFlaIEludmVzdG1lbnQgVGVjaG5vbGdvaWVzIFB2dCBMdGQiLCJyZWciOiJXOEo1OXVQZ0RzVThCVW03QXVZQyIsImNvbmZpZyI6Inh5ekludmVzdCIsImlhdCI6MTY2MjQ5Mjc3NX0.umqDcA_8qP9A6EkKQoBKh_f6aURNwZNAdCztgU6baBk'
      },
      body:JSON.stringify({
        escrow_id:"av-test"
      })
      
}).then((response)=> {
    return response.json();
   })
   .then((data)=> {
    console.log(data);
    setData(data.data.balance)
   })
    },[]);




   

  return (
    <div className='Header'>
      <div className='sub-head1'>
        <div className='head'>
        <h2>Hello,WeFinance</h2>
        <p>Welcom to the world of digital escrow</p>
        </div>
        <div className='transaction'>
            <h3>Transaction</h3>
        </div>

        <div className='amount'>
          <div className='img1' >
          <img src={require("../images/piggybank.png")} alt="1" />
          </div>
          <div className='total-amount'>
            <p>Available Balance</p>
           <p>₹{data}</p>   
          </div>
        </div>
           
      </div>
        
    </div>
  )
}

export default Header