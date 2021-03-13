import React from 'react'
import styled from 'styled-components/';
import Objectifssvg from "./../../assets/svg/objectifssvg.svg";
import parse from "html-react-parser";
import Objectifsparalaximgtop from "./../../assets/svg/Objectifsparalaximgtop.svg";
import Objectifsparalaximgbottom from "./../../assets/svg/Objectifsparalaximgbottom.svg";



const ObjectifsSections = styled.section`
background-color:#FFFFFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;

p {
margin: 0 0 2.5vh 0;
}

h3{
  margin:3vh;
}
.Objectiftitle{
  font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}

`;
const ObjectifsTitle = styled.h1`
background-color:#95B71D;
border-radius:20px;
padding:0.8rem 1rem;
color:#fff;
font-size: 1.7rem;
text-transform: uppercase;
margin: 2.5vh 0 3vh 0;
font-family:"CeraRoundPro-Bold";

`;
const Objectifsparalaxtop = styled.img `
position:absolute;
top:0;
left:0;
width: 400px;
`;
const Objectifsparalaxbottom = styled.img `
position:absolute;
bottom:0;
right:0;
width: 248px;
`;
const ObjectifsIcone = styled.img `
width: 100px;
`;


function Objectifs({program}) {
  return (
    <ObjectifsSections>
      <Objectifsparalaxtop src={Objectifsparalaximgtop} alt=""/>
      <Objectifsparalaxbottom src={Objectifsparalaximgbottom} alt=""/>
      <ObjectifsIcone src={Objectifssvg} alt=""/>
      <h1 className="Objectiftitle">
      objEctifs
      </h1>
      <ObjectifsTitle>objectif GLOBAL</ObjectifsTitle>
      {parse(program.acf.objectif_global)}

      <ObjectifsTitle>objectifs spécifiques</ObjectifsTitle>
      <h3>Les objectifs spécifiques associés au programme sont : </h3>
      
      {parse(program.acf.objectif_specifiques)}



    </ObjectifsSections>
  )
}

export default Objectifs
