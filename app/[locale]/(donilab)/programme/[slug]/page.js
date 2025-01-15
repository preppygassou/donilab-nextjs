"use client"
import React from 'react'
import HeroProgram from '@/components/Program/HeroProgram'
import Objectifs from '@/components/Program/Objectifs'
import Zones from '@/components/Program/Zones'
import Cibles from '@/components/Program/Cibles'
import Activity from '@/components/Program/Activity'
import Resultats from '@/components/Program/Resultats'
import Beneficiaires from '@/components/Program/Beneficiaires'
import Partners from '@/components/Program/Partners'
import { useParams } from 'next/navigation'
import Layout from '@/components/site/components/Layout';
import LoadingPage from '@/components/global/loading-page'
import { useSite } from '@/hooks/useSites'
import {useProgramBySlugLang } from '@/hooks/usePrograms'
import ErrorAlert from '@/components/ErrorAlert'

export default function Program() {

  const params = useParams();
  const { slug,locale} = params;
const { data: site, isLoading, error } = useSite("dml");
const { data: program, isLoading:isLoadingProgram, error:errorProgram } = useProgramBySlugLang(slug,locale);

if (isLoading || isLoadingProgram) return <LoadingPage />;
if (error || errorProgram) return <ErrorAlert message="Program not found" />;

console.log("program",program)

  return (
    <>
    {
      isLoading?<LoadingPage/>:<Layout data={site} footer={site?.data?.footer}>

    { /* loading ? <div className='loading-overlay' ><div className="loading"></div></div> :  */program&& (
      <div>
    <>
      <HeroProgram  program={program}/>
    </>
    <>
      <Objectifs program={program}/>
    </>
    <>
      <Zones program={program}/>
    </>
    <>
      <Cibles program={program}/>
    </>
    <>
      <Activity program={program}/>
    </>
    <>
      <Resultats program={program}/>
    </>
    <>
      <Beneficiaires program={program}/>
    </>
    <>
      <Partners program={program}/>
    </>
      </div>
        )}
    </Layout>
     }
    </>
  )
}

