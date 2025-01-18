import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import parse from "html-react-parser";
import Dots from '../site/components/Dots';
import { useParams, useRouter } from 'next/navigation';

const HeroProgramSection = styled.section`
overflow:hidden;
 height:78vh;
 background-color:#EFEFEF;
/*  @media (max-width: 900px) {
height:100%;
} */
`;

const HeroProgramWrapper = styled.div`
width:100%;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
height:78vh;
@media (max-width: 900px) {
  display:flex;
  flex-direction:column-reverse;
 /* flex-wrap:wrap-reverse; */
height:100%;

}

/* @media (max-width: 768px) {
  flex-wrap:wrap-reverse;
} */

`;

const HeroProgramTextBox = styled.div`
background-color:#2755A1;
width:100%;
height:100%;
z-index:1;
display:flex;
align-items:center;

@media (max-width:430px) {
 padding:2rem 0;
}


img {
  width:150px;
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

@media(max-width: 1024px) {
  h1{
   
   font-size: 2rem;
 }
 p{
   font-size:1rem ;
 }
}

@media (max-width: 768px) {
  h1{
   
    font-size: 2rem;
  }
  p{
    font-size:.9rem;
  }
}

@media (max-width: 500px) {
  h1,h3{
   
    font-size: 1.5rem;
  }
  p{
    font-size:.8rem;
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
@media (max-width: 1024px) {
  margin-left:6vh;
  p{
    padding-right:2rem;
  }
}
 
h1,span,h3{
  font-family:"Cera Round Pro";
}
`;
const HeroProgramImgarc = styled.img`
height:330px;
@media (max-width: 9004px) {
  height:290px;
}
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
  const length = program?.galerie.length;
  const timeout = useRef(null);
  const params = useParams()
  const { locale } = params;


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


  if (!Array.isArray(program?.galerie) || program?.galerie.length <= 0) {
    return null;
  }
  const statusTranslations = {
    'FINISHED': 'TERMINÉ',
    'IN PROGRESS': 'EN COURS',
    'OPEN': 'OUVERT',
    'REOPEN': 'RÉOUVERT',
    'CLOSE': 'FERMÉ'
  };
  return (
    <HeroProgramSection>
      <HeroProgramWrapper>
        <HeroProgramTextBox>
          <HeroProgramImgarc src={"/assets/rhome1.png"} />
          <HeroProgramInfo>
            <img src={program?.logo.url} alt="" />
            <h1>
              {program.title[locale]}
            </h1>
            <h3>
              {locale === "en" ? "Status of the project :" : "État du projet : "}

              <span> {


                locale === 'fr' ? statusTranslations[program?.status] : program?.status
              }</span>

            </h3>
            <h3>
              {locale === "en" ? "DURATION :" : "DURÉE : "}
              <span>{program?.duration[locale]}</span>
            </h3>
            {program.description[locale]}

            {/* dangerouslySetInnerHTML={{ __html: program.content.rendered }}  */}

          </HeroProgramInfo>
        </HeroProgramTextBox>
        <HeroProgramSlideWrapper>
          {
            program?.galerie.map((image, index) => (
              <HeroProgramSlide key={index}>
                {index === current && (
                  <HeroProgramSlider>
                    <HeroProgramSliderImg style={{ backgroundImage: `url(${image.url})` }}>
                    </HeroProgramSliderImg>
                  </HeroProgramSlider>
                )}
              </HeroProgramSlide>
            ))
          }

          <SliderDots>
            <Dots slides={program?.galerie} activeIndex={current}></Dots>
          </SliderDots>
        </HeroProgramSlideWrapper>
      </HeroProgramWrapper>
    </HeroProgramSection>
  )
}

export default HeroProgram;
