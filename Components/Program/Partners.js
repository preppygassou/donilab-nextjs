import React, { useContext } from 'react'
import PartnersSlider from './PartnersSlider'
import styled from 'styled-components/';
import { useRouter } from 'next/router';
import { CurrentLangContext } from '~/Context/CurrentLangContext';

const PartnersSectionLogo = styled.div `
overflow:hidden;
`;
const PartnersSectionWrapper = styled.div `
text-align:center;
margin:10vh 0;

h1{
  color:#2755A1;
  font-family:"Cera Round Pro";
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align:center;
  @media (max-width:768px){
  font-size: 2rem;
 
       }
  @media (max-width:360px){
  font-size: 1.8rem;

}
}
img {
  width:100px;
  @media (max-width:768px){
width: 80px;
}
}
`;


function Partners({program}) {
  const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale
  

  return (
    <PartnersSectionLogo>
      <PartnersSectionWrapper>
      <div><img src={"/static/assets/svg/PartnersProgram.svg'"} alt=""/></div>
        <h1>
          
  {locale=== "en" ?"PROGRAMS":"PARTENAIRES DU "}

          <br/>
  {locale=== "en" ?"PARTENERS":" PROGRAMME "}

         </h1>
      </PartnersSectionWrapper>
<PartnersSlider program={program}/>
    </PartnersSectionLogo>
  )
}

export default Partners
