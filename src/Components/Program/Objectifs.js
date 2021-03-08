import React from 'react'

import styled from 'styled-components/';
import Objectifssvg from "./../../assets/svg/objectifssvg.svg";
import parse from "html-react-parser";



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

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}

`;
const ObjectifsTitle = styled.h1`
background-color:#95B71D;
border-radius:20px;
padding:0.5rem;
color:#fff;
font-size: 1rem;

`;


function Objectifs({program}) {
  return (
    <ObjectifsSections>
      <img src={Objectifssvg} alt=""/>
      <h1>
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
