import React, { useEffect } from 'react'
import HeroProgram from '../../Components/Program/HeroProgram'
import Objectifs from '../../Components/Program/Objectifs'
import Zones from '../../Components/Program/Zones'
import Cibles from '../../Components/Program/Cibles'
import Activity from '../../Components/Program/Activity'
import Resultats from '../../Components/Program/Resultats'
import Beneficiaires from '../../Components/Program/Beneficiaires'
import Partners from '../../Components/Program/Partners'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProgram } from '../../store/actions/ProgramActions'
import MessageBox from '../../Components/MessageBox'
import ErrorBoundary from '../../Components/ErrorBoundary'
import { useRouter } from 'next/router'
import axios from 'axios'

const Program = ({program}) =>{

  const dispatch = useDispatch();
  const router = useRouter()
  const {slug } = router.query
  //const programId = props.match.params.id;
  const programDetails = useSelector((state) => state.programDetails);
 // const { loading, error, program } = programDetails;

  /* useEffect(() => {
    dispatch(detailsProgram(slug));
  }, [dispatch,slug]); */

  return (
    <>
    {program&& (
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

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://blog.donilab.org/wp-json/wp/v2/programs?slug=${params.slug}`
  );
  return {
    props: {
      program: res.data[0],
    },
  };
};
export default Program
