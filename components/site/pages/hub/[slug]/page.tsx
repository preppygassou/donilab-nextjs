import React from 'react'
import styled from 'styled-components'
import ErrorBoundary from '../../../components/ErrorBoundary';
import DomaineOfIntervation from '../../../../Hub/DomaineOfIntervation';
import EnResume from '../../../../Hub/EnResume';
import HeroHub from '../../../../Hub/HeroHub';
import ProgramsOfHub from '../../../../Hub/ProgramsOfHub';
import RelatedHub from '../../../../Hub/RelatedHub';
import SpecifityOfWeb from '../../../../Hub/SpecifityOfWeb';
import TeamsOfHub from '../../../../Hub/TeamsOfHub';

import { useParams, useRouter } from 'next/navigation';

import Layout from '@/components/site/components/Layout';
import { useHub, useHubBySlugLang } from '@/hooks/useHubs';
import ErrorAlert from '@/components/ErrorAlert';
import LoadingPage from '@/components/global/loading-page';
import { useSite } from '@/hooks/useSites';


const HubSection = styled.section`

`;


export default function Hub() {

  const params = useParams<{ locale: string;slug:string }>()
  const { slug,locale} = params;

/* console.log("params",params) */

  const { data: site, isLoading: loading, error: errorSite } = useSite("dml");
  /* const { data: hub, isLoading, error } = useHubBySlugLang(slug,locale);


  if (isLoading || loading) return <LoadingPage />;
  if (error || errorSite) return <ErrorAlert message="Hub not found" />;

 */
  return (
    <>
    {
      loading?<LoadingPage/>:<Layout data={site} footer={site?.data?.footer}>
      {/* {
        hub && (
          <HubSection>
            <ErrorBoundary>
              <HeroHub hub={hub} />
            </ErrorBoundary>
            <ErrorBoundary>
              <EnResume hub={hub} />
            </ErrorBoundary>
            <ErrorBoundary>
              <SpecifityOfWeb hub={hub} />
            </ErrorBoundary>
            <ErrorBoundary>
              <TeamsOfHub hub={hub} />
            </ErrorBoundary>
            <ErrorBoundary>
              <DomaineOfIntervation hub={hub} />
            </ErrorBoundary>
            <ErrorBoundary>
              <ProgramsOfHub hub={hub} />
            </ErrorBoundary>
            <ErrorBoundary>
              <RelatedHub hub={hub} />
            </ErrorBoundary>
          </HubSection>
        )
      } */}
    </Layout>
     }
    </>
  )
}


