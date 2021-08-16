import React, { Suspense, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import ScrollToTop from './Components/ScrollToTop';
import Router from "./Router";
import { loading } from './actions/AxiosAction'

import './i18n'
import Loader from './Components/Loader';



const App = ({loader,loading})=> {
  useEffect(() => {
   axios.interceptors.request.use(function (config) {
    // spinning start to show
    loading(true)
    return config
   }, function (error) {
     return Promise.reject(error);
   });

   axios.interceptors.response.use(function (response) {
    // spinning hide
     loading(false)

    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  }, [loading])
  
  return (
   
   <Suspense fallback={<div className="loadingg" />}>
     <ScrollToTop>
       {loader ? <Loader /> : null}
      <Router/>
     </ScrollToTop>
   </Suspense>
   
  );
}

const mapStateToProps = (state)=>{
  return {
    loader: state.loader
  }
}

export default connect(mapStateToProps,{
  loading
})(App);