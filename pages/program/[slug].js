import React, { useContext, useEffect } from 'react'
import HeroProgram from '../../Components/Program/HeroProgram'
import Objectifs from '../../Components/Program/Objectifs'
import Zones from '../../Components/Program/Zones'
import Cibles from '../../Components/Program/Cibles'
import Activity from '../../Components/Program/Activity'
import Resultats from '../../Components/Program/Resultats'
import Beneficiaires from '../../Components/Program/Beneficiaires'
import Partners from '../../Components/Program/Partners'
import ClientRepository from '../../repositories/ClientRepository';

import ErrorBoundary from '../../Components/ErrorBoundary'
import { useRouter } from 'next/router'
import { ProgramContext } from '../../services/program/program.context'
import Layout from '~/Components/layouts/Layout'

const Program = ({program}) =>{


  const router = useRouter()
  /* const {slug } = router.query
  const { state,dispatch } = useContext(ProgramContext); */
 // const programDetails = useSelector((state) => state.programDetails);
 // const { loading, errorHub, program } = state;

  /* useEffect(() => {

    const detailsProgram =  async () => {
      try {
        dispatch({ type: "PROGRAM_DETAILS_REQUEST", payload: slug });
        const { data } = await ClientRepository.get(
          `/programs?slug=${slug}`
        );
        dispatch({ type: "PROGRAM_DETAILS_SUCCESS", payload: data[0] });
      } catch (error) {
        dispatch({ type: "PROGRAM_DETAILS_FAIL", payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message, });
      }
    };

    detailsProgram()
  }, [slug,dispatch]);
 */

  return (
    <Layout>
    { /* loading ? <div className='loading-overlay' ><div className="loading"></div></div> :  */program&& (
      <div>
    <ErrorBoundary>
      <HeroProgram  program={program}/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Objectifs program={program}/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Zones program={program}/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Cibles program={program}/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Activity program={program}/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Resultats program={program}/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Beneficiaires program={program}/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Partners program={program}/>
    </ErrorBoundary>
      </div>
        )}
    </Layout>
  )
}

export async function getServerSideProps(contex) {
  const res = await ClientRepository.get(
    `/programs?slug=${contex.params.slug}&lang=${contex.locale}`
  );
  return {
    props: {
      program:res.data[0],
    }, // will be passed to the page component as props
  }
}

export default Program
