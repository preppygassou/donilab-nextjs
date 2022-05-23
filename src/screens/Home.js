import React, { useContext, useEffect } from 'react'
import { connect } from 'react-redux';
import ExpertiseSection from '../Components/ExpertiseSection'
import {Dexpertise} from '../Components/Dexpertise/index'
import Hero from '../Components/Hero'
import BlogSlideSection from '../Components/BlogSlideSection';
import ImpactSection from '../Components/ImpactSection';
import TeamSection from '../Components/TeamSection';
import PartnersSection from '../Components/PartnersSection';
import Labelafricinnov from '../Components/Labelafricinnov';
import { TeamData } from '../data/TeamData';
import { useDispatch, useSelector } from 'react-redux';
import { listHubs } from '../actions/HubActions';
import MessageBox from '../Components/MessageBox';
import ErrorBoundary from '../Components/ErrorBoundary';
import { CurrentLangContext } from '../Context/CurrentLangContext';
import {Helmet} from 'react-helmet'



function Home({hublistloading, hublistloadingerror,hubs,listHubsAction}) {

  //const dispatch = useDispatch()
 // const hubList = useSelector((state) => state.hubList)
 //const { loading,error,hubs } = hubList;

  const value = useContext(CurrentLangContext);
  const {currentLang} = value



  useEffect(() => {
    listHubsAction(currentLang)
  }, [currentLang,listHubsAction])


  return (
    <>
    <Helmet>
                    <title>Donilab | Accueil</title>
                    <meta name="description" content="Bienvenue sur donilab" />
                </Helmet>
      <Hero/>
      <ExpertiseSection/>
      <ErrorBoundary>
      <BlogSlideSection/>
      </ErrorBoundary>
      <ImpactSection/>
      <ErrorBoundary>
      {
        hublistloading ? <div className="loading" />  : hublistloadingerror ? <MessageBox></MessageBox> :(
          hubs.map((hub,index)=>(
            index === 0  && (
            <TeamSection home="home" hub={hub}/> 
              
              )  
            ))
        )
      }
      </ErrorBoundary>
      <Dexpertise/>
      <ErrorBoundary>
      <PartnersSection/>
      </ErrorBoundary>
      <Labelafricinnov/>
    </>
  )
}

const mapStateToProps = ({ hubList,  }) => {
  const { loading:hublistloading,error:hublistloadingerror,hubs } = hubList;
  return { hublistloading, hublistloadingerror,hubs };
};
const mapActionsToProps = {
  listHubsAction:listHubs
};

export default connect(mapStateToProps,mapActionsToProps)(Home)
