import React, { useEffect } from 'react'
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
  align-items:center;
background-color:#2755A1;
height: 40vh;
`;

const ProgramheroparalaxeLeft  = styled.img `
position:absolute;
top:0;
left:0;

`;
const ProgramheroparalaxeRight = styled.img `
position:absolute;
right:0;
width:250px;
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
  margin:2vh 0 4vh 0;
`;
const ProgramByDonilabSection = styled.section `
position:relative;
text-align:center;
padding:5vh 4vh;
display:flex;
align-items:center;
flex-direction:column;
`;
const PrograminParnterSection = styled.section `
position:relative;
text-align:center;
background-color:#EFEFEF;
padding:5vh 4vh;
display:flex;
align-items:center;
flex-direction:column;
`;

const ProgrammestypesOfDonilab = 48;
const ProgrammestypesWithPartnersId = 49;

function Program() {

  const dispatch = useDispatch()
  const programByDonilab = useSelector((state)=>state.programByDonilab)
  const programWithPartners = useSelector((state)=>state.programWithPartners)

  const { loadingprogramsbydonilab,errorloadingprogrambydonilab,programsByDonilab } = programByDonilab;
  const { loading,error,programsWithPartners } = programWithPartners;


  useEffect(() => {
   dispatch(listProgramsTypeOfDonilab(ProgrammestypesOfDonilab))
  }, [dispatch])

  useEffect(() => {
   dispatch(listProgramsTypeWithPartner(ProgrammestypesWithPartnersId))
  }, [dispatch])


  return (
    <ProgramContainer>
      <ProgramContainerWrapper>
      <HeroProgram>
      <ProgramheroparalaxeLeft src={ProgramheroleftparalaxeImg} alt=""/>
        <ProgramheroparalaxeRight src={ProgramherorightparalaxeImg} alt=""/>
        <SectionTitle white="true">
        
          <h1>
      n
          <span className="conectimg">
            <object
              style={{ fill: " #fff " }}
              id={Oconnect}
              type="image/svg+xml"
              width="100"
              height="100"
              data={Oconnect}
              className="svg"
            ></object>
          </span>
          s programmes
        </h1>
        </SectionTitle>
      </HeroProgram>
     
        <ProgramByDonilabSection>
        <ProgramdonilabparalaxeLeft src={ProgramdonilableftparalaxeImg} alt=""/>
        <ProgramdonilabparalaxeRight src={ProgramdonilabrightparalaxeImg} alt=""/>
        <ProgramSectionTitle>
          INITIÉS PAR DONILAB
        </ProgramSectionTitle>
       { loadingprogramsbydonilab ? <Loading></Loading> :errorloadingprogrambydonilab ? <MessageBox>erreur de chargement</MessageBox> :
      <ErrorBoundary>
         <ProgramByDonilab ProgramData={programsByDonilab}/>
         </ErrorBoundary>
         }
        </ProgramByDonilabSection>
        <PrograminParnterSection>
        <Programpartnerparalaxe src={ProgrampartnerparalaxeImg} alt=""/>
        <ProgramSectionTitle>
          EN PARTENARIAT
        </ProgramSectionTitle>
        {
          loading ? <Loading></Loading> :error ? <MessageBox>erreur de chargement</MessageBox> :
        <ErrorBoundary>
          <ProgramByDonilab ProgramData={programsWithPartners}/>
        </ErrorBoundary>
          }
        </PrograminParnterSection>
        </ProgramContainerWrapper>
    </ProgramContainer>
  )
}

export default Program
