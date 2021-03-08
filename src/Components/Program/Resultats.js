import React from 'react'
import styled from 'styled-components/';
import ResultatsSectionparalaximgtop from "./../../assets/svg/resultatsSectionparalaximgtop.svg";
import ResultatsSectionparalaximgbottom from "./../../assets/svg/resultatsSectionparalaximgbottom.svg";
import ResultatsSectionIcone from "./../../assets/svg/ResultatsSectionIcone.svg";
import parse from "html-react-parser";




const ResultatsSection = styled.div `
background-color:#EFEFEF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;
p{
  color:#2755A1;
}

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    color:#2755A1;
}
`;


const ResultatsSectionparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 0;
width: 310px;

`;
const ResultatsSectionparalaxImgbottom = styled.img `
position:absolute;
bottom: 0;
right:0;
width: 125px;

`;
const ResultatsSectionVisionMissionIcon = styled.img `


`;



function Resultats({program}) {
  return (
    <ResultatsSection>
      <ResultatsSectionparalaxImgtop src={ResultatsSectionparalaximgtop} alt=""/>
      <ResultatsSectionparalaxImgbottom src={ResultatsSectionparalaximgbottom} alt=""/>
      <ResultatsSectionVisionMissionIcon className="" src={ResultatsSectionIcone} alt="Historic icon" />

      <h1>
      Résultats
     </h1>
      <p>
     {
       parse(program.acf.resultats)
     }

      </p>
    </ResultatsSection>
    
  )
}

export default Resultats
