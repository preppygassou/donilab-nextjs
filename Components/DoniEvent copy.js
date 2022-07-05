import React, { useRef, useState } from 'react'
import styled,{css} from 'styled-components';
import { EventData } from '../services/data/EventData';
import ArrowLeftIcon from "/static/assets/svg/arowleft.svg"
import ArrowRighthIcon from "/static/assets/svg/arowright.svg"
import Slider from "react-slick";
import DoniEventContent from './DoniEventContent';




const DoniEventContainer = styled.section`
height:100vh;
 max-height:1100px;
 position:relative;
 overflow:hidden;
`;

const DoniEventSection = styled.section`

overflow:hidden;
 .slick-slider{
  position: relative;
    height: 60vh;

 }


 .slick-list{

  width:auto !important;
  
    
    height: auto !important;
 }
 .slick-track{

    width:auto !important;
    
    
 }


 .slick-slide {
   width:auto !important;
}
.slick-dots {
    display: flex !important;
   justify-content:center;
   z-index:10;
   list-style-type: none;
position: absolute;
bottom: 13%;
left: 0;
right: 0;
}
 .slick-dots .slick-active button{
   background-color:#2755A1;
   color:#2755A1;
}
 .slick-dots button{
   border-radius:50%;
   padding:1vh;
   color:#F0F0F0;
   border:none;
   margin:1vh;
   width:22px;
   height: 22px;
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
const DoniEventSlider = styled.div `
width:1000px !important;
display:flex !important;
background-color:#95B71D;
border-radius:20px;
`;
const DoniEventHead = styled.div `
h1{
  font-family:"Cera Round Pro";
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin:5vh 0;
  text-align:center;
  color:#2755A1;
}
`;
const EventContent = styled.div `
width: 50%;
display:flex;

flex-direction:column;
justify-content:space-evenly;
color:#fff;
padding:3.5vh;
/* position:relative;
z-index:10 ;
display: flex;
flex-direction:column;
max-width:1600px;
width: calc(100%-100px);
color:#fff; */
/* h1{
  font-size: clamp(1rem, 8vw, 2rem);
  font-weight:400;
  text-transform:uppercase;
  text-align: left;
  margin-bottom:0.8rem;
  }
  p{
    margin-bottom:1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  } */
`;

const SliderButtons =styled.div `


`;
const EventImage =styled.div `
height:100% ;
width: 50%;

/* position:absolute;
top:0;
left:0;
width:100vw;
height: 100vh;
object-fit:cover; */

img{
  object-fit:cover;
  width:100%;
  height:100%;
  border-radius: 0px 10px 13px 0px;
}

`;

const arrowButton = css`
z-index:10;
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
left: 0;

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
   /*  speed: 500, */
    slidesToShow: 1,
   
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: 'EventSlider',
      slide:'<>',   
      
  };

  return (
    <DoniEventSection>
        <DoniEventHead>
        <h1>Nos évènements</h1>
        </DoniEventHead>
      {/*   <DoniEventContainer>

          <DoniEventWrapper> */}
                 
          <Slider {...settings}>
          {  EventData.map((event,index)=>(
            <DoniEventSlider key={index}>  
              <DoniEventContent event={event}/>
            </DoniEventSlider>
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

/* export default DoniEvent */
