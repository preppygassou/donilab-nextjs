"use client"
import React from 'react'
import styled from 'styled-components'
import DoniEvent from '../../components/DoniEventSection';
import TeamSection from '../../components/TeamSection';
import SectionTitle from "../../components/SectionTitle";
import Layout from '@/components/site/components/Layout';
/* import { site } from '@/components/site/components/siteData'; */
import { useParams } from 'next/navigation';
import { useSite } from '@/hooks/useSites';
import LoadingPage from '@/components/global/loading-page';

const AboutContainer = styled.div`
width:100%;
overflow:hidden;
`;
const AboutWrapper = styled.div`
.iconAbout{
  width:100px;
}
.about-container{
  margin: 0 auto;
  max-width:800px;
  h1{
  font-family:"Cera Round Pro";
  font-size: 2.2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 3vh 0 3vh 0;
}
}
`;
const AboutHero = styled.section`
background-color:#2755A1;
height: 80vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
color:#fff;
padding:2rem 15rem;
width:100%;
@media (min-width:769px) and (max-width:1600px){
  padding: 20rem 5rem;
}
@media (max-width:768px){
  padding:2rem 4rem;
  p{
    font-size:0.9rem;
  }
}
@media (max-width:500px){
  padding: 25rem 2rem;
}
h1{
animation: slideInFromBottom 1s ease-in;

}
`;
const AboutParagraph = styled.div`
animation: slideInFromBottom 1s ease-in;
text-align:center;
margin:0 auto;
width:100%;
p{
  margin:0  2vh 2vh 0;
}
`;

const SectionTitlett = styled.div`
color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  margin:0 0 4vh 0;
  position:relative;

h1{
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
}
 img{
 position: absolute;
 width: 95px;
 left: 22vh;
bottom: -1vh;

}
span{
 color: #95B71D;
}

`;

const AboutHistoric = styled.div`
background-color:#EFEFEF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;
@media (min-width:769px) and (max-width:1600px){
  padding: 5rem 5rem;
}
@media (max-width:768px){
  padding:2rem 4rem;
  p{
    font-size:0.9rem;
  }
}
@media (max-width:500px){
  padding: 5rem 2rem;
}


`;

const AboutVision = styled.div`
background-color:#95B71D;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#FFF;
text-align:center;
padding:12vh 0;

position:relative;
@media (max-width:768px){
  padding:2rem 4rem;
  p{
    font-size:0.9rem;
  }
}
@media (max-width:500px){
  padding: 5rem 2rem;
}




`;
const AboutMission = styled.div`
background-color:#FFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;
@media (max-width:768px){
  padding:2rem 4rem;
  p{
    font-size:0.9rem;
  }
}
@media (max-width:500px){
  padding: 5rem 2rem;
}


`;
const AboutheroparalaxeLeft = styled.img`
position:absolute;
top:0;
left:0;
width:350px;
@media (max-width:1600px){
  width:250px;
}
@media (max-width:768px){
  width:150px;
}
`;
const AboutheroparalaxeRight = styled.img`
position:absolute;
top: 60px;
right:0;
width:400px;
@media (max-width:1600px){
  width:250px;
  top: 50px;
}
@media (max-width:768px){
  width:150px;
}
`;
const HistoryparalaxImgtop = styled.img`
position:absolute;
top: 0;
left: 12vh;
width: 310px;
@media (max-width:900px){
  width:250px;
  
}
@media (max-width:768px){
  width:150px;
}

`;
const HistoryparalaxImgbottom = styled.img`
position:absolute;
bottom: 0;
right:0;
width: 125px;
@media (max-width:768px){
  width:90px;
}
`;
const HistoryVisionMissionIcon = styled.img`
width:100px;

`;
const MissionParalaxeImgBottom = styled.img`
position:absolute;
top: 0;
left: 12vh;
width: 300px;
@media (max-width:900px){
  width:250px;
  
}
@media (max-width:768px){
  width:150px;
}
`;
const MissionParalaxeImgRight = styled.img`

position:absolute;
bottom: 0;
right:0;
width: 200px;
@media (max-width:900px){
  width:150px;
  
}
@media (max-width:768px){
  width:85px;
}
`;


export default function About() {
  
  const params = useParams<{ locale: string; }>()
  const { locale} = params;
  const { data: site, isLoading, error } = useSite("dml");
  return (
    <>
    {
      isLoading?<LoadingPage/>: <Layout data={site} footer={site?.data?.footer}>
      <AboutContainer>
        <AboutWrapper>
          {
            site?.data?.about_page?.about&& site?.data?.about_page?.about.map((about, index) => (
              index === 0 ? <AboutHero>
                <AboutheroparalaxeLeft src={"/assets/svg/aboutheroleftparalaxe.svg"} alt="" />
                <AboutheroparalaxeRight src={"/assets/svg/aboutherorightparalaxe.svg"} alt="" />
                <SectionTitle white="true">
                  
                  {
                    locale === "en" ?
                      <object type="image/svg+xml" width="500px" height="100" data={'/assets/svg/title/title_ABOUT-EN.svg'} className="">
                      </object> :
                      <object type="image/svg+xml" width="500px" height="100" data={'/assets/svg/title/title_ABOUT-FR.svg'} className="">
                      </object>
                  }
                </SectionTitle>
                <AboutParagraph>
                  <div className="about-container">
                    {about.description[locale]}

                  </div>
                </AboutParagraph>
              </AboutHero> : index === 1 ? <AboutHistoric>
                <HistoryparalaxImgtop src={"/assets/svg/historyparalaximgtop.svg"} alt="" />
                <HistoryparalaxImgbottom src={"/assets/svg/historyparalaximgbottom.svg"} alt="" />
                <HistoryVisionMissionIcon className="iconAbout" src={"/assets/svg/historyicon.svg"} alt="Historic icon" />

                <div className="about-container">
                  <h1>
                    {about.title[locale]}
                  </h1>
                  {about.description[locale]}
                </div>
              </AboutHistoric> : index === 2 ?
                <AboutVision>

                  <div className="about-container">
                    <HistoryVisionMissionIcon className="iconAbout" src={"/assets/svg/visionicon.svg"} alt="Visionicon" />
                    <h1>
                      {about.title[locale]}
                    </h1>
                    {about.description[locale]}
                  </div>
                </AboutVision> : index === 3 ? <AboutMission>
                  <MissionParalaxeImgBottom src={"/assets/svg/missionParalaxe.svg"} alt="" />
                  <MissionParalaxeImgRight src={"/assets/svg/missionRightParalaxe.svg"} alt="" />
                  <HistoryVisionMissionIcon className="iconAbout" src={"/assets/svg/missionicon.svg"} alt="Historic icon" />

                  <div className="about-container">
                    <h1>
                      {about.title[locale]}

                    </h1>
                    {about.description[locale]}
                  </div>
                </AboutMission> : ""
            ))
          }

{/* {
             hubs&&hubs.length > 0 &&(
                hubs.map((hub, index) => (
                  index === 0 && (<TeamSection about="about" hub={hub} />)
                ))
              )
            } */}
            {
        site?.teams && site?.teams.length > 0 && <TeamSection about="about" teams={site?.teams} />
      }
          <DoniEvent events={site?.events}/>
        </AboutWrapper>
      </AboutContainer>
      </Layout>
      }
    </>
  )
}
