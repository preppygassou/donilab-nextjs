"use client"
import React from 'react'
import Footer from './footer/Footer'
import Header from './header'

const Layout = ({footer, children }:{footer?:any, children?:any}) => {
  return (
    <>
      <Header />
      {children}
      <Footer generals={footer}/>
    </>
  )
}

export default Layout