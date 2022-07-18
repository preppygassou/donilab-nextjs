import React, { useContext, useEffect, useState } from 'react'
import ExpertiseCard from './ExpertiseCard';
import styled from 'styled-components';
import { ExpertiseData } from '../../services/data/ExpertiseData';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import { listDexpertises } from '../../store/actions/DexpertiseActions';
import { useRouter } from '../../node_modules/next/router';
import { DexpertiseContext } from '../../services/dexpertise/dexpertise.context';


const ExpertisesContainer = styled.div `
 display:grid;
 margin-left:auto;
 margin-right:auto;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: 1fr;
max-width:1200px;
 background-color:#fff;
 border-radius: 25px;
 -webkit-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);

.donilab-dexpertise-card:last-child{
  border:none;
}
@media (max-width: 1200px) { 
  max-width:80% ;
  .donilab-dexpertise-card{
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


function ExpertiseCards({dexpertises}) {

 /*  const { state } = useContext(DexpertiseContext);
  const {dexpertises,loading,error} =  state */
 


  return (
        <ExpertisesContainer>
          {
          /* loading ? <div className='loading-overlay' ><div className="loading"></div></div> : */ dexpertises.map((item,index)=>(
            <ExpertiseCard item={item} index={index}/>
              
            ))}
        </ExpertisesContainer>
  )
}


export default ExpertiseCards;
