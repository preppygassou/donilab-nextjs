import React from 'react'
import ExpertiseCard from './ExpertiseCard';
import styled from 'styled-components';


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


function ExpertiseCards({expertises}:{expertises:any}) {

  return (
    <ExpertisesContainer className='expertise-container'>
  {
   <>
    {expertises&&expertises.map((item: any) => (
        <ExpertiseCard item={item} />
      ))}
    </>
  }
      
    </ExpertisesContainer> 
  )
}

export default ExpertiseCards
