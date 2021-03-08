import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
//import DonilabHeroImg from "./../../assets/heroimage.png";
import HeroDonilabImg from "./../../assets/herohubimg.png";
import CircleHubHeroImg from "./../../assets/svg/CircleHeroHUb.svg";
//import CircleHeroInImg from "./../../assets/cercleblanc.svg";
import parse from "html-react-parser";
import { useDispatch, useSelector } from 'react-redux';
import { hubimage } from '../../actions/HubActions';

const HeroHubSection = styled.section`
 height:78vh;
 background-color:#EFEFEF;
 overflow:hidden;
`;

const HeroHubWrapper = styled.div`
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

const HeroHubTextBox = styled.div`
position:absolute;
flex: 1;
background-color:#95B71D;
width:80vh;
z-index:1;
display:flex;
align-items:center;
height:78vh;
padding:0 10rem;

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

img {
 
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
  margin:1rem 0;
}

h3{
  margin:1rem 0;

color:#fff;
font-size:2rem;
}
h3 span {
font-family:"Montserrat Alternates";
font-size:1.2rem;
}

@media (max-width: 768px) {
  h1{
   
    font-size: 2.50rem;
  }
  p{
    font-size:1rem !important;
  }
}
 
@media (min-width: 769px) and (max-width: 1024px) {
  h1{
   
   font-size: 2rem;
 }
 p{
   font-size:1rem ;
 }
}
 

p{
  color:#fff;
  font-size:1rem;
  
  margin-top:2px;

  font-weight: 500;
letter-spacing: -0.01em;
line-height: 1.32;

}
`;

const HeroHubInfo = styled.div`
flex: 1;
margin-left:8vh;
@media (min-width: 769px) and (max-width: 1024px) {
  margin-left:6vh;
}
 
h1,span,h3{
  font-family:"CeraRoundPro-Bold";
}
`;
const HeroHubImgarc = styled.img`
position:absolute;
top:0;
left:0;
`;

const HeroHubImgBox = styled.div`

object-fit:cover;

@media (max-width: 768px) {
  width:120vh;
  height:39vh;
}


`;
const HeroHubImg = styled.img`
width: 100vw;

`;
const HeroHubInImgarc = styled.img`
position:absolute;
top:0;
right: 61vh;
`;


function HeroHub({ hub }) {

  const hubImage = useSelector((state) => state.hubImage);
  const { loading, error, image } = hubImage;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hubimage(hub.featured_media))
  }, [dispatch, hub.featured_media])


  return (
    <HeroHubSection>
      <HeroHubWrapper>
        <HeroHubTextBox>
          <HeroHubImgarc src={CircleHubHeroImg} />
          <HeroHubInfo>

            <h1>
              {hub.title.rendered}
            </h1>
            {
              parse(hub.content.rendered)
            }

          </HeroHubInfo>
        </HeroHubTextBox>
        <HeroHubImgBox>
        <HeroHubImg src={hub.fimg_url} alt={hub.title.rendered} />
        </HeroHubImgBox>
      </HeroHubWrapper>
    </HeroHubSection>
  )
}

export default HeroHub
