import React from 'react'
import styled from 'styled-components/';
import EnResumeparalaximgtop from "./../../assets/svg/EnResumeparalaximgtop.svg";
import EnResumeparalaximgLeft from "./../../assets/svg/EnResumeparalaximgLeft.svg";
import EnResumeIcone from "./../../assets/svg/EnResumerIcon.svg";
import parse from "html-react-parser";




const EnResumeSection = styled.div `
background-color:#255199;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#fff;
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


const EnResumeparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 45px;
width: 310px;

`;
const EnResumeparalaxImgbottom = styled.img `
position:absolute;
top: -8rem;
right:0;
width: 125px;

`;
const EnResumeVisionMissionIcon = styled.img `


`;

function EnResume({hub}) {
  return (
    <EnResumeSection>
      <EnResumeparalaxImgtop src={EnResumeparalaximgtop} alt=""/>
        <EnResumeparalaxImgbottom src={EnResumeparalaximgLeft} alt=""/>
        <EnResumeVisionMissionIcon className="" src={EnResumeIcone} alt="Historic icon" />
        <h1>
        en résumé
       </h1>
       <h2>{hub.acf.titreduresume}</h2>
       {parse(hub.acf.description_du_resume)}
      </EnResumeSection>
  )
}

export default EnResume
