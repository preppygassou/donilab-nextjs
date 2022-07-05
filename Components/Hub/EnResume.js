import React, { useContext } from 'react'
import styled from 'styled-components/';
import EnResumeparalaximgtop from "././static/assets/svg/EnResumeparalaximgtop.svg";
import EnResumeparalaximgLeft from "././static/assets/svg/EnResumeparalaximgLeft.svg";
import EnResumeIcone from "././static/assets/svg/EnResumerIcon.svg";
import parse from "html-react-parser";
import { CurrentLangContext } from '../../Context/CurrentLangContext';


const EnResumeSection = styled.div `
background-color:#255199;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#fff;
text-align:center;
padding:12vh 40vh;
position:relative;
@media (max-width:900px){
  padding:12vh 20vh;

}
@media (max-width:768px){
  padding:12vh 10vh;

}
@media (max-width:360px){
  padding:12vh 4vh;

}

h1{
  font-family:"Cera Round Pro";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 4vh 0 1vh 0;
    
}
h2{
  margin: 1vh 0 3vh 0;

}
`;


const EnResumeparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 45px;
width: 311px;
@media (max-width:768px){
  width: 200px;
}
@media (max-width:500px){
display:none;
}
`;
const EnResumeparalaxImg = styled.img `
position:absolute;
top: -8rem;
right:0;
width: 124px;
@media (max-width:500px){
display:none;
}

`;
const EnResumeVisionMissionIcon = styled.img `

width:100px;
@media (max-width:768px){
width: 80px;
}
`;

function EnResume({hub}) {
  const value = useContext(CurrentLangContext);
  const {currentLang} = value
  return (
    <EnResumeSection>
      <EnResumeparalaxImgtop src={EnResumeparalaximgtop} alt=""/>
        <EnResumeparalaxImg src={EnResumeparalaximgLeft} alt=""/>
        <EnResumeVisionMissionIcon className="" src={EnResumeIcone} alt="Historic icon" />
        <h1>
        {currentLang=== "en" ?"In summary":"en résumé"}
       </h1>
       <h2>{hub.acf.titreduresume}</h2>
       {parse(hub.acf.description_du_resume)}
      </EnResumeSection>
  )
}

export default EnResume
