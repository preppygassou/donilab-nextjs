import React, { useEffect } from 'react'
import ExpertiseSection from '../Components/ExpertiseSection'
import Hero from '../Components/Hero'
import BlogSlideSection from '../Components/BlogSlideSection';
import ImpactSection from '../Components/ImpactSection';
import TeamSection from '../Components/TeamSection';
import PartnersSection from '../Components/PartnersSection';
import Labelafricinnov from '../Components/Labelafricinnov';
import { TeamData } from '../data/TeamData';
import { useDispatch, useSelector } from 'react-redux';
import { listHubs } from '../actions/HubActions';



function Home() {

  const dispatch = useDispatch()
  const hubList = useSelector((state) => state.hubList)


  const { loading,error,hubs } = hubList;


  useEffect(() => {
    dispatch(listHubs())
  }, [dispatch])

  return (
    <>
      <Hero/>
      <ExpertiseSection/>
      <BlogSlideSection/>
      <ImpactSection/>
      {
        loading ? <div>chargement ...</div> : error ? <div>erreur de chargement ...</div> :(
          hubs.map((hub,index)=>(
            index === 0  && (<TeamSection hub={hub}/> )  
            ))
        )
      }
      <PartnersSection/>
      <Labelafricinnov/>
    </>
  )
}

export default Home
