import React, { useContext } from 'react'
import styled from 'styled-components/';
import parse from "html-react-parser";
import { useRouter } from 'next/navigation';
import { CurrentLangContext } from '~/Context/CurrentLangContext';




const ResultatsSection = styled.div `
background-color:#EFEFEF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 30vh;
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
p{
  color:#2755A1;
  margin-bottom: .2rem;
}

h1{
  font-family:"Cera Round Pro";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    color:#2755A1;
    @media (max-width:768px){
  font-size: 2rem;
  margin: 2vh 0;
       }
  @media (max-width:360px){
  font-size: 1.8rem;

}
}
`;


const ResultatsSectionparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 0;
width: 200px;
@media (max-width:900px){
width: 180px;
}
@media (max-width:500px){
width: 160px;
}
`;
const ResultatsSectionparalaxImgbottom = styled.img `
position:absolute;
bottom: 0;
right:0;
width: 130px;
@media (max-width:768px){
width: 120px;
}

`;
const ResultatsSectionVisionMissionIcon = styled.img `
width:100px;
@media (max-width:768px){
width: 80px;
}
`;


function Resultats({program}) {
  /* const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale */
  const { locale } = useRouter();
  

  return (
    <ResultatsSection>
      <ResultatsSectionparalaxImgtop src={"/assets/svg/resultatsSectionparalaximgtop.svg"} alt=""/>
      <ResultatsSectionparalaxImgbottom src={"/assets/svg/resultatsSectionparalaximgbottom.svg"} alt=""/>
      <ResultatsSectionVisionMissionIcon className="" src={"/assets/svg/ResultatsSectionIcone.svg"} alt="Historic icon" />

      <h1>
      
  {locale=== "en" ?"Results":"Résultats"}

     </h1>
     
     {
       parse(program.acf.resultats)
     }

    </ResultatsSection>
    
  )
}

export default Resultats
