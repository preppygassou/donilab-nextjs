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
import Loading from '../Components/Loading';
import MessageBox from '../Components/MessageBox';
import ErrorBoundary from '../Components/ErrorBoundary';



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
      <ErrorBoundary>
      <BlogSlideSection/>
      </ErrorBoundary>
      <ImpactSection/>
      <ErrorBoundary>
      {
        loading ? <Loading></Loading>  : error ? <MessageBox></MessageBox> :(
          hubs.map((hub,index)=>(
            index === 0  && (
            <TeamSection hub={hub}/> 
              
              )  
            ))
        )
      }
      </ErrorBoundary>
      <ErrorBoundary>
      <PartnersSection/>
      </ErrorBoundary>
      <Labelafricinnov/>
    </>
  )
}

export default Home
