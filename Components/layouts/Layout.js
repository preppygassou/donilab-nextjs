import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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