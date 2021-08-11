import React, { useContext, useEffect, useRef, useState } from 'react'
import styled,{css} from 'styled-components/macro';
import { EventData } from '../data/EventData';
import ArrowLeftIcon from "./../assets/svg/arowleft.svg"
import ArrowRighthIcon from "./../assets/svg/arowright.svg"
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { eventimage, listevents } from '../actions/EventActions';
import DoniEventContent from './DoniEventContent';
import Loading from './Loading';
import MessageBox from './MessageBox';
import Dots from './Dots';
import { CurrentLangContext } from '../Context/CurrentLangContext';
import { useTranslation } from 'react-i18next';




const DoniEventContainer = styled.section`
 position:relative;
 overflow:hidden;
 margin:0 auto;
 width:1000px;
 z-index:1; 
 height:50vh ;
@media (max-width:768px){
 width:100%;
 height:100% ;

}
`;

const DoniEventSection = styled.section`
height:70vh;
margin-bottom:2vh;
overflow:hidden;
@media (max-width:768px){
 height:100vh ;
}

`;

const DoniEventWrapper = styled.div`
position:relative;
width:1300px;
height:55vh;
margin:0 auto;
@media (max-width:768px){
 width:80%;
height:100%;


}
`;

const DoniEventSlide = styled.div `
z-index:1;
width:100%;
height:100%;
`;

const DoniEventHead = styled.div `
h1{
  font-family:"Montserrat";
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin:5vh 0;
  text-align:center;
  color:#2755A1;
}
`;


const SliderButtons =styled.div `


`;
const SliderDots =styled.div `
width: 100%;
position:absolute;
bottom:0;
`;


const arrowButton = css`
z-index:10;
width: 80px;
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
left: 0;

`;

const NextArrow = styled.img`
${arrowButton}
right: 0;
`;



export default function DoniEvent() {
  const {t} = useTranslation()
  const eventList = useSelector((state )=> state.eventList);
  const {loading,error,events} = eventList;
  const [current, setCurrent] = useState(0);
 const length = events.length;
 const timeout = useRef(null);
 const value = useContext(CurrentLangContext);
  const {currentLang} = value
const dispatch = useDispatch()


 useEffect(() => {
  dispatch(listevents(currentLang))
 }, [dispatch,currentLang])

 useEffect(() => {
  const nextSlide = ()=>{
    setCurrent(current=>(current === length -1 ? 0 : current +1 ))
  };
  timeout.current = setTimeout(nextSlide,3000);
  return function(){
    if (timeout.current){
      clearTimeout(timeout.current)
    }
  }
 }, [current,length])

  const nextSlide = ()=>{
    if (timeout.current){
      clearTimeout(timeout.current)
    }
  
     setCurrent(current=== length - 1 ? 0 : current + 1)
   }
   const prevSlide = ()=>{
    if (timeout.current){
      clearTimeout(timeout.current)
    }
     setCurrent(current=== 0 ? length -1 : current  - 1)
   }
    
   if(!Array.isArray(events)||events.length <=0){
     return null;
   }

 

  return (
    <DoniEventSection>
        <DoniEventHead>
        <h1>{t("nos")} {t("eventitile")}</h1>
        </DoniEventHead>
     
          {  
            loading ? <Loading></Loading> : error ? <MessageBox>erreur de chargement</MessageBox>:
            <DoniEventWrapper >
        <DoniEventContainer>
          {events.map((event,index)=>(  
            <DoniEventSlide key={index}> 
            {index === current && (                 
              <DoniEventContent  event={event}/> 
              )
        }
              </DoniEventSlide>  
                       
             ))}
                 
        
     </DoniEventContainer>
     <SliderButtons>
        <PrevArrow src={ArrowLeftIcon} onClick={prevSlide}/>
        <NextArrow src={ArrowRighthIcon} onClick={nextSlide}/>
      </SliderButtons>
     <SliderDots>
      <Dots slides={events} activeIndex={current}></Dots>
     </SliderDots>
     </DoniEventWrapper>
      } 
    </DoniEventSection>
  )
}

