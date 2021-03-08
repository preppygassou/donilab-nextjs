import React,{useState,useRef, useEffect} from 'react'
import styled,{css} from 'styled-components/macro'
import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import Teamhomeparalaxe1 from "./../assets/svg/teamhomeparalaxe1.svg"
import Teamhomeparalaxe2 from "./../assets/svg/teamhomeparalaxe2.svg"
import { TeamData } from '../data/TeamData';
import ArrowLeftIcon from "./../assets/svg/arowleft.svg"
import ArrowRighthIcon from "./../assets/svg/arowright.svg"
import SectionTitle from "./SectionTitle"
import Slider from "react-slick";
import Oconnect from "./../assets/svg/oconnect.svg"
import TeamInHubSectionIcone from "./../assets/svg/teaminhubsectionicone.svg";


const SectionTitletest =styled.div`
  color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;

h1{
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
}
 img{
 position: absolute;
 width: 95px;
 left: 66vh;
 bottom: -1vh;

}
span{
 color: #95B71D;
}

`;

const TitleInAbout = styled.h1 ` 

  font-family:"CeraRoundPro-Bold";
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin:1.5vh 0 3vh 0;
  color:#2755A1;
  text-align:center;
  margin: .5vh 0 9vh 0;

`;
const TeamSectionContainer = styled.section ` 
overflow:hidden;
padding:5rem 0;
height: 100%;
background-color:#EFEFEF;
position: relative;
.slick-track{
  display:flex;
align-items:center;
justify-content:space-around;
width:100%;
}
.slick-slider{
position:relative ;
padding: 0 0 31vh 0;
}
.slick-slide{
position:relative ;
}
.slick-slide{
  width:200px !important;
  .teamslider{
  position:relative;
  width:200px !important;
}

  .teamloop{
    border-radius:50%;
background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77);
width:200px;
height: 200px;
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
}
.slick-center {
  width:250px !important;
  display:flex;
justify-content:center;
flex-direction:column;
position:relative;
text-align:center;
.teamslider{
  position:relative;
  width:250px !important;
}
.teamloop{
  display:none;
}

img{
  border:8px solid #95B71D;
 width:250px;
 filter: none;
-webkit-filter: none;
}
}
.teaminfo{
    display: flex;
  position:absolute;
   bottom: -35%;
    right: 43px;
    flex-direction: column;
    justify-content: center;
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
`;

const TeamSlide = styled.div ` 
display:flex;
align-items:center;
justify-content:space-around;
width:100%;

`;
const TeamSlider = styled.div ` 
display:flex;
justify-content:center;
flex-direction:column;
position:relative;

h1{
  font-size:2rem;
  color:#95B71D;
  margin:1rem 0 .5rem 0;
  font-weight:bold;

}
p{
  font-size:1.5rem;
  color:#95B71D;
}

img {
filter: blur(4px);
-webkit-filter: blur(4px);
width:250px;
}
`;

const TeamSlideractive = styled.div ` 
display:flex;
justify-content:center;
flex-direction:column;
position:relative;
text-align:center;

h1{
  font-size:2rem;
  color:#95B71D;
  margin:1rem 0 .5rem 0;
  font-weight:bold;

}
p{
  font-size:1.5rem;
  color:#95B71D;
}
img{
  border:10px solid #95B71D;
 width:300px;
}

`;
const TeamImg = styled.img` 
border-radius:50%;
`;
const SliderButtons =styled.div `
margin-top:13vh;
display:flex;
justify-content:center;
align-items:center;

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
bottom: 50px;
left:40%;
width: 70px;

`;
const NextArrow = styled.img`
${arrowButton}
position:absolute;
bottom: 50px;
right:40%;
width: 70px;

`;
const TeamImgLoop = styled.div`
border-radius:50%;
background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77);
width:250px;
height: 250px;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
`;
const TeamInfo = styled.div`
position:absolute;
bottom: -11vh;
    right: 43px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const TeamhomeparalaxeFirst = styled.img`
display:${({about,ishub})=>(about ? 'none': ishub ? 'none':'block')};
position:absolute;
top:0;
right:0;
width:220px;
`;
const TeamhomeparalaxeTwo = styled.img`
display:${({about,ishub})=>(about ? 'none': ishub ? 'none':'block')};
position:absolute;
bottom:0;
left:0;
width:450px;
`;

const HubTeamSectionHead =  styled.div `

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:12vh 45vh;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;
const TeamInHubSectionIcon = styled.img`

`;

function TeamSection({initialSlide,about,ishub,hub}) {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(0);
const length = TeamData.length;
const timeout = useRef(null);

const nextSlide = (currentSlide)=>{
  if (timeout.current){
    clearTimeout(timeout.current)
  }
   setCurrent(current=== length - 1 ? 0 : current + 1)
   return currentSlide();
 
 }

 const prevSlide = (currentSlide)=>{
  if (timeout.current){
    clearTimeout(timeout.current)
  }
   setCurrent(current=== 0 ? length -1 : current  - 1)
   return currentSlide();
  
 }

 useEffect(() => {
  setActive((length - (TeamData % length)) % length) // prettier-ignore

}, [length])
  
 if(!Array.isArray(TeamData)||TeamData.length <=0){
   return null;
 }

/*  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  ); */



 function SampleNextArrow(props) {
  const { currentSlide,onClick } = props;
  console.log("bbb"+currentSlide)

  return (
    <NextArrow
    src={ArrowRighthIcon}
    onClick={()=>{nextSlide(onClick);}}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick ,currentSlide} = props;
  console.log("bbb"+currentSlide)
  return (
    <PrevArrow
      src={ArrowLeftIcon}
      onClick={()=>{prevSlide(onClick);}}
    />
  );
}
console.log(active)
console.log("My"+current)

 const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
 
  slidesToShow: 5,
  speed: 500,
  nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide:0,
      focusOnSelect:false,
      slide:'<>',
     
      
};

  return (
    <TeamSectionContainer>

      {
        ishub ?  <HubTeamSectionHead>
            <TeamInHubSectionIcon className="" src={TeamInHubSectionIcone} alt="team Icone" />
            <TitleInAbout>L'ÉQUIPE</TitleInAbout>
            <p>
              {hub.description_team}
            </p>

        </HubTeamSectionHead> :
        
          about ? <div>
            <img src="" alt=""/>
            <SectionTitle>NOTRE ÉQUIPE</SectionTitle>
          </div> :
          <SectionTitle>  
            <h1>
            n
            <span className="conectimg">
              <object
                style={{ fill: " #fff " }}
                id={Oconnect}
                type="image/svg+xml"
                width="100"
                height="100"
                data={Oconnect}
                className="svg"
              ></object>
            </span>
            tre équipe
          </h1>
          </SectionTitle>
        
      }
     
        <Slider {...settings}>
          { 
          hub.acf.team_member.map((team,index)=>(
            index === current ? 
            <div className="teamslider"  key={index}>
                   <TeamImg src={team.image_team.url} alt={team.name_team}/> 
                   <div className="teaminfo">
                   <h1>{team.name_team}</h1>
                   <p>{team.poste_team}</p>
                   </div>                              
              </div>
                :
                <div className="teamslider"  key={index}>
                   <TeamImg src={team.image_team.url} alt={team.name_team}/> 
                   <div className="teamloop"></div>   
                                  
                                              
              </div>
              /* index === current && ( */
              /* currentSlide*/
                
               /*  index === current ? 
                <TeamSlideractive key={index}>
                <TeamImg src={team.image} alt={team.teamname}/>
                <TeamInfo>
                   <h1>{team.teamname}</h1>
                   <p>{team.poste}</p>
                   </TeamInfo>    
           </TeamSlideractive> : 
                  
              <TeamSlider key={index}>
                   <TeamImg src={team.image} alt={team.teamname}/>                 
                   <TeamImgLoop></TeamImgLoop>                                 
              </TeamSlider> */
              /* ) */
            ))
          }
        </Slider>
       {/*  <SliderButtons>
            <PrevArrow  onClick={prevSlide} src={ArrowLeftIcon}/>
            <NextArrow onClick={nextSlide} src={ArrowRighthIcon}/>
          </SliderButtons> */}
          <TeamhomeparalaxeFirst about={about} src={Teamhomeparalaxe1} alt=""/>
          <TeamhomeparalaxeTwo about={about} src={Teamhomeparalaxe2} alt=""/>
          
    </TeamSectionContainer>
  )
}



export default TeamSection

