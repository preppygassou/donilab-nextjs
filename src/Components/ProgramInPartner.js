import React from 'react'
import styled from 'styled-components';
import { ProgramInPartnerData } from '../data/ProgramData';
import { Link } from 'react-router-dom';

const ProgramByDonilabContent = styled.div `

`;
const OneOfProgramByDonilab = styled.div `

`;
const OneOfProgramLink = styled(Link) `

`;

function ProgramInPartner() {
  return (
    <ProgramByDonilabContent>
     {
       ProgramInPartnerData.map((program,index)=>(
         <OneOfProgramByDonilab key={index}>
          <img src={program.image} alt={program.title}/>
          <h1>{program.title}</h1>
          <p>{program.description}</p>
          <OneOfProgramLink>
            <h1>EN SAVOIR PLUS</h1>
          </OneOfProgramLink>
         </OneOfProgramByDonilab>
       ))
     }
      
    </ProgramByDonilabContent>
  )
}

export default ProgramInPartner;
