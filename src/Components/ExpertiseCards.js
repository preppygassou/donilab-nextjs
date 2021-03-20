import React from 'react'
import ExpertiseCard from './ExpertiseCard';
import styled from 'styled-components';
import { ExpertiseData } from '../data/ExpertiseData';


const ExpertisesContainer = styled.div `
 display:grid;
 margin-left:auto;
 margin-right:auto;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: 1fr;
 max-width:85%;
 background-color:#fff;
 border-radius: 25px;
 -webkit-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
/* margin:2rem 9rem; */

@media (min-width: 1281px) { 
  max-width:95% 
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
  return (
        <ExpertisesContainer>
          {ExpertiseData.map((item,index)=>(
            <ExpertiseCard item={item} index={index}/>
              
            ))}
        </ExpertisesContainer>
  )
}

export default ExpertiseCards
