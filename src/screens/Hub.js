import React,{useState,useRef, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import { detailsHub } from '../actions/HubActions';
import ErrorBoundary from '../Components/ErrorBoundary';
import DomaineOfIntervation from '../Components/Hub/DomaineOfIntervation';
import EnResume from '../Components/Hub/EnResume';
import HeroHub from '../Components/Hub/HeroHub';
import ProgramsOfHub from '../Components/Hub/ProgramsOfHub';
import RelatedHub from '../Components/Hub/RelatedHub';
import SpecifityOfWeb from '../Components/Hub/SpecifityOfWeb';
import TeamsOfHub from '../Components/Hub/TeamsOfHub';
import Loading from '../Components/Loading';
import MessageBox from '../Components/MessageBox';


const HubSection = styled.section`

`;


function Hub(props) {
  const hubId = props.match.params.id;
  const hubDetails = useSelector((state) => state.hubDetails);
  const { loading, error, hub } = hubDetails;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailsHub(hubId));
  }, [dispatch,hubId]);
  
  return (

    loading ?<div style={{height:'50vh'}}> <Loading></Loading> </div>: error ? <div style={{height:'50vh'}}><MessageBox>erreur de chargement</MessageBox> </div>:(
      <HubSection>
    <ErrorBoundary>
    <HeroHub hub={hub}/>
    </ErrorBoundary>
    <ErrorBoundary>
    <EnResume hub={hub}/>
    </ErrorBoundary>
    <ErrorBoundary>
    <SpecifityOfWeb hub={hub}/>
    </ErrorBoundary>
    <ErrorBoundary>
    <TeamsOfHub hub={hub}/>
    </ErrorBoundary>
    <ErrorBoundary>
    <DomaineOfIntervation hub={hub}/>
    </ErrorBoundary>
    <ErrorBoundary>
    <ProgramsOfHub hub={hub}/>
    </ErrorBoundary>
    <ErrorBoundary>
    <RelatedHub hub={hub}/>
    </ErrorBoundary>
    </HubSection>
    )
  )
}

export default Hub
