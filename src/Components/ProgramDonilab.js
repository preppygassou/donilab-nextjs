import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro';
import { ProgramyDonilaData } from '../data/ProgramData';
import { Link } from 'react-router-dom';
import parse from "html-react-parser";

const ProgramDonilabContent = styled.ul `
display:grid;
 margin-left:auto;
 margin-right:auto;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: 1fr;
 max-width:85%;
z-index:10;
background-color:#fff;
 border-radius: 25px;
 -webkit-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
list-style-type:none;



@media (min-width: 1281px) {
  
  max-width:95%;
  
}
@media (min-width: 768px) and (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
  
}
@media (min-width: 481px) and (max-width: 767px) {
 
  grid-template-columns: repeat(1, 1fr);
  
}
@media (min-width: 320px) and (max-width: 480px) {
  
  grid-template-columns: repeat(1, 1fr);

}
@media (min-width:  1025px) and (max-width: 1280px) {
  grid-template-columns: repeat(3, 1fr);
  
}
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
  font-family:"CeraRoundPro-Bold";
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

`;
const ProgramLogo = styled.div `
padding:1rem 2rem;
height:17vh;

img{
  width:200px;
  
}
`;
const OneOfProgramLink = styled(Link) `
margin:1vh 0;
border-radius:30px;
padding:.5rem 1rem;
font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
  text-align:center;
  text-decoration:none;

`;
function myFunction(str) {
  let thestr;
  if (str.length > 100) {
     thestr = str = str.substring(0,100) + "...";
  }
  return thestr;
}

function ProgramDonilab({ProgramData,history}) {

  return (
    <ProgramDonilabContent>
     {
       ProgramData.map((program)=>(
         <OneOfProgramDonilab key={program.id}>
          <ProgramLogo>
          <img src={program.acf.logo_en_png_ou_svg.url} alt={program.title.rendered}/>
          </ProgramLogo>
         <ProgramBody>
         <ProgramInfoContent>
         <h1>{program.title.rendered}</h1>
         {parse(program.content.rendered)} 
         </ProgramInfoContent>
         <OneOfProgramLink to={`/program/${program.id}`}>
            EN SAVOIR PLUS
          </OneOfProgramLink>
         </ProgramBody>
         </OneOfProgramDonilab>
       ))
     }
      
    </ProgramDonilabContent>
  )
}

export default ProgramDonilab
