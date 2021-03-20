import React from 'react'
import styled from "styled-components/macro"
import LabelAfricinnov from "./../assets/label.png"

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
font-family:"CeraRoundPro-Bold";
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
  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns:1fr;
 
}
`;
const LabelLogo = styled.div`
width:100%;
display:flex;
justify-content:center;
 img{

   width:350px;
 }
 @media (min-width: 481px) and (max-width: 767px) {

 
}
`;
const LabelInfo = styled.div`
width:100%;
 padding-right:4rem;
 @media (min-width: 481px) and (max-width: 767px) {
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
  return (
    <LabelAfricinnovContainer >
      <h1>LE LABEL AFRIC'INNOV</h1>
      <LabelContent>
        <LabelLogo>
          <img src={LabelAfricinnov} alt="Label Afric'innov" />
        </LabelLogo>
        <LabelInfo>
          <p>En 2021, DoniLab a vu sa méthodologie d’accompagnement certifiée.
          Développé pour améliorer la lisibilité des écosystèmes entrepreneuriaux africains,
          le Label Afric'innov met en évidence les incubateurs  les plus performants sur le continent.
          Pour cela, il s'appuie sur un référentiel de qualité strict, initié par l’Organisation
          Internationale de la Francophonie et le consortium fondateur d’Afric’innov,
          et co-construit avec une cinquantaine d'acteurs de nos écosystèmes, reposant
          sur vingt critères évaluant les infrastructures, la gouvernance, la méthodologie
          et ressources d'accompagnement, ainsi que l'offre de services mis à disposition
          des entrepreneurs accompagnés.</p>
        </LabelInfo>
      </LabelContent>
    </LabelAfricinnovContainer >
  )
}

export default Labelafricinnov
