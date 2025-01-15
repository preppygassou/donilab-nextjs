import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Navbar from './Navbar'

function Header({data}) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
     <Navbar toggle={toggle} data={data}/> 
     <Dropdown isOpen={isOpen} toggle={toggle} data={data}/>
    </>
  )
}



export default Header
 