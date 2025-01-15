"use client"
import React from 'react'
import Footer from './footer/Footer'
import Header from './header'

const Layout = ({footer, children,data }:{footer?:any, children?:any,data:any}) => {
  return (
    <>
      <Header data={data}/>
      {children}
      <Footer generals={footer}/>
    </>
  )
}

export default Layout