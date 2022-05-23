import React, { useContext, useEffect } from 'react'
import styled from 'styled-components/';
import ProgramByDonilab from '../Components/ProgramDonilab';
import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import ProgramheroleftparalaxeImg from "./../assets/svg/paralaxetopheroprogram.svg"
import ProgramherorightparalaxeImg from "./../assets/svg/paralaxebottomheroprogram.svg"
import ProgramdonilableftparalaxeImg from "./../assets/svg/paralaxetopdonilabprogram.svg"
import ProgramdonilabrightparalaxeImg from "./../assets/svg/paralaxebottomdonilabprogram.svg"
import ProgrampartnerparalaxeImg from "./../assets/svg/paralaxepartnerprogram.svg"
import { ProgramByDonilaData } from '../data/ProgramData';
import { ProgramInPartnerData } from '../data/ProgramData';
import SectionTitle from "../Components/SectionTitle";
import Oconnect from "./../assets/svg/oconnect.svg";
import { listProgramsTypeOfDonilab, listProgramsTypeWithPartner } from "../actions/ProgramActions";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Components/Loading';
import MessageBox from '../Components/MessageBox';
import ErrorBoundary from '../Components/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { CurrentLangContext } from '../Context/CurrentLangContext';


const SectionTitlell =styled.div`

color: #fff;
  
  position: relative;


h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
}
 img{
 position: absolute;
 width: 95px;
 left: 5vh;
    bottom: 0vh;

}
span{
 color: #95B71D;
}

`;

const HeroProgram = styled.div `
display: flex;
  justify-content: center;
  width:100%;
  align-items:center;
background-color:#2755A1;
height: 40vh;
& > div {
  margin:0;
}
.programsandhubstitle{
  margin:0;
}

@media only screen and (max-width: 1199px) {
  .programsandhubstitle{
  
  h1,span{ 
    font-size: 3rem;
  }
  span svg {
    left: -17px;
bottom: -47px;
width: 66px;
}

}
}
@media only screen and (max-width: 991px) {
  .programsandhubstitle{
  
  h1,span{ 
    font-size: 2.5rem;
  }
  span svg {
    left: -13px;
bottom: -51px;
width: 54px;
}

}
}

`;

const ProgramheroparalaxeLeft  = styled.img `
position:absolute;
top:0;
left:0;
width:350px;

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  width: 26%;
    height: 33%;
}

/* Large devices (laptops/desktops, 992px and up) */

@media only screen and (max-width: 1199px) {
  width: 25%;
    height: 30%;
}

@media (max-width:991px){
  width: 40%;
height: 30%;
}
@media (max-width:768px){
  display:none;

}



/* @media (max-width:768px){
width:40%;
} */
`;
const ProgramheroparalaxeRight = styled.img `
position:absolute;
right:0;
width:21%;
height:100%;

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media (min-width: 1200px) {
  width: 22%;
height: 100%;
}

@media (max-width: 1199px) {
  width: 27%;
height:100%;
}

@media (max-width:991px){
width:29%;
height:100%;

}
/* @media (max-width:900px){
  width:29%;
height:100%;
} */
@media (max-width:900px){
  display:none;
}
`;
const ProgramdonilabparalaxeLeft= styled.img `
position:absolute;
top:0;
left:0;
width:250px;
`;
const ProgramdonilabparalaxeRight = styled.img `
position:absolute;
bottom:0;
right:0;
width:250px;
`;
const Programpartnerparalaxe = styled.img `
position:absolute;
bottom:0;
right:0;
`;
const ProgramContainer = styled.div `
width:100%;
`;
const ProgramContainerWrapper = styled.div `

`;
const ProgramSectionTitle = styled.h1 `
color:#2755A1;
font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
  text-align:center;
  margin:0vh 0 12vh 0;
  z-index:10;
  @media (max-width:900px){
    font-size: 3rem;
}
@media (max-width:768px){
  font-size: 2rem;
}
@media (max-width:360px){
  margin:0vh 0 10vh 0;

}
`;
const ProgramByDonilabSection = styled.section `
position:relative;
text-align:center;
padding:15vh 4vh;
display:flex;
align-items:center;
flex-direction:column;
`;
const PrograminParnterSection = styled.section `
position:relative;
text-align:center;
background-color:#EFEFEF;
padding:15vh 4vh;
display:flex;
align-items:center;
flex-direction:column;
`;

const ProgrammestypesOfDonilab = 48;
const ProgrammestypesWithPartnersId = 49;

function Program() {
  const { t} = useTranslation()
  const dispatch = useDispatch()
  const value = useContext(CurrentLangContext);
  const {currentLang} = value
  const programByDonilab = useSelector((state)=>state.programByDonilab)
  const programWithPartners = useSelector((state)=>state.programWithPartners)

  const { loadingprogramsbydonilab,errorloadingprogrambydonilab,programsByDonilab } = programByDonilab;
  const { loading,error,programsWithPartners } = programWithPartners;


  useEffect(() => {
   dispatch(listProgramsTypeOfDonilab(ProgrammestypesOfDonilab,currentLang))
  }, [dispatch,currentLang])

  useEffect(() => {
   dispatch(listProgramsTypeWithPartner(ProgrammestypesWithPartnersId,currentLang))
  }, [dispatch,currentLang])


  return (
    <ProgramContainer>
      
      <HeroProgram>
      <ProgramheroparalaxeLeft src={ProgramheroleftparalaxeImg} alt=""/>
        <ProgramheroparalaxeRight src={ProgramherorightparalaxeImg} alt=""/>
        <SectionTitle className= "programsandhubstitle" white="true">
        
          <h1>

      {t("n")}
      <span className="conectimg">
              o
              <svg id="Grupo_729" data-name="Grupo 729" xmlns="http://www.w3.org/2000/svg" width="128.639" height="143.869" viewBox="0 0 128.639 143.869">
                <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d" />
                <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d" />
                <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d" />
              </svg>

            </span>
            {t("os")} {t("programs")}
        </h1>
        </SectionTitle>
      </HeroProgram>

        <ProgramByDonilabSection>
        <ProgramdonilabparalaxeLeft src={ProgramdonilableftparalaxeImg} alt=""/>
        <ProgramdonilabparalaxeRight src={ProgramdonilabrightparalaxeImg} alt=""/>
        <ProgramSectionTitle>
        {t("initbydonilab")}
        </ProgramSectionTitle>
       { loadingprogramsbydonilab ? <div className="loading"/> :errorloadingprogrambydonilab ? <MessageBox>erreur de chargement</MessageBox> :
      <ErrorBoundary>
         <ProgramByDonilab ProgramData={programsByDonilab}/>
         </ErrorBoundary>
         }
        </ProgramByDonilabSection>
        <PrograminParnterSection>
        <Programpartnerparalaxe src={ProgrampartnerparalaxeImg} alt=""/>
        <ProgramSectionTitle>
        {t("inpartner")}
        </ProgramSectionTitle>
        {
          loading ? <div className="loading"/> :error ? <MessageBox>erreur de chargement</MessageBox> :
        <ErrorBoundary>
          <ProgramByDonilab ProgramData={programsWithPartners}/>
        </ErrorBoundary>
          }
        </PrograminParnterSection>
    </ProgramContainer>
  )
}

export default Program
