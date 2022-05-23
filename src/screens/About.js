import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import DoniEvent from '../Components/DoniEventSection';
import TeamSection from '../Components/TeamSection';
import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import AboutheroleftparalaxeImg from "./../assets/svg/aboutheroleftparalaxe.svg"
import AboutherorightparalaxeImg from "./../assets/svg/aboutherorightparalaxe.svg"
import VisionIcon from "./../assets/svg/visionicon.svg"
import HistoryIcon from "./../assets/svg/historyicon.svg"
import MissionIcon from "./../assets/svg/missionicon.svg"
import Historyparalaximgtop from "./../assets/svg/historyparalaximgtop.svg"
import Historyparalaximgbottom from "./../assets/svg/historyparalaximgbottom.svg"
import MissionParalaxeBottom from "./../assets/svg/missionParalaxe.svg"
import MissionRightParalaxeImg from "./../assets/svg/missionRightParalaxe.svg"
import SectionTitle from "../Components/SectionTitle";
import Oconnect from "./../assets/svg/oconnect.svg";
import { useDispatch, useSelector } from 'react-redux';
import { listHubs } from '../actions/HubActions';
import Loading from '../Components/Loading';
import MessageBox from '../Components/MessageBox';
import ErrorBoundary from '../Components/ErrorBoundary';
import { CurrentLangContext } from '../Context/CurrentLangContext';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import parser from 'html-react-parser';
import { Helmet } from 'react-helmet';

const AboutContainer = styled.div `
width:100%;
overflow:hidden;
`;
const AboutWrapper = styled.div `
.iconAbout{
  width:100px;
}
`;
const AboutHero = styled.section `
background-color:#2755A1;
height: 80vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
color:#fff;
padding:2rem 15rem;
width:100%;
@media (min-width:769px) and (max-width:1600px){
  padding: 20rem 5rem;
}
@media (max-width:768px){
  padding:2rem 4rem;
  p{
    font-size:0.9rem;
  }
}
@media (max-width:500px){
  padding: 25rem 2rem;
}
h1{
animation: slideInFromBottom 1s ease-in;

}
`;
const AboutParagraph = styled.div `
animation: slideInFromBottom 1s ease-in;
text-align:center;
margin:0 auto;
width:100%;
p{
  margin:0  2vh 2vh 0;
}
`;

const SectionTitlett =styled.div`
color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  margin:0 0 4vh 0;
  position:relative;

h1{
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
}
 img{
 position: absolute;
 width: 95px;
 left: 22vh;
bottom: -1vh;

}
span{
 color: #95B71D;
}

`;

const AboutHistoric = styled.div `
background-color:#EFEFEF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;
@media (min-width:769px) and (max-width:1600px){
  padding: 5rem 5rem;
}
@media (max-width:768px){
  padding:2rem 4rem;
  p{
    font-size:0.9rem;
  }
}
@media (max-width:500px){
  padding: 5rem 2rem;
}

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;

const AboutVision = styled.div `
background-color:#95B71D;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#FFF;
text-align:center;
padding:12vh 45vh;
position:relative;
@media (max-width:768px){
  padding:2rem 4rem;
  p{
    font-size:0.9rem;
  }
}
@media (max-width:500px){
  padding: 5rem 2rem;
}

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}


`;
const AboutMission = styled.div `
background-color:#FFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;
@media (max-width:768px){
  padding:2rem 4rem;
  p{
    font-size:0.9rem;
  }
}
@media (max-width:500px){
  padding: 5rem 2rem;
}

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;
const AboutheroparalaxeLeft  = styled.img `
position:absolute;
top:0;
left:0;
width:350px;
@media (max-width:1600px){
  width:250px;
}
@media (max-width:768px){
  width:150px;
}
`;
const AboutheroparalaxeRight = styled.img `
position:absolute;
top: 60px;
right:0;
width:400px;
@media (max-width:1600px){
  width:250px;
  top: 60px;
}
@media (max-width:768px){
  width:150px;
}
`;
const HistoryparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 12vh;
width: 310px;
@media (max-width:900px){
  width:250px;
  
}
@media (max-width:768px){
  width:150px;
}

`;
const HistoryparalaxImgbottom = styled.img `
position:absolute;
bottom: 0;
right:0;
width: 125px;
@media (max-width:768px){
  width:90px;
}
`;
const HistoryVisionMissionIcon = styled.img `
width:100px;

`;
const MissionParalaxeImgBottom = styled.img `
position:absolute;
top: 0;
left: 12vh;
width: 300px;
@media (max-width:900px){
  width:250px;
  
}
@media (max-width:768px){
  width:150px;
}
`;
const MissionParalaxeImgRight = styled.img `

position:absolute;
bottom: 0;
right:0;
width: 200px;
@media (max-width:900px){
  width:150px;
  
}
@media (max-width:768px){
  width:85px;
}
`;

export default function About() {
  const dispatch = useDispatch()
  const hubList = useSelector((state) => state.hubList)
  const {t} = useTranslation()
  const [abouts, setAbouts] = useState([])
  const value = useContext(CurrentLangContext);
  const {currentLang} = value
  const { loading,error,hubs } = hubList;


   useEffect(() => { 
    
     axios.get(`https://blog.donilab.org/wp-json/wp/v2/about/?lang=${currentLang}`)      
     .then(res => 
      setAbouts(res.data) , 
         ); 
   }, [currentLang])


  useEffect(() => {
    dispatch(listHubs(currentLang))
  }, [dispatch,currentLang])

  return (
    <>
    <Helmet>
                    <title>Donilab | About</title>
                    <meta name="description" content="A propos de Donilab" />
                </Helmet>
    <AboutContainer>
      <AboutWrapper>
        {
          abouts.map((about,index)=>(
            index === 0 ? <AboutHero>
            <AboutheroparalaxeLeft src={AboutheroleftparalaxeImg} alt=""/>
            <AboutheroparalaxeRight src={AboutherorightparalaxeImg} alt=""/>
          <SectionTitle white="true">
          <h1>
          {t("apr")}
          <span className="conectimg">
                  o
                  <svg id="Grupo_729" data-name="Grupo 729" xmlns="http://www.w3.org/2000/svg" width="128.639" height="143.869" viewBox="0 0 128.639 143.869">
                    <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d" />
                    <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d" />
                    <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d" />
                  </svg>
    
                </span>
                {t("pos")}
            </h1>
            </SectionTitle>
           <AboutParagraph>
           {parser(about.acf.description_about)}
           </AboutParagraph>
          </AboutHero> : index === 1 ?  <AboutHistoric>
      <HistoryparalaxImgtop src={Historyparalaximgtop} alt=""/>
        <HistoryparalaxImgbottom src={Historyparalaximgbottom} alt=""/>
        <HistoryVisionMissionIcon className="iconAbout" src={HistoryIcon} alt="Historic icon" />
        <h1>
        {about.title.rendered}
       </h1>
        {parser(about.acf.description_about)}
      </AboutHistoric> : index === 2 ? <AboutVision>
       
       <HistoryVisionMissionIcon className="iconAbout" src={VisionIcon} alt="Visionicon" />
       <h1>
       {about.title.rendered}
      </h1>
      {parser(about.acf.description_about)}
     </AboutVision> : index === 3 ? <AboutMission>
      <MissionParalaxeImgBottom src={MissionParalaxeBottom} alt=""/>
        <MissionParalaxeImgRight src={MissionRightParalaxeImg} alt=""/>
        <HistoryVisionMissionIcon className="iconAbout" src={MissionIcon} alt="Historic icon" />
        <h1>
        {about.title.rendered}

       </h1>
       {parser(about.acf.description_about)}
      </AboutMission> : ""
          ))
        }
      
      <ErrorBoundary>
      {
        loading ? <div className="loading" />  : error ? <MessageBox>erreur de chargement .</MessageBox> :(
          hubs.map((hub,index)=>(
            index === 0  && (<TeamSection about="about" hub={hub}/> )  
            ))
        )
      }
      </ErrorBoundary>
      <ErrorBoundary>
      <DoniEvent/>
      </ErrorBoundary>
      </AboutWrapper>
    </AboutContainer>
    </>
  )
}
