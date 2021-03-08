import React, { useEffect, useRef, useState } from 'react'
import styled,{css} from 'styled-components/macro';
import { EventData } from '../data/EventData';
import ArrowLeftIcon from "./../assets/svg/arowleft.svg"
import ArrowRighthIcon from "./../assets/svg/arowright.svg"
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { eventimage, listevents } from '../actions/EventActions';
import DoniEventContent from './DoniEventContent';




const DoniEventContainer = styled.section`
height:100vh;
 max-height:1100px;
 position:relative;
 overflow:hidden;
`;

const DoniEventSection = styled.section`
height:70vh;
overflow:hidden;
 .slick-slider{
  margin: 30px auto 50px;
  position: relative;
 }
 .slick-slider .slick-list{
  position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 60vh !important;
 }
 .slick-slider .slick-track{
  position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 1000px !important;
    
 }
 .slick-slider .slick-track:after{
  clear: both;
 }
 .slick-slider .slick-track:after, .slick-track:before {
   
    content: "";
}
 
 .slick-slider .slick-track{
  position: relative;
 }
 .slick-slider .slick-initialized .slick-slide {
    width:1000px !important;
    height: 60vh;
}
 .slick-slider .slick-dots {
    display: flex !important;
   justify-content:center;
   z-index:10;
   list-style-type: none;
position: absolute;
bottom: 15%;
left: 0;
right: 0;
}
 .slick-slider .slick-dots .slick-active button{
   background-color:#2755A1;
   color:#2755A1;
}
 .slick-slider .slick-dots button{
   border-radius:50%;
   padding:1vh;
   color:#F0F0F0;
   border:none;
   margin:1vh;
   width:15px;
   height: 15px;
   font-size: 1px;
   content: attr(data-unfollow);
}

`;

const DoniEventWrapper = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
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


const arrowButton = css`
z-index:10;
width: 80px;
cursor:pointer;
position: absolute;
top: 20%;
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
left: 25px;

`;

const NextArrow = styled.img`
${arrowButton}
right: 0;
`;


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <NextArrow
    src={ArrowRighthIcon}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <PrevArrow
      src={ArrowLeftIcon}
      onClick={onClick}
    />
  );
}


export default function DoniEvent() {
  const [current, setCurrent] = useState(0);
 const length = EventData.length;
 const timeout = useRef(null);
 const eventList = useSelector((state )=> state.eventList);
 const {loading,error,events} = eventList;
const dispatch = useDispatch()

 useEffect(() => {
  dispatch(listevents())
 }, [dispatch])

 /* useEffect(() => {
  const nextSlide = ()=>{
    setCurrent(current=>(current === length -1 ? 0 : current +1 ))
  };
  timeout.current = setTimeout(nextSlide,3000);
  return function(){
    if (timeout.current){
      clearTimeout(timeout.current)
    }
  }
 }, [current,length]) */

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
    
   if(!Array.isArray(EventData)||EventData.length <=0){
     return null;
   }

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: 'EventSlider',
      swipeToSlide: true,
      variableWidth: true,
  };

  return (
    <DoniEventSection>
        <DoniEventHead>
        <h1>Nos évènements</h1>
        </DoniEventHead>
      {/*   <DoniEventContainer>

          <DoniEventWrapper> */}

                 
          <Slider {...settings}>
          {  
          loading ? <div>chargement ...</div> : error ? <div>erreur de chargement</div> :
          events.map(event=>(
            
              <DoniEventContent key={event.id} event={event}/>
             
             ))
            }
          </Slider>
             

        {/* {
          EventData.map((event,index)=>(
        <DoniEventSlide key={index}>
            {index === current && (
            <DoniEventSlider >
              <EventImage src={event.image} alt={event.title}/>
              <EventContent>
              <h1>{event.title}</h1>
              <p>{event.description}</p>
              </EventContent>
             <div>
               <img src={event.image} alt=""/>
             </div>
            </DoniEventSlider>
            )}
        </DoniEventSlide>
         ))
        } */}
       {/*  </DoniEventWrapper>
        </DoniEventContainer> */}
     
    </DoniEventSection>
  )
}

