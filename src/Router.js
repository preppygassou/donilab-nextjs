import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './screens/About'
import BlogSingle from './screens/BlogSingle'
import Blog from './screens/Blog'
import Contact from './screens/Contact'
import Expertise from './screens/Expertise'
import Home from './screens/Home'
import Hubs from './screens/Hubs'
import Hub from './screens/Hub'
import Programs from './screens/Programs'
import Program from './screens/Program'
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NotFound from './screens/NotFound'

function Router() {
  return (
      <>
      <Header/> 
      <Switch>       
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/expertise" component={Expertise} />
      <Route path="/programs" component={Programs} />      
      <Route path="/program/:id" component={Program} />      
      <Route path="/hubs" component={Hubs} />
      <Route path="/hub/:id" component={Hub} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/blogsingle" component={BlogSingle} />
      <Route path="/*" component={NotFound} />
     </Switch>
      <Footer/> 
    </>
  )
}

export default Router
