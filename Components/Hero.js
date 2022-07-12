import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import { CurrentLangContext } from '~/Context/CurrentLangContext';

const HeroSection = styled.section`
overflow:hidden;
 height:78vh;
 background-color:#EFEFEF;
`;

const HeroWrapper = styled.div`
width:100%;
display:grid;
grid-template-columns: 55% auto;
align-items:center;
height:78vh;
@media (max-width: 768px) {
  /* grid-template-columns: 1fr;
grid-auto-flow: dense; */
display: flex;
  
flex-wrap:wrap-reverse;

}

/* @media (max-width: 768px) {
} */

`;

const HeroTextBox = styled.div`
background-color:#2755A1;
width:100%;
z-index:1;
display:flex;
align-items:center;
height:78vh;
@media (max-width: 768px) {
  width:100%;
  height: 45vh;
}
/* 
@media screen and (min-width:803px) and (max-width:1180px) {
  
}
@media screen and (min-width:803px) and (max-width:1180px) {
  
}
@media (max-width: 768px) {
  width:100%;
} */

.colorgreen{
  color:#95B71D;
}

h1 {
  display:flex;
  font-family:"Cera Round Pro";
   font-size: clamp(2rem, 8vw, 3.75rem);
  letter-spacing:-0.03em;
  line-height: 1.16;
  font-weight: bold;
  text-transform: uppercase;
  flex-direction:column;
  color:#fff;
}
@media (max-width: 768px) {
  h1{
   
    font-size: 2.50rem;
  }
  p{
    font-size:1.4rem;
  }
}
 
@media (min-width: 769px) and (max-width: 1024px) {
  padding-right:2rem;
  h1{
   
   font-size: 1.9rem;
 }
 p{
   font-size:1.1rem ;
 }
}
 


p{
  color:#fff;
  font-size:2.2rem;
  
  margin-top:2px;

  font-weight: 500;
letter-spacing: -0.01em;
line-height: 1.32;

}
`;

const HeroInfo = styled.div`
animation: slideInFromLeft 1s ease-in;
margin-left:8vh;

@media (max-width: 768px) {
  animation: slideInFromTop 1s ease-in;
}
@media (max-width: 500px) {
  width:300px;
  margin:0 auto;
  padding: 1rem 2rem;
  h1{
    font-size: 1.5rem;
  }
  p{
   font-size:1rem ;
 }
}
@media (min-width: 769px) and (max-width: 1024px) {
  margin-left:6vh;
}
 
h1,span{
  font-family:"Cera Round Pro";
}
`;
const HeroImgarc = styled.img`
height:330px;
animation: slideInFromLeft 1s ease-in;
@media (max-width: 768px) {
  animation: slideInFromTop 1s ease-in;
  height: 260px;
}
@media (max-width: 500px) {
 height:100%;
}
`;

const HeroImgBox = styled.div`
animation: slideInFromRight 1s ease-in;
@media (max-width: 768px) {
  animation: slideInFromBottom 1s ease-in;
  width: 100%;
  height:35vh;
}
width:100%;
/* width:45vw; */
height:78vh;

`;
const HeroImg = styled.img`
object-fit:cover;

width: 100%;
height:100%
`;
const HeroInImgarc = styled.img`
position:absolute;
top: -30vh;
right: 61vh;
`;


const Hero = ({ slides }) => {
  const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale

  return (
    <HeroSection>
      <HeroWrapper>
        <HeroTextBox>
          <HeroImgarc src={"/static/assets/rhome1.png"} />
          <HeroInfo>
            <h1>
              <span className="colorgreen">{locale === "en" ? "The incubator" : "L’incubateur"}</span>
              <span>{locale === "en" ? "of" : "de"}</span>
              <span>{locale === "en" ? "reference" : "référence"}</span>
              <span>{locale === "en" ? "in Mali" : "au Mali"}</span>
            </h1>
            <p>
              {locale === "en" ? "by entrepreneurs" : "Par les entrepreneur(e)s "}
              & <br />{locale === "en" ? "for entrepreneurs" : "pour les entrepreneur(e)s "}
            </p>
          </HeroInfo>
        </HeroTextBox>
        <HeroImgBox>
          <HeroImg src={"/static/assets/donilabherohomeImg.jpg"} />
        </HeroImgBox>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero;
