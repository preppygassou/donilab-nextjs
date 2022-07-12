import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
//
import Head from './modules/Head';


const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer />

    </>
  )
}

export default Layout