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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ErrorBoundary from '../../Components/ErrorBoundary'
import { useRouter } from 'next/router'
import { ProgramContext } from '../../services/program/program.context'

const Program = () =>{


  const router = useRouter()
  const {slug } = router.query
  const { state,dispatch } = useContext(ProgramContext);
 // const programDetails = useSelector((state) => state.programDetails);
  const { loading, error, program } = state;

  useEffect(() => {
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


  return (
    <>
    { loading ? <div className='loading-overlay' ><div className="loading"></div></div> : program&& (
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
    </>
  )
}


export const getServerSideProps = async ({ locale }) => ({

  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
export default Program
