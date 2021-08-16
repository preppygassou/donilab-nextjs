import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './screens/About'
import Rapport from './screens/Rapport/Rapport'
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
import Scroll from './Components/Scroll'
import CurrentLangContextProvider from './Context/CurrentLangContext'
import Dexpertise from './screens/Dexpertise'

function Router() {
  return (
      <>
      <CurrentLangContextProvider>    
      <Header/> 
      <Switch>       
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/a-propos" component={About} />
      <Route path="/expertise" component={Expertise} />
      <Route path="/savoir-faire" component={Expertise} />
      <Route path="/programs" component={Programs} />      
      <Route path="/programmes" component={Programs} />      
      <Route path="/program/:id" component={Program} />      
      <Route path="/programme/:id" component={Program} />      
      <Route path="/hubs" component={Hubs} />
      <Route path="/hub/:id" component={Hub} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/rapport" component={Rapport} />
      <Route path="/report" component={Rapport} />
      <Route path="/dexpertise" component={Dexpertise} />
      <Route path="/*" component={NotFound} />
     </Switch>
      <Footer/> 
      </CurrentLangContextProvider>
    </>
  )
}

export default Router
