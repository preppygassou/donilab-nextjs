import React from 'react'
import styled from 'styled-components'
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


const LabelAfricinnovContainer = styled.div`
background-color:#EFEFEF;
height: 100%;
padding:8vh 5vh;

  @media (min-width: 481px) and (max-width: 1024px) {
    padding:5vh; 
    h1{
      padding:3rem;
    }
}
h1{
text-align:center;
color:#2755A1;
font-family:"Cera Round Pro";
font-size: 2.2rem;
font-weight: bold;
}
`;
const LabelContent = styled.div`
  width:100%;
  margin:0 auto;
  display:grid;
  grid-template-columns:45% 55%;
  grid-auto-rows:1fr;
  align-items:center;
  
  @media (min-width: 768px) and (max-width: 1024px) {
  
    grid-template-columns:1fr;
  
}
  @media (max-width: 767px) {
    grid-template-columns:1fr;
    grid-auto-rows:0.5fr;
 
}
`;
const LabelLogo = styled.div`
width:100%;
display:flex;
justify-content:center;
 img{

   width:350px;
 }
 @media (max-width: 767px) {

  img{

width:250px;
}
}
`;
const LabelInfo = styled.div`
width:100%;
 padding-right:4rem;
 @media (max-width: 767px) {
 padding-right:0rem;
  
}
@media (max-width: 768px)  {
 padding-right:0rem;
  
 padding-top:2rem;
}

@media (min-width:  769px) and (max-width: 1280px) {
  padding-right:0rem;
 
}
`;
function Labelafricinnov() {
  const {locale} = useRouter()
  return (
    <LabelAfricinnovContainer >
      <h1>{locale === "en" ?"AFRIC'INNOV LABEL":"LE LABEL AFRIC'INNOV"}</h1>
      <LabelContent>
        <LabelLogo>
          <img src={"/static/assets/label.png"} alt="Label Afric'innov" />
        </LabelLogo>
        <LabelInfo>
          <p>{locale === "en" ?"In 2021, DoniLab had its support methodology certified. Developed to improve the readability of African entrepreneurial ecosystems, the Afric'innov Label highlights the most successful incubators on the continent. To do this, it is based on a strict quality benchmark, initiated by the International Organization of La Francophonie and the founding consortium of Afric'innov, and co-constructed with around fifty actors from our ecosystems, based on twenty criteria assessing the infrastructure, governance, methodology and support resources, as well as the range of services made available to supported entrepreneurs.":"En 2021, DoniLab a vu sa méthodologie d’accompagnement certifiée. Développé pour améliorer la lisibilité des écosystèmes entrepreneuriaux africains, le Label Afric'innov met en évidence les incubateurs les plus performants sur le continent. Pour cela, il s'appuie sur un référentiel de qualité strict, initié par l’Organisation Internationale de la Francophonie et le consortium fondateur d’Afric’innov, et co-construit avec une cinquantaine d'acteurs de nos écosystèmes, reposant sur vingt critères évaluant les infrastructures, la gouvernance, la méthodologie et ressources d'accompagnement, ainsi que l'offre de services mis à disposition des entrepreneurs accompagnés."}</p>
        </LabelInfo>
      </LabelContent>
    </LabelAfricinnovContainer >
  )
}

export default Labelafricinnov
