import React, { useContext, useEffect } from 'react'
import ExpertiseCard from './ExpertiseCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { listExpertises } from '../store/actions/ExpertiseActions';
import { CurrentLangContext } from '../Context/CurrentLangContext';
import { useRouter } from 'next/router';
import { ExpertiseContext } from '../services/expertise/expertise.context';


const ExpertisesContainer = styled.div`
 display:grid;
 margin-left:auto;
 margin-right:auto;
grid-template-columns: repeat(4, 1fr);
.donilab-expertise-card:last-child{
  border:none;
}

 max-width:1200px;
 background-color:#fff;
 border-radius: 25px;
 -webkit-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
/* margin:2rem 9rem; */

@media (max-width: 1280px) { 
  max-width:80% ;
  .donilab-expertise-card:nth-child(2){
  border:none;
}
}

@media (max-width: 768px)  {
  max-width:80% ;
  grid-template-columns: 1fr;
}

@media (min-width:  769px) and (max-width: 1280px) {
  grid-template-columns: repeat(2, 1fr); 
}
`;


function ExpertiseCards() {


  //const { loading, error, expertises } = expertiseList;
  const {locale} = useRouter()
  /* const dispatch = useDispatch() */
  const { state } = useContext(ExpertiseContext);
  const {loading, error, expertises} =  state


 /*  useEffect(() => {
    dispatch(listExpertises(locale))
  }, [dispatch, locale]) */

  return (
    <ExpertisesContainer className='expertise-container'>
  {
    loading? <div className='loading-overlay' ><div className="loading"></div></div>:<>
    {expertises.map((item, index) => (
        <ExpertiseCard item={item} index={index} />
      ))}
    </>
  }
      

    </ExpertisesContainer> 
  )
}

export default ExpertiseCards
