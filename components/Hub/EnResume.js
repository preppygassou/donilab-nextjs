import React, { useContext } from 'react'
import styled from 'styled-components/';
import parse from "html-react-parser";
import { useRouter } from 'next/navigation';
import { CurrentLangContext } from '~/Context/CurrentLangContext';


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
  const { locale } = useRouter();
  
  return (
    <EnResumeSection>
      <EnResumeparalaxImgtop src={"/assets/svg/EnResumeparalaximgtop.svg"} alt=""/>
        <EnResumeparalaxImg src={"/assets/svg/EnResumeparalaximgLeft.svg"} alt=""/>
        <EnResumeVisionMissionIcon className="" src={"/assets/svg/EnResumerIcon.svg"} alt="Historic icon" />
        <h1>
        {locale=== "en" ?"In summary":"en résumé"}
       </h1>
       <h2>{hub.acf.titreduresume}</h2>
       {parse(hub.acf.description_du_resume)}
      </EnResumeSection>
  )
}

export default EnResume
