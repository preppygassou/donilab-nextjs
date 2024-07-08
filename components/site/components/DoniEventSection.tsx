import React, { useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components';
import DoniEventContent from './DoniEventContent';
import MessageBox from './MessageBox';
import Dots from './Dots';
import { EventContext } from '../../../services/event/event.context';
import { CurrentLangContext } from '~/Context/CurrentLangContext';
import { useParams, useRouter } from 'next/navigation';




const DoniEventContainer = styled.section`


position:relative;
width:900px;
height:50vh;
margin:0 auto;
@media (max-width:768px){
 width:80%;
height:100%;


}
`;

const DoniEventSection = styled.section`

margin-top:6rem;
margin-bottom:2vh;
/* overflow:hidden; */

.donilab-event_container{
  position:relative;
  max-width: 800px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width:768px){
 width:80%;

}
}
.donilab-carousel-row{
  display: flex;
  flex-wrap: wrap;
  /* margin-right: -15px;
  margin-left: -15px; */
}
`;

const DoniEventWrapper = styled.div`
/* position:relative;
width:900px;
height:50vh;
margin:0 auto;
@media (max-width:768px){
 width:80%;
height:100%;


} */
`;

const DoniEventSlide = styled.div`
z-index:1;
width:100%;
height:100%;
`;

const DoniEventHead = styled.div`
text-align:center;
/* h1{
  font-family:"Montserrat";
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align:center;
  color:#2755A1;
} */

h1{
  margin:5vh 0;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
  color:#2755A1;
  /* display:flex;
  justify-content:center;
  align-items:center; */
}
`;


const SliderButtons = styled.div`


`;
const SliderDots = styled.div`
width: 100%;
margin:2rem 0;
/* position:absolute;
bottom:0; */
`;


const arrowButton = css`
z-index:10;
width: 65px;
@media (max-width:768px){
  width: 60px;
}
cursor:pointer;
position: absolute;
top: 38%;
padding:10px;
margin-right:1rem;
user-select:none;
transition:0.3s;
&:hover{

transform:scale(1.05);
}
`;

const PrevArrow = styled.img`
${arrowButton}
left: -150px;
@media (max-width:1200px){
  left: -50px;
}
@media (max-width:885px){
  left: 0;
}
@media (max-width:768px){
  left: -50px;
}
`;

const NextArrow = styled.img`
${arrowButton}
right: -150px;
@media (max-width:1200px){
  right: -65px;
}
@media (max-width:885px){
  right: 0;
}
@media (max-width:768px){
  right: -65px;
}

`;



export default function DoniEvent({events}) {
  

  const [current, setCurrent] = useState(0);
  const length = events.length;
  const timeout = useRef(null);
  const params = useParams<{ locale: string; }>()
  const { locale} = params;


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

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(events) || events.length <= 0) {
    return null;
  }



  return (
    <DoniEventSection>
      <DoniEventHead>
        <h1>{locale==="en"? "OUR EVENTS":"NOS ÉVÈNEMENTS"}</h1>
      </DoniEventHead>

      {
     
          <div className="donilab-event_container">
            <div className='donilab-carousel-row'>
              {events.map((event, index) => (
                <>
                  {index === current && (
                    <DoniEventContent key={index} event={event} />
                  )
                  }

                </>
              ))}
               <SliderButtons>
              <PrevArrow src={"/assets/svg/arowleft.svg"} onClick={prevSlide} />
              <NextArrow src={"/assets/svg/arowright.svg"} onClick={nextSlide} />
            </SliderButtons>
            <SliderDots>
              <Dots slides={events} activeIndex={current}></Dots>
            </SliderDots>
            </div>
            {/* <DoniEventWrapper>
            <DoniEventContainer>
              {events.map((event, index) => (
                <DoniEventSlide key={index}>
                  {index === current && (
                    <DoniEventContent event={event} />
                  )
                  }
                </DoniEventSlide>

              ))}


            </DoniEventContainer>
           
          </DoniEventWrapper> */}
          </div>

      }
    </DoniEventSection>
  )
}

