import React from 'react'
import styled from "styled-components/macro"
import LabelAfricinnov from "./../assets/label.png"

const LabelAfricinnovContainer = styled.div`
background-color:#EFEFEF;
height: 100%;
padding:8vh 5vh;
h1{
text-align:center;
color:#2755A1;
font-family:"CeraRoundPro-Bold";
font-size: 2.2rem;
font-weight: bold;
}
`;
const LabelContent = styled.div`
  margin:0 9rem;
  display:flex;
  align-items:center;
  
  justify-content:center;
  p{
    
     width:600px;
     margin-left:6vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  
  /* CSS */
  
}
  @media (min-width: 481px) and (max-width: 767px) {
  flex-direction:column;
  text-align:center;
  p{
    
    margin-left:0;
 }
}
`;
const LabelLogo = styled.img`
 margin-right:5vh;
 width:350px;
 @media (min-width: 481px) and (max-width: 767px) {
  margin:4vh 0;
}
`;
function Labelafricinnov() {
  return (
    <LabelAfricinnovContainer >
      <h1>LE LABEL AFRIC'INNOV</h1>
      <LabelContent>
        <div>
          <LabelLogo src={LabelAfricinnov} alt="Label Afric'innov" />
        </div>
        <div>
          <p>En 2021, DoniLab a vu sa méthodologie d’accompagnement certifiée.
          Développé pour améliorer la lisibilité des écosystèmes entrepreneuriaux africains,
          le Label Afric'innov met en évidence les incubateurs  les plus performants sur le continent.
          Pour cela, il s'appuie sur un référentiel de qualité strict, initié par l’Organisation
          Internationale de la Francophonie et le consortium fondateur d’Afric’innov,
          et co-construit avec une cinquantaine d'acteurs de nos écosystèmes, reposant
          sur vingt critères évaluant les infrastructures, la gouvernance, la méthodologie
          et ressources d'accompagnement, ainsi que l'offre de services mis à disposition
          des entrepreneurs accompagnés.</p>
        </div>
      </LabelContent>
    </LabelAfricinnovContainer >
  )
}

export default Labelafricinnov
