import React,{useState,useRef, useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
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
import { HubContext } from '~/services/hub/hub.context';


const HubSection = styled.section`

`;


function Hub({hub}) {
  const router = useRouter()
  const {slug } = router.query
  const { state,dispatch } = useContext(HubContext);
  const { hub, loading, error } = state


  useEffect(() => {
    const detailsHub = async () => {
      dispatch({ type: "HUB_DETAILS_REQUEST", payload: slug });
      try {
        const { data } = await ClientRepository.get(
          
          "/hubs?slug=" + slug
        );
        dispatch({ type: "HUB_DETAILS_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "HUB_DETAILS_FAIL", 
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message, });
      }
    };
    detailsHub()

  }, [slug,dispatch]);
  
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
