import React, { useState, useRef, useEffect, useContext } from 'react'
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
import ClientRepository from '../../repositories/ClientRepository';


const HubSection = styled.section`

`;


function Hub() {
  const [hub, sethub] = useState()
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()
  const router = useRouter()
  const { slug } = router.query
/*   const { state, dispatch } = useContext(HubContext);
  const { hub, loading, error } = state */


  useEffect(() => {
    const detailsHub = async () => {
      setloading(true)
     // dispatch({ type: "HUB_DETAILS_REQUEST", payload: slug });
      try {
        const { data } = await ClientRepository.get(

          `/hubs?slug=${slug}`
        );
        sethub(data[0])
        setloading(false)
       // dispatch({ type: "HUB_DETAILS_SUCCESS", payload: data[0] });
      } catch (error) {
        /* dispatch({
          type: "HUB_DETAILS_FAIL",
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        }); */
        seterror(error.response && error.response.data.message
          ? error.response.data.message
          : error.message)
      }
    };
    detailsHub()

  }, [slug]);

  return (
    <>
{
 loading?<div className='loading-overlay' ><div className="loading"></div></div> : error ? <div style={{ height: '50vh' }}><MessageBox>erreur de chargement des hubs</MessageBox> </div> : hub&&(
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
}
    </>
  )
}

export default Hub
