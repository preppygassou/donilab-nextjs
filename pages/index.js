import React, { useContext } from 'react'
import ExpertiseSection from '../Components/ExpertiseSection'
import { Dexpertise } from '../Components/Dexpertise/index'
import Hero from '../Components/Hero'
import BlogSlideSection from '../Components/BlogSlideSection';
import ImpactSection from '../Components/ImpactSection';
import TeamSection from '../Components/TeamSection';
import PartnersSection from '../Components/PartnersSection';
import Labelafricinnov from '../Components/Labelafricinnov';
import MessageBox from '../Components/MessageBox';

import { HubContext } from '../services/hub/hub.context';

const Index =() =>{
/*   const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale */

  const { state } = useContext(HubContext);
  const {hubs,loading,error} =  state

  return (
    <>
      <Hero />
      <ExpertiseSection />
        <BlogSlideSection />
      <ImpactSection />
        {
          loading ? <div className='loading-overlay' ><div className="loading"></div></div> : error ? <MessageBox></MessageBox> : (
            hubs.map((hub, index) => (
              index === 0 && (
                <TeamSection home="home" hub={hub} />

              )
            ))
          )
        }
      <Dexpertise />
        <PartnersSection />
      <Labelafricinnov />
    </>
  )
}


export default Index
