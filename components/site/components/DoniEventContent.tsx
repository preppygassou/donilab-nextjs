import React from 'react'
import styled, { css } from 'styled-components';
import { useParams } from 'next/navigation';


const DoniEventSlider = styled.div`
/* position:absolute;
top:0; */

width:100%;
min-height: 100%;
border-radius:20px;
overflow: hidden;
position: relative;
display: grid;
align-items:center;
grid-template-columns:52% 48% ;
z-index: 1;
background-color:#95B71D;
box-shadow: 0 0 10px 0 rgba(0,0,0,.15);
border: 0 solid #818a91;
-webkit-transition: all .25s;
-o-transition: all .25s;
transition: all .25s;
@media (max-width:768px){
display:flex;
flex-direction:column-reverse;
}

/* &::before{
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
} */
.donilab-event_content{
  display:flex;
/* background-color:#95B71D; */
flex-direction:column;
/* justify-content:space-evenly; */

align-content:center;
color:#fff;
padding:3rem 1rem 3rem 2rem;
width:100%;
height: 100%;
border-radius: 10px 0 0 10px;
}

.donilab-event_tittle h3{
  font-size:24px;
  font-weight: 700;
  text-transform:uppercase
}
.donilab-event_description{
 
}
.donilab-event_description p{
  word-wrap: break-word;
    font-size:15px;
}
`;

const EventContent = styled.div`

@media (max-width:768px){
/*   height: 75vh;
padding:2vh;
border-radius: 0; */


}
`;

const EventImage = styled.div`
/* padding-bottom: calc( 0.66 * 100% );
position: relative;
transform-style: preserve-3d;
-webkit-transform-style: preserve-3d;
top: 0;
left: 0;
right: 0;
bottom: 0;
overflow: hidden; */
max-width: 100%;
height: 100%;
img {
  object-fit: cover;
  max-width: 100%;
  height: 100%;
/* position: absolute;
top: calc(50% + 1px);
left: calc(50% + 1px);
transform: scale(1.01) translate(-50%,-50%);
transition: filter .3s;
transition: filter .3s,-webkit-filter .3s; */
border: none;
border-radius: 0;
box-shadow: none;
}

`;


function DoniEventContent({ event }) {

  const params = useParams<{ locale: string; }>()
  const { locale} = params;


  return (

    <DoniEventSlider className='donilab-event_card'>
      <EventContent className='donilab-event_content'>
        <div className="donilab-event_tittle">
          <h3>{event.title[locale]}</h3>
        </div>
        <div className="donilab-event_description">
          {event.description[locale]}
        </div>
      </EventContent>
      <EventImage className='donilab-event_thumnail' /* style={{backgroundImage:`url("${event.fimg_url}")`}} */>
        <img src={event.featured_media.url} alt={event.title[locale]} />

      </EventImage>
    </DoniEventSlider>
  )
}

export default DoniEventContent
