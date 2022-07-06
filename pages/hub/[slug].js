import React,{useState,useRef, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { detailsHub } from '../../store/actions/HubActions';
import ErrorBoundary from '../../Components/ErrorBoundary';
import DomaineOfIntervation from '../../Components/Hub/DomaineOfIntervation';
import EnResume from '../../Components/Hub/EnResume';
import HeroHub from '../../Components/Hub/HeroHub';
import ProgramsOfHub from '../../Components/Hub/ProgramsOfHub';
import RelatedHub from '../../Components/Hub/RelatedHub';
import SpecifityOfWeb from '../../Components/Hub/SpecifityOfWeb';
import TeamsOfHub from '../../Components/Hub/TeamsOfHub';
import MessageBox from '../../Components/MessageBox';
import { useRouter } from 'next/router';
import axios from 'axios'


const HubSection = styled.section`

`;


function Hub({hub}) {
  const router = useRouter()
  const {slug } = router.query
  const hubDetails = useSelector((state) => state.hubDetails);
 // const { loading, error, hub } = hubDetails;

  const dispatch = useDispatch()

  /* useEffect(() => {
    dispatch(detailsHub(slug));
  }, [dispatch,slug]); */
  
  return (

    hub&&(
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
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://blog.donilab.org/wp-json/wp/v2/hubs?slug=${params.slug}`
  );
  return {
    props: {
      hub: res.data[0],
    },
  };
};
export default Hub
