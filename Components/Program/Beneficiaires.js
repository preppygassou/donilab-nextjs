import React, { useContext } from 'react'
import styled from 'styled-components/';
import { useRouter } from 'next/router';


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
  font-family:"Cera Round Pro";
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
 font-family:"Cera Round Pro";
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
  const {locale} = useRouter()
  

  return (
    <BeneficiairesSections>
        <BeneficiairesIcon className="" src={"/static/assets/svg/partnersSvgProgram.svg"} alt="Beneficiaire icon" />
        <BeneficiairesTitle >
  {locale=== "en" ?"BENEFICIARIES":"BÉNÉFICIAiRES"}
         <br/> 
  {locale=== "en" ?"FROM THE PROGRAM ":"DU PROGRAMME"}

       </BeneficiairesTitle >
       <BeneficiairesLogoContent>
         <h1>
  {locale=== "en" ?"1st edition":"1er édition"}

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
