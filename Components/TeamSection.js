import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { TeamData } from '../services/data/TeamData';
import SectionTitle from "./SectionTitle"
import Slider from "react-slick";
import CarouselCenter from './CarouselCenter'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useTranslation } from 'next-i18next';
import { useRouter } from '../node_modules/next/router';



const TeamSectionContainer = styled.section` 
overflow:hidden;
padding:5rem 0 0 0 ;
height: 100%;
background-color:#EFEFEF;
position: relative;


 ul {
  padding-bottom: 10vh !important;
 }
 .BrainhubCarouselItem {

  align-items:start;
 
}

 .team-slider{
/*   display: flex;
    justify-content: center; 
    align-content:center; */

    display:grid ;
grid-template-columns: 1fr;
align-items:center;
justify-items: center;
    position:relative;
   padding-top:12px;
    /* text-align: center; */
 }
 .team-slider .team-img{
  //display: inline-block;
  position: relative;
  /* z-index: 2; */
  width:190px;
height:190px;

  border-radius:50%;
 
/* background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77); */
}
.team-slider .team-img img {
filter: blur(4px);
-webkit-filter: blur(4px);
width:190px;
height:190px;
border-radius:50%;

}

.team-slider .team-img .team-loop{
border-radius:50%;
background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77);
width:190px;
height:190px;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
}
.team-slider .team-info {
  display:none;
}
.BrainhubCarouselItem--active{
  svg{
  width: calc(100% + 4px);
height: calc(100% + 4px);
position: absolute;
top: -2px;
left: -2px;
-webkit-transform: rotate(-90deg);
transform: rotate(-90deg);

}
}

.BrainhubCarouselItem--active > .team-slider{ 
 /*  display:flex;
  width:100%;
justify-content:center; */

padding-top:0;
/* width:350px; */
}
.BrainhubCarouselItem--active .team-slider .team-img .team-loop{
  display:none;
}

.BrainhubCarouselItem--active .team-slider .team-img{
  width:210px;
height:210px;
}

.BrainhubCarouselItem--active .team-slider .team-img img{
 filter: none;
-webkit-filter: none;
border:8px solid #95B71D;
width:210px;
height:210px;
}

.BrainhubCarouselItem--active .team-slider .team-info {
  display:block;
  text-align:center;
    color:#95B71D;

    .team-name{
 
 font-size:1.6rem;
 font-family:"Cera Round Pro";
 margin:1rem 0 .5rem 0;
 font-weight:bold;
}
.team-poste{
 font-size:1.1rem;
 font-weight:500;
}
}
/* .team-slider{
  display: flex;
    justify-content: center; 
    position:relative;
    text-align: center;
  
.team-img{
  display: inline-block;
  position: relative;
  z-index: 2;
  width:200px;
height:200px;
  border-radius:50%;
background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77);
}
.team-loop{
    border-radius:50%;
background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77);
width:200px;
height:200px;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
}
img {
filter: blur(4px);
-webkit-filter: blur(4px);
width:200px;
}
.team-info,.team-boder{
  display:none;
}

}

.BrainhubCarouselItem--active > .team-slider{
  
  display:flex;
  width:100%;
justify-content:center;
.team-img{
  position:relative;

border-radius:50%;
  border:8px solid #95B71D;
}
.team-loop{
  display:none;
}
.team-boder{
  display:block;
  border-radius:50%;
  border:8px solid #95B71D;
width:250px;
height:250px;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
}




img{
 width:250px;
 filter: none;
-webkit-filter: none;
}
svg{
  width: calc(100% + 4px);
height: calc(100% + 4px);
position: absolute;
top: -2px;
left: -2px;
-webkit-transform: rotate(-90deg);
transform: rotate(-90deg);

}
.team-info{
  display:block;
  position:absolute;
  bottom:-30%;
    text-align:center;
    color:#95B71D;
h1{
 
  font-size:1.6rem;
  margin:1rem 0 .5rem 0;
  font-weight:bold;
}
p{
  font-size:1rem;
}
}
} */
`;

const arrowButton = css`
cursor:pointer;
z-index:10;
margin-right:1rem;
user-select:none;
transition:0.3s;
&:hover{
transform:scale(1.05);
}
`;

const PrevArrow = styled.img`
${arrowButton}
position:absolute;
bottom: 12%;
right: 45%;
width: 55px;
left:45%;
@media (max-width:991px) {

left:40%;

}
@media (max-width:768px) {

left:30%;
}
/* @media (max-width:1199px) {
  bottom: 12%;
left:40%;
width: 50px;
}
@media (max-width:1199px) {
  bottom: 12%;
left:40%;
width: 50px;
}

@media (max-width:900px) {
  bottom: 12%;
left:30%;
width: 50px;
}
 */
`;
const NextArrow = styled.img`
${arrowButton}
position:absolute;
bottom: 12%;
right: 45%;
width: 55px;
@media (max-width:900px) {
  bottom: 12%;
right:40%;
}
@media (max-width:768px) {
 
right:30%;

}
/* @media (max-width:1199px) {
  bottom: 12%;
right:40%;
width: 50px;
}
@media (max-width:991px) {
  bottom: 12%;
right:30%;
width: 50px;
}

 */
/* @media (max-width:500px) {
  display:none;
} */
`;

const TeamhomeparalaxeFirst = styled.img`
display:${({ about, ishub }) => (ishub === "ishub" ? 'none' : about ? 'none' : 'block')};
position:absolute;
top:0;
right:0;
width:220px;

@media (max-width:768px) {
  width: 115px;
}
@media (max-width:500px) {
  display:none;
}
`;

const Hubteamparalaxe = styled.img`
display:${({ about, home }) => (home ? 'none' : about ? 'none' : 'block')};
position:absolute;
top:0;
right:0;
width:220px;
@media (max-width:768px) {
  width: 115px;
}
@media (max-width:500px) {
  display:none;
}
`;
const TeamhomeparalaxeTwo = styled.img`
display:${({ about, ishub }) => (about ? 'none' : ishub ? 'none' : 'block')};
position:absolute;
bottom:0;
left:0;
width:450px;
@media (max-width:991px) {
  left:-4rem;
  width: 400px;

}
@media (max-width:768px) {
  width: 115px;
}
@media (max-width:500px) {
  display:none;
}
`;

const HubTeamSectionHead = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:12vh 45vh;
color:#2755A1;
padding:12vh 30vh;
position:relative;
@media (max-width:900px){
  padding:12vh 20vh;

}
@media (max-width:768px){
  padding:12vh 10vh;

}
@media (max-width:360px){
  padding:12vh 4vh;

}

h1{
  font-family:"Cera Round Pro";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    @media (max-width:768px){
  font-size: 2rem;
  margin: 2vh 0;
       }
  @media (max-width:360px){
  font-size: 1.8rem;

}
}
p{
}
`;
const TeamInHubSectionIcon = styled.img`
width:100px;
@media (max-width:768px){
width: 80px;
}
`;

function TeamSection({ initialSlide, about, ishub, hub, home, children }) {
  const { locale } = useRouter()
  const [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(0);
  const length = TeamData.length;
  const timeout = useRef(null);
  const [value, setValue] = useState(0);

  const onChange = value => {
    //setValue(value);
    setCurrentIndex(value)
    
  }

  const nextSlide = (currentSlide) => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1)
    return currentSlide();

  }

  const prevSlide = (currentSlide) => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)
    return currentSlide();

  }

  useEffect(() => {
    setActive((length - (TeamData % length)) % length) // prettier-ignore

  }, [length])

  if (!Array.isArray(TeamData) || TeamData.length <= 0) {
    return null;
  }


  function SampleNextArrow(props) {
    const { currentSlide, onClick } = props;
   

    return (
      <NextArrow
        src={"/static/assets/svg/arowright.svg"}
        onClick={() => { nextSlide(onClick); }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;

    return (
      <PrevArrow
        src={"/static/assets/svg/arowleft.svg"}
        onClick={() => { prevSlide(onClick); }}
      />
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,

    slidesToShow: 5,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    focusOnSelect: false,
    slide: '<>',


  };

  return (
    <TeamSectionContainer>

      {
        ishub ? <HubTeamSectionHead>
          <TeamInHubSectionIcon className="" src={"/static/assets/svg/teaminhubsectionicone.svg"} alt="team Icone" />
          <h1>
            { locale === "en" ?"OUR TEAM" : "NOTRE ÉQUIPE"}
          </h1>
          <p>
            {hub.acf.description_team}
          </p>

        </HubTeamSectionHead> :

          about ? <div>
            <img src="" alt="" />
            <SectionTitle>
              <h1>
              { locale === "en" ?"OUR TEAM" : "NOTRE ÉQUIPE"}
            </h1></SectionTitle>
          </div> :
            <SectionTitle>
             
              {
                locale === "en" ?
                  <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_TEAM-EN.svg'} className="">
                  </object> :
                  <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_TEAM-fr.svg'} className="">
                  </object>
              }
            </SectionTitle>

      }

      <div className='container-fluid first last' style={{ width: '100%', zIndex: 10, marginTop: 30, marginBottom: "15vh" }}>
        <Carousel
          slidesPerPage={5}
          infinite
          centered
          clickToChange
          autoPlay={2000}
          animationSpeed={1000}
          stopAutoPlayOnHover={true}

          currentSlideIndex={currentIndex}
          onChange={onChange}
          arrowLeft={<PrevArrow src={"/static/assets/svg/arowleft.svg"} />
          }
          arrowRight={<NextArrow src={"/static/assets/svg/arowright.svg"} />}
          addArrowClickHandler={true}

          offset={16}
          breakpoints={{
            500: {
              slidesPerPage: 1,
            },
            768: {
              slidesPerPage: 2,
            },
            1024: {
              slidesPerPage: 3,
              offset: 0,
            },

          }}
        >
          {
            hub.acf.team_member.map((team, index) => (

              <div className={`team-slider ${index === 0 ? "first" : ""} ${index === hub.acf.team_member.length - 1 ? "last" : ""}`} key={index}>

                <div className="team-img">
                  <img src={team.image_team.url} alt={team.name_team} />
                  <div className="team-loop"></div>
                </div>
                <div className="team-info">
                  <div className="team-name">
                    {team.name_team}
                  </div>
                  <div className="team-poste">
                    {team.poste_team}
                  </div>
                </div>
              </div>

            ))
          }
        </Carousel>
      </div>
      <Hubteamparalaxe home={home} about={about} src={"/static/assets/svg/HomeTeamparalaxeimg.svg"} alt="" />
      <TeamhomeparalaxeFirst ishub={ishub} about={about} src={"/static/assets/svg/teamhomeparalaxe1.svg"} alt="" />
      <TeamhomeparalaxeTwo ishub={ishub} about={about} src={"/static/assets/svg/teamhomeparalaxe2.svg"} alt="" />

    </TeamSectionContainer>
  )
}



export default TeamSection