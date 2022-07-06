import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

const ProgramDonilabContent = styled.ul `
display:grid;
 margin:0 auto;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: 1fr;
 max-width:1350px;
z-index:10;
background-color:#fff;
 border-radius: 25px;
 -webkit-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
list-style-type:none;



/* @media (min-width: 1281px) {
  
  max-width:95%;
  
} */

@media (max-width: 1200px) {
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 900px) {
  grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
  
}

/* @media (max-width: 500px) {
 
  grid-template-columns: repeat(1, 1fr);
  
} */
`;
const OneOfProgramDonilab = styled.li `

text-align:center;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

color:#2755A1;
& a{
  color:#95B71D;
  border:2px solid #95B71D;
}
&:hover{
  color:#fff;
}
&:hover > a {
  color:#fff;
  border:2px solid #fff;
}
&:hover > .ProgramDonilab__ProgramBody-c94led-3 {
 
  background-color:#2755A1;
  color:#fff;
}
`;
const ProgramInfoContent = styled.div `
display:flex;
align-items:center;
flex-direction:column;

h1{
   height:10vh;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
  text-align:center;
  }
  p{
    margin: 0vh 0 3.5vh 0;
  }

`;
const ProgramBody = styled.div `
display:flex;
align-items:center;
flex-direction:column;
padding:1rem 2rem;

@media (max-width: 1200px) {
  p{
    font-size:1rem;
  }
  }

@media (max-width: 768px) {
  p{
    font-size:0.9rem;
  }
  
}

`;
const ProgramLogo = styled.div `
/* s */
/* s */
height:12vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
img{
  width:70%;
/* object-fit:cover; */
  height:95%;
}
`;
const OneOfProgramLink = styled(Link) `
margin:1vh 0;
border-radius:30px;
padding:.5rem 1rem;
font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
  text-align:center;
  text-decoration:none;
  @media (max-width: 768px) {
    font-size: 1rem;
}

`;
function myFunction(str) {
  let thestr;
  if (str.length > 40) {
     thestr = str = str.substring(0,40) + "...";
  }
  return thestr;
}

function ProgramDonilab({ProgramData}) {
  const { t} = useTranslation('common')

  return (
    <ProgramDonilabContent>
     {
     ProgramData && ProgramData.map((program)=>(
         <OneOfProgramDonilab key={program.id}>
          <ProgramLogo>
          <img src={program.acf.logo_officiel.url} alt={program.title.rendered}/>
          </ProgramLogo>
         <ProgramBody>
         <ProgramInfoContent>
         <h1>{program.title.rendered}</h1>
         {/* <p>{myFunction(program.acf.programme_description)}</p>  */}
         <p>{program.acf.programme_description.length > 70 ? program.acf.programme_description.substring(0,70) + "..." : program.acf.programme_description }</p> 
         </ProgramInfoContent>
         <OneOfProgramLink href={`/program/${program.slug}`}>            
      {t("more")}
          </OneOfProgramLink>
         </ProgramBody>
         </OneOfProgramDonilab>
       ))
     }      
    </ProgramDonilabContent>
  )
}

export default ProgramDonilab
