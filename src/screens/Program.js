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
      <div>chargement</div>
      ) : error ? (
      <div>{error}</div>
        ) : (
      <div>
      <HeroProgram  program={program}/>
      <Objectifs program={program}/>
      <Zones program={program}/>
      <Cibles program={program}/>
      <Activity program={program}/>
      <Resultats program={program}/>
      <Beneficiaires program={program}/>
      <Partners program={program}/>
      </div>
        )}
    </>
  )
}

export default Program
