import React,{useState,useRef, useEffect} from 'react'
import styled from 'styled-components/macro'
import DonilabHeroImg from "./../assets/heroimage.png"
import HeroDonilabImg from "./../assets/herodonilab.png"
import CircleHeroImg from "./../assets/rhome1.png"
import CircleHeroInImg from "./../assets/cercleblanc.svg"

const HeroSection = styled.section`
overflow:hidden;
 height:78vh;
 background-color:#EFEFEF;
`;

const HeroWrapper = styled.div`
width:100%;
display:flex;
align-items:center;
height:78vh;
@media (max-width: 768px) {
 flex-wrap:wrap-reverse;
}

@media (max-width: 768px) {
  flex-wrap:wrap-reverse;
}

`;

const HeroTextBox = styled.div`
flex: 1;
background-color:#2755A1;
width:55vw;
z-index:1;
display:flex;
align-items:center;
height:78vh;

@media (max-width: 768px) {
  width:100%;
  height:39vh;
}

@media screen and (min-width:803px) and (max-width:1180px) {
  
}
@media screen and (min-width:803px) and (max-width:1180px) {
  
}
@media (max-width: 768px) {
  width:100%;
}

.colorgreen{
  color:#95B71D;
}

h1 {
  display:flex;
  font-family:"CeraRoundPro-Bold";
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
    font-size:1.5rem !important;
  }
}
 
@media (min-width: 769px) and (max-width: 1024px) {
  h1{
   
   font-size: 2rem;
 }
 p{
   font-size:1.5rem ;
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
flex: 1;
margin-left:8vh;
@media (min-width: 769px) and (max-width: 1024px) {
  margin-left:6vh;
}
 
h1,span{
  font-family:"CeraRoundPro-Bold";
}
`;
const HeroImgarc = styled.img`
height:330px;
`;

const HeroImgBox = styled.div`

@media (max-width: 768px) {
  width:100%;
  height:39vh;
}
width:45vw;


height:78vh;

`;
const HeroImg = styled.img`

object-fit:cover;
`;
const HeroInImgarc = styled.img`
position:absolute;
top: -30vh;
right: 61vh;
`;


function Hero({slides}) {

 
  return (
      <HeroSection>
        <HeroWrapper>     
      <HeroTextBox>
     <HeroImgarc src={CircleHeroImg} />
     <HeroInfo>
       <h1>
       facej
       </h1>
       <h2>État du projet : <span>En cours</span></h2>
       <h2>DURÉE : <span>3,5 ans</span></h2>
       <p>
       Le Fonds d’appui à la création d’entreprise par les jeunes/FACEJ est créé par l’Ambassade du Danemark et mis en œuvre par un gestionnaire de fonds (le consortium PLAN-BØRNEfonden et Swisscontact).
       </p>
     </HeroInfo>
      </HeroTextBox>
      <HeroImgBox>
        {/* <HeroInImgarc src={CircleHeroInImg}/> */}
        <HeroImg src={HeroDonilabImg}/>
      </HeroImgBox>
        </HeroWrapper>
      </HeroSection>
  )
}

export default Hero;
