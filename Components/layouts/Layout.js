import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const Layout = ({  children })=> {
  return (
    <> 
              
                <Header />  
                {children }           
                <Footer/>
           
            </>
  )
}
/* export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
 */
export default Layout