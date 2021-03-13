import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components/macro';
import { eventimage } from '../actions/EventActions';
import parse from 'html-react-parser'
import Carousel from '@brainhubeu/react-carousel';



const EventContent = styled.div`
display:flex;
background-color:#95B71D;
flex-direction:column;
justify-content:space-evenly;
color:#fff;
padding:3.5vh;
width:100%;
height: 100%;
border-radius: 10px 0 0 10px;
`;

const EventImage = styled.div`
background: no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width:100%;
height: 100%;
  border-radius: 0px 10px 13px 0px;

`;

const DoniEventSlider = styled.div `
position:absolute;
top:0;
width:100%;
height: 100%;
display: grid;
align-items:center;
grid-template-columns:1fr 1fr;

&::before{
  content:'';
  z-index:2;
  position:absolute;
top:0;
left:0;
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

function DoniEventContent({ event }) {
  const eventImage = useSelector((state) => state.eventImage);
  const { loading, error, image } = eventImage;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(eventimage(event.featured_media))
  }, [dispatch, event.featured_media])

  return (

        <DoniEventSlider>
       <EventContent>
        <h1>{event.title.rendered}</h1>
        {parse(event.content.rendered)}
      </EventContent>
      <EventImage style={{backgroundImage:`url("${event.fimg_url}")`}}>
     {/*  <img src={event.fimg_url} alt={event.title.rendered} /> */}
      {/*   {
          loading ? <img src="https://via.placeholder.com/850" alt={event.title} /> : error ?
            <img src="https://via.placeholder.com/850" alt={event.title} /> :
            <img src={event.fimg_url} alt={event.title.rendered} />
        } */}
      </EventImage>
      </DoniEventSlider>
  )
}

export default DoniEventContent
