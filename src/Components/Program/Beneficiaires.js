import React, { useContext } from 'react'
import PartnersImg from './../../assets/svg/partnersSvgProgram.svg'
import styled from 'styled-components/';
import Objectifssvg from "./../../assets/svg/objectifssvg.svg";
import LogoBene from "./../../assets/logo_doctix.png";
import { CurrentLangContext } from '../../Context/CurrentLangContext';


const BeneficiairesSections = styled.section`
  background-color:#2755A1;
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
`;



const BeneficiairesLogoContent = styled.div`
h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
  color:#95B71D;
  padding:1rem 0;
  border-bottom:solid 2px #95B71D;
}
`;

const BeneficiairesLogoCards = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content:center;
`;
const BeneficiaireLogoWrapper = styled.div`
position:relative;
.BeneficiairesLogoCard{
  width:120px;
height:120px;
background-color:#fff;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin:1rem;
}
&:hover{
  .BeneficiairesLogoCard{
    display:none;
  }

  .BeneficiairesLogoDescription{
background-color:#95B71D;
color:#fff;
width: 145px;
    height: 145px;
    border-radius: 15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    p{
width:100%;
padding: 0.3rem;
    word-break: break-word
    }
}
}
.BeneficiairesLogoDescription{
  display:none;
}
`;
const BeneficiaireLogoDescription = styled.div`

`;
const BeneficiairesLogo = styled.img`
width:75px;

`;
const BeneficiairesIcon = styled.img`
width:100px;
@media (max-width:768px){
width: 80px;
}
`;

const BeneficiairesTitle = styled.h1`
 font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
color:#fff;
@media (max-width:768px){
  font-size: 2rem;
  margin: 2vh 0;
       }
  @media (max-width:360px){
  font-size: 1.8rem;

}
`;

function Beneficiaires({program}) {
  const value = useContext(CurrentLangContext);
  const {currentLang} = value

  return (
    <BeneficiairesSections>
        <BeneficiairesIcon className="" src={PartnersImg} alt="Beneficiaire icon" />
        <BeneficiairesTitle >
  {currentLang=== "en" ?"BENEFICIARIES":"BÉNÉFICIAiRES"}
         <br/> 
  {currentLang=== "en" ?"FROM THE PROGRAM ":"DU PROGRAMME"}

       </BeneficiairesTitle >
       <BeneficiairesLogoContent>
         <h1>
  {currentLang=== "en" ?"1st edition":"1er édition"}

         </h1>

         <BeneficiairesLogoCards>
           {
             program.acf.information_du_beneficiare.map((beneficiaires,index)=>(
               <BeneficiaireLogoWrapper key={index}>
              <div className="BeneficiairesLogoCard">
              <BeneficiairesLogo src={beneficiaires.logo_de_lentreprise_beneficiaire.url}/>
              </div>
              <div className="BeneficiairesLogoDescription">
                <p>{beneficiaires.bref_resumer}</p>
              </div>
              </BeneficiaireLogoWrapper>

             ))
           }
         </BeneficiairesLogoCards>
       </BeneficiairesLogoContent>
      
    </BeneficiairesSections>
  )
}

export default Beneficiaires
