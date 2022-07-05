import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
//import DonilabHeroImg from "././static/assets/heroimage.png";
import HeroDonilabImg from "././static/assets/herohubimg.png";
import CircleHubHeroImg from "././static/assets/svg/CircleHeroHUb.svg";
//import CircleHeroInImg from "././static/assets/cercleblanc.svg";
import parse from "html-react-parser";
import { useDispatch, useSelector } from 'react-redux';
import { hubimage } from '../../store/actions/HubActions';
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
grid-template-columns:45% 55%;
align-items:center;
height:78vh;
@media (max-width: 900px) {
 display:flex;
 flex-direction:column-reverse;
height:100%;

}


`;

const HeroHubTextBox = styled.div`
background-color:#95B71D;
width:100%;
z-index:1;
display:flex;
align-items:center;
height:100%;
padding:0 8rem;

@media (max-width: 1199px) {
  padding:0 3rem;

}

@media (max-width: 768px) {
padding:0 2rem;

  h1{
   
    font-size: 2rem;
  }
  p{
    font-size:.9rem;
  }
}

@media (max-width: 500px) {
padding:2rem 1rem;

  h1,h3{
   
    font-size: 1.5rem;
  }
  p{
    font-size:.8rem;
  }
}


img {
 
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
   
    font-size: 2rem;
  }
  p{
    font-size:0.9rem ;
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

margin-left:6vh;

@media (max-width: 1199px) {
  padding:0 5rem;
  margin-left:2vh;


}
@media (max-width: 900px) {
 margin-left:1vh;
 padding:0 2rem;


}
@media (max-width: 768px) {
 padding:0 1rem;


}
 
h1,span,h3{
  font-family:"Cera Round Pro";
}
`;
const HeroHubImgarc = styled.img`
position:absolute;
top:0;
left:0;
@media (max-width: 1199px) {
  width:200px;

}
@media (max-width: 900px) {
 display:none;

}
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
