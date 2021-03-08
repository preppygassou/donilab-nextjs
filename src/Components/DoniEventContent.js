import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components/macro';
import { eventimage } from '../actions/EventActions';
import parse from 'html-react-parser'




const EventContent = styled.div`
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
const EventImage = styled.div`
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

const DoniEventSlider = styled.div `
width:1000px !important;

display:flex !important;
background-color:#95B71D;
border-radius:20px;
position:absolute;
top:0;
left:0;


/* position:absolute;
top:0;
left:0;
width:100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
&::before{
  content:'';
  position:absolute;
  z-index:2;
  width:100%;
  height: 100%;
  bottom:0vh;
  left:0;
  overflow:hidden;
  opacity: 0.4;
  background:linear-gradient(0deg,
  rgba(0, 0, 0, 0.2) 0%,
  rgba(0, 0, 0, 0.2) 50%,
  rgba(0, 0, 0, 0.6) 100%,
  );
} */
`;

function DoniEventContent({ event }) {
  const eventImage = useSelector((state) => state.eventImage);
  const { loading, error, image } = eventImage;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(eventimage(event.featured_media))
  }, [dispatch, event.featured_media])

  return (
    <DoniEventSlider key={event.id}>
      <EventContent>
        <h1>{event.title.rendered}</h1>
        {parse(event.content.rendered)}
      </EventContent>
      <EventImage>
      <img src={event.fimg_url} alt={event.title.rendered} />
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
