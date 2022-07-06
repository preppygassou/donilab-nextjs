import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import DoniEvent from '../Components/DoniEventSection';
import TeamSection from '../Components/TeamSection';
import SectionTitle from "../Components/SectionTitle";
import { useDispatch, useSelector } from 'react-redux';
import { listHubs } from '../store/actions/HubActions';
import MessageBox from '../Components/MessageBox';
import ErrorBoundary from '../Components/ErrorBoundary';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import parser from 'html-react-parser';
import { useRouter } from 'next/router';
import Layout from '../Components/layouts/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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

const About = ({abouts,hubs}) => {
  const dispatch = useDispatch()
  const hubList = useSelector((state) => state.hubList)
  const { t } = useTranslation('common')
 // const [abouts, setAbouts] = useState([])
  const [loadingabout, setLonding] = useState(false)
  const { locale } = useRouter()
 // const { loading, error, hubs } = hubList;


  /* useEffect(() => {
    setLonding(true)
    axios.get(`https://blog.donilab.org/wp-json/wp/v2/about/?lang=${locale}`)
      .then(res =>
        setAbouts(res.data),
        setLonding(false)
      );
  }, [locale])


  useEffect(() => {
    dispatch(listHubs(locale))
  }, [dispatch, locale]) */

  return (
    <>
      {/*  <Helmet>
        <title>Donilab | About</title>
        <meta name="description" content="A propos de Donilab" />
      </Helmet> */}
      <AboutContainer>
        <AboutWrapper>
          {
            /* loadingabout ? <div className='loading-overlay' ><div className="loading"></div></div> : */abouts&& abouts.map((about, index) => (
              index === 0 ? <AboutHero>
                <AboutheroparalaxeLeft src={"/static/assets/svg/aboutheroleftparalaxe.svg"} alt="" />
                <AboutheroparalaxeRight src={"/static/assets/svg/aboutherorightparalaxe.svg"} alt="" />
                <SectionTitle white="true">
                  
                  {
                    locale === "en" ?
                      <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_ABOUT-EN.svg'} className="">
                      </object> :
                      <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_ABOUT-FR.svg'} className="">
                      </object>
                  }
                </SectionTitle>
                <AboutParagraph>
                  <div className="about-container">
                    {parser(about.acf.description_about)}

                  </div>
                </AboutParagraph>
              </AboutHero> : index === 1 ? <AboutHistoric>
                <HistoryparalaxImgtop src={"/static/assets/svg/historyparalaximgtop.svg"} alt="" />
                <HistoryparalaxImgbottom src={"/static/assets/svg/historyparalaximgbottom.svg"} alt="" />
                <HistoryVisionMissionIcon className="iconAbout" src={"/static/assets/svg/historyicon.svg"} alt="Historic icon" />

                <div className="about-container">
                  <h1>
                    {about.title.rendered}
                  </h1>
                  {parser(about.acf.description_about)}
                </div>
              </AboutHistoric> : index === 2 ?
                <AboutVision>

                  <div className="about-container">
                    <HistoryVisionMissionIcon className="iconAbout" src={"/static/assets/svg/visionicon.svg"} alt="Visionicon" />
                    <h1>
                      {about.title.rendered}
                    </h1>
                    {parser(about.acf.description_about)}
                  </div>
                </AboutVision> : index === 3 ? <AboutMission>
                  <MissionParalaxeImgBottom src={"/static/assets/svg/missionParalaxe.svg"} alt="" />
                  <MissionParalaxeImgRight src={"/static/assets/svg/missionRightParalaxe.svg"} alt="" />
                  <HistoryVisionMissionIcon className="iconAbout" src={"/static/assets/svg/missionicon.svg"} alt="Historic icon" />

                  <div className="about-container">
                    <h1>
                      {about.title.rendered}

                    </h1>
                    {parser(about.acf.description_about)}
                  </div>
                </AboutMission> : ""
            ))
          }

          <ErrorBoundary>
            {
              /* loading ? <div className='loading-overlay' ><div className="loading"></div></div> : error ? <MessageBox>erreur de chargement .</MessageBox> : */ hubs&&hubs.length > 0 &&(
                hubs.map((hub, index) => (
                  index === 0 && (<TeamSection about="about" hub={hub} />)
                ))
              )
            }
          </ErrorBoundary>
          <ErrorBoundary>
            <DoniEvent />
          </ErrorBoundary>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}


export const getServerSideProps = async ({ locale }) => {
  const res = await axios.get(
    `https://blog.donilab.org/wp-json/wp/v2/about/?lang=${locale}`
  );
  const { data } = await axios.get(
    "https://blog.donilab.org/wp-json/wp/v2/hubs/?lang="+locale
  );
  return {
    props: {
      abouts: res.data,
      hubs: data,
      ...await serverSideTranslations(locale, ['common']),
    },
  };
};


export default About