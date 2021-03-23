import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
//import DonilabHeroImg from "./../../assets/heroimage.png";
import HeroDonilabImg from "./../../assets/programhero.png";
import CircleHeroImg from "./../../assets/rhome1.png";
import LogoProgram from "./../../assets/logoprogram.png";
//import CircleHeroInImg from "./../../assets/cercleblanc.svg";
import parse from "html-react-parser";
import Dots from '../Dots';

const HeroProgramSection = styled.section`
overflow:hidden;
 height:78vh;
 background-color:#EFEFEF;
`;

const HeroProgramWrapper = styled.div`
width:100%;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
height:78vh;
@media (max-width: 768px) {
 flex-wrap:wrap-reverse;
}

@media (max-width: 768px) {
  flex-wrap:wrap-reverse;
}

`;

const HeroProgramTextBox = styled.div`
background-color:#2755A1;
width:100%;
height:100%;
z-index:1;
display:flex;
align-items:center;

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
  width:90px;
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

const HeroProgramInfo = styled.div`

margin:0 8vh;
@media (min-width: 769px) and (max-width: 1024px) {
  margin-left:6vh;
  p{
    padding-right:2rem;
  }
}
 
h1,span,h3{
  font-family:"CeraRoundPro-Bold";
}
`;
const HeroProgramImgarc = styled.img`
height:330px;
`;

const HeroProgramSlideWrapper = styled.div`
position:relative;
 overflow:hidden;
 width:100%;
 z-index:1; 
 height:100%;
`;
const HeroProgramSlide = styled.div`
z-index:1;
width:100%;
height:100%;

`;
const HeroProgramSlider = styled.div`
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
const HeroProgramSliderImg = styled.div`
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


function HeroProgram({ program }) {
  const [current, setCurrent] = useState(0);
  const length = program.acf.galerie_programme.length;
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


  if (!Array.isArray(program.acf.galerie_programme) || program.acf.galerie_programme.length <= 0) {
    return null;
  }

  return (
    <HeroProgramSection>
      <HeroProgramWrapper>
        <HeroProgramTextBox>
          <HeroProgramImgarc src={CircleHeroImg} />
          <HeroProgramInfo>
            <img src={program.acf.logo_en_png_ou_svg.url} alt="" />
            <h1>
              {program.title.rendered}
            </h1>
            <h3>
              État du projet : <span>{program.acf.etat}</span>
            </h3>
            <h3>
              DURÉE : <span>{program.acf.duree_du_programme}</span>
            </h3>
            {parse(program.content.rendered)}

            {/* dangerouslySetInnerHTML={{ __html: program.content.rendered }}  */}

          </HeroProgramInfo>
        </HeroProgramTextBox>
        <HeroProgramSlideWrapper>
          {
            program.acf.galerie_programme.map((image, index) => (
              <HeroProgramSlide key={index}>
                {index === current && (
                  <HeroProgramSlider>
                    <HeroProgramSliderImg style={{ backgroundImage: `url("${image.url}")` }}>
                    </HeroProgramSliderImg>
                  </HeroProgramSlider>
                )}
              </HeroProgramSlide>
            ))
          }

          <SliderDots>
            <Dots slides={program.acf.galerie_programme} activeIndex={current}></Dots>
          </SliderDots>
        </HeroProgramSlideWrapper>
      </HeroProgramWrapper>
    </HeroProgramSection>
  )
}

export default HeroProgram;
