import React from 'react'
import styled from 'styled-components';
import ExpertiseCards from './ExpertiseCards';
import CircleAfterHero from "./../assets/circleafterhero.svg";
import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import Oconnect from "./../assets/svg/oconnect.svg"
import SectionTitle from "./SectionTitle"
import { useTranslation } from 'react-i18next';




const ExpertisesContainerWrapper= styled.section `
padding:8vh 0;
animation: slideInFromBottom 1s ease-in;
background-color:${({expertise})=>(expertise ? 'transparent':'#EFEFEF')};
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
      <SectionTitle>
          <h1 className={expertise ? "sectiontitle" :""}> 
          {t('n')}
            <span className="conectimg">
              o
              <svg id="Grupo_729" data-name="Grupo 729" xmlns="http://www.w3.org/2000/svg" width="128.639" height="143.869" viewBox="0 0 128.639 143.869">
  <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d"/>
  <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d"/>
  <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d"/>
</svg>

            </span>
            {t('tre')} {t('expertise')}
            </h1>
          {/* <span className="conectimg"><img src={ConectImgTitle} alt="" /></span> */}
          
          
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1090" height="143.869" viewBox="0 0 1090 143.869">
  <g id="Grupo_739" data-name="Grupo 739" transform="translate(-450 -223.019)">
    <text id="Notre_savoir-faire" data-name="Notre savoir-faire" transform="translate(450 247)" fill="#2755a1" font-size="100" font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="4.18" y="77">N</tspan><tspan y="77" fill="#95b71d">O</tspan><tspan y="77">TRE SAVOIR-FAIRE</tspan></text>
    <g id="Grupo_729" data-name="Grupo 729" transform="translate(499 223.019)">
      <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d"/>
      <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d"/>
      <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d"/>
    </g>
  </g>
</svg>  */}
        </SectionTitle>
      <ExpertiseCards/>  
    </ExpertisesContainerWrapper>
  )
}

export default ExpertiseSection
