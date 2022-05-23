import React, { Suspense } from 'react';
import ScrollToTop from './Components/ScrollToTop';
import Router from "./Router";
import './i18n'
const App = ()=> {
  
  return (
   
   <Suspense fallback={<div className="loading" />}>
     <ScrollToTop>
      <Router/>
     </ScrollToTop>
   </Suspense>
   
  );
}

export default App;