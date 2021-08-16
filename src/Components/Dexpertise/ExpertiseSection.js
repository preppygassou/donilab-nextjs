import React from 'react'
import styled from 'styled-components';
import ExpertiseCards from './ExpertiseCards';
import CircleAfterHero from "../../assets/circleafterhero.svg";
import LogoDExpertise from "../../assets/logodolibalexpertise.svg"
import Oconnect from "../../assets/svg/oconnect.svg"
import SectionTitle from "../SectionTitle"
import { useTranslation } from 'react-i18next';




const ExpertisesContainerWrapper= styled.section `
padding:8vh 0;
animation: slideInFromBottom 1s ease-in;
background-color:${({expertise})=>(expertise ? 'transparent':'#2755A1')};
margin-bottom:${({expertise})=>(expertise ? '8vh':'0')};
`;

const CircleAfterHeroDiv = styled.div `
display:${({expertise})=>(expertise ? 'none':'block')};
position:absolute;
top:66vh;
right:0;

img{
  height:420px;
  
}

clear: both;

@media (min-width: 1281px) { 
  animation: slideInFromTop 1s ease-in;

  img{
  height:400px;
}
}

@media (max-width: 768px) {
  animation: slideInFromTop 1s ease-in;
  img{
  height:300px;
}
}
@media (max-width: 500px) {
  img{
    display:none;
}
  
}

@media (min-width: 769px) and (max-width: 1024px) {
  img{
  height:280px;
}

}


@media (min-width:  1025px) and (max-width: 1280px) {
  img{
  height:300px;
}
}
`;

const SectionTitletest = styled.div`
color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 0 9vh 0;
  padding-top:3vh;
  
img{
  width: 35%;
}

@media (max-width: 768px) {

  img{
  width: 45%;
}

}
h1{
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold"
}
.sectiontitle{
  color:#fff;
}
object svg {
  width: 1.6em;
height: 1.61em;
vertical-align: middle;
display: inline-block;
}
.conectimg{
/*  position: absolute;
 width: 95px;
left: 44vh;
bottom: -1vh; */
}
span img{

 width: 95px;

}
span{
 color: #95B71D;
}

`;

function ExpertiseSection({expertise}) {
  const { t} = useTranslation()
  return (
    <ExpertisesContainerWrapper expertise={expertise}>
        <CircleAfterHeroDiv expertise={expertise} className="circleafterhero">
        <img src={CircleAfterHero} alt=""/>
      </CircleAfterHeroDiv>
      <SectionTitletest>
          <img src={LogoDExpertise} alt="" />
        </SectionTitletest>
      <ExpertiseCards/>  
    </ExpertisesContainerWrapper>
  )
}

export default ExpertiseSection
