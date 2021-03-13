import React,{useState,useRef, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import { detailsHub } from '../actions/HubActions';
import DomaineOfIntervation from '../Components/Hub/DomaineOfIntervation';
import EnResume from '../Components/Hub/EnResume';
import HeroHub from '../Components/Hub/HeroHub';
import odersHub from '../Components/Hub/odersHub';
import ProgramsOfHub from '../Components/Hub/ProgramsOfHub';
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

    loading ? <Loading></Loading> : error ? <MessageBox>erreur de chargement</MessageBox> :(
      <HubSection>
    <HeroHub hub={hub}/>
    <EnResume hub={hub}/>
    <SpecifityOfWeb hub={hub}/>
    <TeamsOfHub hub={hub}/>
    <DomaineOfIntervation hub={hub}/>
    <ProgramsOfHub hub={hub}/>
    <odersHub hub={hub}/>
    </HubSection>
    )
  )
}

export default Hub
