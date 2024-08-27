import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import ErrorBoundary from '../../../components/ErrorBoundary';
import DomaineOfIntervation from '../../../../Hub/DomaineOfIntervation';
import EnResume from '../../../../Hub/EnResume';
import HeroHub from '../../../../Hub/HeroHub';
import ProgramsOfHub from '../../../../Hub/ProgramsOfHub';
import RelatedHub from '../../../../Hub/RelatedHub';
import SpecifityOfWeb from '../../../../Hub/SpecifityOfWeb';
import TeamsOfHub from '../../../../Hub/TeamsOfHub';
import MessageBox from '../../../components/MessageBox';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { HubContext } from '@/services/hub/hub.context';
import ClientRepository from '../../../../../repositories/ClientRepository';
import Layout from '@/Components/layouts/Layout';


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
    <Layout>
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
</Layout>
  )
}

export default Hub
