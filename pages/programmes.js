import React, { useContext, useEffect } from 'react'
import styled from 'styled-components/';
import ProgramByDonilab from '../Components/ProgramDonilab';
import SectionTitle from "../Components/SectionTitle";
import MessageBox from '../Components/MessageBox';
import ErrorBoundary from '../Components/ErrorBoundary';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '../Components/layouts/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ProgramContext } from '../services/program/program.context';

const SectionTitlell =styled.div`

color: #fff;
  
  position: relative;


h1{
  font-family:"Cera Round Pro";
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
  font-family:"Cera Round Pro";
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
  const { t} = useTranslation('common')
  const { state ,listProgramsTypeOfDonilab,listProgramsTypeWithPartner} = useContext(ProgramContext);

  const {locale} = useRouter()

  const { loadingprogramsbydonilab,errorloadingprogrambydonilab,programsByDonilab,loading,error,programsWithPartners } = state;



  useEffect(() => {
   listProgramsTypeOfDonilab(ProgrammestypesOfDonilab)
  }, [ProgrammestypesOfDonilab])

  useEffect(() => {
   listProgramsTypeWithPartner(ProgrammestypesWithPartnersId)
  }, [ProgrammestypesWithPartnersId])


  return (
    <>
    <ProgramContainer>
      
      <HeroProgram>
      <ProgramheroparalaxeLeft src={"/static/assets/svg/paralaxetopheroprogram.svg"} alt=""/>
        <ProgramheroparalaxeRight src={"/static/assets/svg/paralaxebottomheroprogram.svg"} alt=""/>
        <SectionTitle className= "programsandhubstitle" white="true">
    
        {
          locale === "en" ?
          <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_PROGRAMMES-EN.svg'} className="">
          </object> :
           <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_PROGRAMMES-FR.svg'} className="">
           </object>
           }
        </SectionTitle>
      </HeroProgram>

        <ProgramByDonilabSection>
        <ProgramdonilabparalaxeLeft src={"/static/assets/svg/paralaxetopdonilabprogram.svg"} alt=""/>
        <ProgramdonilabparalaxeRight src={"/static/assets/svg/paralaxebottomdonilabprogram.svg"} alt=""/>
        <ProgramSectionTitle>
        {t("initbydonilab")}
        </ProgramSectionTitle>
       { loadingprogramsbydonilab ? <div className='loading-overlay' ><div className="loading"></div></div> :errorloadingprogrambydonilab ? <MessageBox>erreur de chargement</MessageBox> :
    
         <ProgramByDonilab ProgramData={programsByDonilab}/>
        
         }
        </ProgramByDonilabSection>
        <PrograminParnterSection>
        <Programpartnerparalaxe src={"/static/assets/svg/paralaxepartnerprogram.svg"} alt=""/>
        <ProgramSectionTitle>
        {t("inpartner")}
        </ProgramSectionTitle>
        {
          loading ? <div className='loading-overlay' ><div className="loading"></div></div> :error ? <MessageBox>erreur de chargement</MessageBox> :
          <ProgramByDonilab ProgramData={programsWithPartners}/>
          }
        </PrograminParnterSection>
    </ProgramContainer>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Program
