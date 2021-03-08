import React from 'react'
import PartnersSlider from './PartnersSlider'
import { PartnersData } from '../../data/PartnerData';
import PartnersImg from './../../assets/svg/PartnersProgram.svg'
import styled from 'styled-components/';

const PartnersSectionLogo = styled.div `
overflow:hidden;
`;
const PartnersSectionWrapper = styled.div `
display:flex;
justify-content:center;
flex-direction:column;

h1{
  color:#2755A1;
  font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align:center;
}
img {
  width:80px;
}
`;


function Partners({program}) {
  return (
    <PartnersSectionLogo>
      <PartnersSectionWrapper>
      <div><img src={PartnersImg} alt=""/></div>
        <h1>PARTENAIRES DU <br/>PROGRAMME</h1>
      </PartnersSectionWrapper>
<PartnersSlider program={program}/>
    </PartnersSectionLogo>
  )
}

export default Partners
