import React from 'react'
import styled from 'styled-components'
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'next-i18next';


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
  const { t} = useTranslation('common')
  return (
    <LabelAfricinnovContainer >
      <h1>{t('label_afrinov_title')}</h1>
      <LabelContent>
        <LabelLogo>
          <img src={"/static/assets/label.png"} alt="Label Afric'innov" />
        </LabelLogo>
        <LabelInfo>
          <p>{t('label_afrinov_desc')}</p>
        </LabelInfo>
      </LabelContent>
    </LabelAfricinnovContainer >
  )
}

export default Labelafricinnov
