"use client"
import React from 'react'
import styled from 'styled-components'

import DomaineOfIntervation from '@/components/Hub/DomaineOfIntervation';
import EnResume from '@/components/Hub/EnResume';
import HeroHub from '@/components/Hub/HeroHub';
import ProgramsOfHub from '@/components/Hub/ProgramsOfHub';
import RelatedHub from '@/components/Hub/RelatedHub';
import SpecifityOfWeb from '@/components/Hub/SpecifityOfWeb';
import TeamsOfHub from '@/components/Hub/TeamsOfHub';

import { useParams, useRouter } from 'next/navigation';

import Layout from '@/components/site/components/Layout';
import { useHub, useHubBySlugLang, useHubs } from '@/hooks/useHubs';
import ErrorAlert from '@/components/ErrorAlert';
import LoadingPage from '@/components/global/loading-page';
import { useSite } from '@/hooks/useSites';
import { useProgramTypes } from '@/hooks/useProgramTypes';


const HubSection = styled.section`

`;


export default function Hub() {

  const params = useParams<{ locale: string;slug:string }>()
  const { slug,locale} = params;


  const { data: site, isLoading: loading, error: errorSite } = useSite("dml");
  const { data: hubs, isLoading: hubsLoading, error: hubsError } = useHubs();
  const { data: hub, isLoading, error } = useHubBySlugLang(slug,locale);
  const { data: programtypes, isLoading:isLoadingProgramTypes,error: errorProgramTypes } = useProgramTypes();
  

  if (isLoading || loading||hubsLoading||isLoadingProgramTypes) return <LoadingPage />;
  if (error || errorSite||hubsError||errorProgramTypes) return <ErrorAlert message="Hub not found" />;


  return (
    <>
    {
      loading?<LoadingPage/>:<Layout data={site} footer={site?.data?.footer}>
      {
        hub && (
          <HubSection>
            <>
              <HeroHub hub={hub} />
            </>
            <>
              <EnResume hub={hub} />
            </>
            <>
              <SpecifityOfWeb hub={hub} />
            </>
            <>
              <TeamsOfHub hub={hub} />
            </>
            <>
              <DomaineOfIntervation hub={hub} />
            </>
            <>
              <ProgramsOfHub programtypes={programtypes} hub={hub} />
            </>
            <>
              <RelatedHub hubs={hubs} hub={hub} />
            </>
          </HubSection>
        )
      }
    </Layout>
     }
    </>
  )
}


