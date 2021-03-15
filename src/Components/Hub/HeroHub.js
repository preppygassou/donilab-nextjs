import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
//import DonilabHeroImg from "./../../assets/heroimage.png";
import HeroDonilabImg from "./../../assets/herohubimg.png";
import CircleHubHeroImg from "./../../assets/svg/CircleHeroHUb.svg";
//import CircleHeroInImg from "./../../assets/cercleblanc.svg";
import parse from "html-react-parser";
import { useDispatch, useSelector } from 'react-redux';
import { hubimage } from '../../actions/HubActions';
import Dots from '../Dots';

const HeroHubSection = styled.section`
 height:78vh;
 background-color:#EFEFEF;
 overflow:hidden;
 position:relative;
`;

const HeroHubWrapper = styled.div`
width:100%;
display:grid;
grid-template-columns:40% 60%;
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
background-color:#95B71D;
width:100%;
z-index:1;
display:flex;
align-items:center;
height:100%;
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

const HeroHubSlideWrapper = styled.div`
position:relative;
 overflow:hidden;
 width:100%;
 z-index:1; 
 height:100%;
`;
const HeroHubSlide = styled.div`
z-index:1;
width:100%;
height:100%;

`;
const HeroHubSlider = styled.div`
  width:100%;
height: 100%;
position:absolute;
top:0;

&::before{
  content:'';
  z-index:2;
  position:absolute;
  top:0;
width:100%;
height: 100%;
  overflow:hidden;
  opacity: 0.4;
  background:linear-gradient(0deg,
  rgba(0, 0, 0, 0.2) 0%,
  rgba(0, 0, 0, 0.2) 50%,
  rgba(0, 0, 0, 0.6) 100%,
  );
}
`;
const HeroHubSliderImg = styled.div`
background: no-repeat center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width:100%;
height: 100%;

`;
const SliderDots = styled.div`
position:absolute;
bottom:20px;
width:100%;
`;
const HeroHubInImgarc = styled.img`
position:absolute;
top:0;
right: 61vh;
`;


function HeroHub({ hub }) {
  const [current, setCurrent] = useState(0);
  const length = hub.acf.galerie.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    };
    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])


  if (!Array.isArray(hub.acf.galerie) || hub.acf.galerie.length <= 0) {
    return null;
  }

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
        <HeroHubSlideWrapper>
          {
            hub.acf.galerie.map((image, index) => (
              <HeroHubSlide key={index}>
                {index === current && (
                  <HeroHubSlider>
                    <HeroHubSliderImg style={{ backgroundImage: `url("${image.url}")` }}>
                    </HeroHubSliderImg>
                  </HeroHubSlider>
                )}
              </HeroHubSlide>
            ))
          }

          <SliderDots>
            <Dots slides={hub.acf.galerie} activeIndex={current}></Dots>
          </SliderDots>
        </HeroHubSlideWrapper>
      </HeroHubWrapper>
    </HeroHubSection>
  )
}

export default HeroHub
