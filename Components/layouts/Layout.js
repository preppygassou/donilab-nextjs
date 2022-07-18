import React from 'react'
import ClientRepository from '~/repositories/ClientRepository';
import Footer from '../Footer'
import Header from '../Header'
//
import Head from './modules/Head';


const Layout = ({generales, children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer generals={generales}/>

    </>
  )
}

export default Layout