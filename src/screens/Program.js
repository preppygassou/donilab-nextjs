import React, { useEffect } from 'react'
import HeroProgram from '../Components/Program/HeroProgram'
import Objectifs from '../Components/Program/Objectifs'
import Zones from '../Components/Program/Zones'
import Cibles from '../Components/Program/Cibles'
import Activity from '../Components/Program/Activity'
import Resultats from '../Components/Program/Resultats'
import Beneficiaires from '../Components/Program/Beneficiaires'
import Partners from '../Components/Program/Partners'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProgram } from '../actions/ProgramActions'
import Loading from '../Components/Loading'
import MessageBox from '../Components/MessageBox'
import ErrorBoundary from '../Components/ErrorBoundary'

function Program(props) {

  const dispatch = useDispatch();
  const programId = props.match.params.id;
  const programDetails = useSelector((state) => state.programDetails);
  const { loading, error, program } = programDetails;

  useEffect(() => {
   
    dispatch(detailsProgram(programId));
  }, [dispatch,programId]);


  return (
    <>
    {loading ? (
      <div style={{height:'50vh'}}>
        <Loading></Loading>
      </div>
      ) : error ? (
      <div style={{height:'50vh'}}>
        <MessageBox>{error}</MessageBox>
      </div>
        ) : (
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

export default Program
