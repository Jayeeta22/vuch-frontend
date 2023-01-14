import React ,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import TablesValue from './TablesValue'

function About() {
  const navigate=useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  })
  return (
    <>
  <Header/>
  <TablesValue/>
    </>
   
  )
}

export default About