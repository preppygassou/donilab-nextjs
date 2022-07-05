import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components';
import Link from 'next/link';;
import SectionTitle from "../Components/SectionTitle";
import { useDispatch, useSelector } from 'react-redux';
import { listHubs, listLieuDeshubs } from '../store/actions/HubActions';
import parse from "html-react-parser";
import MessageBox from '../Components/MessageBox';
import ErrorBoundary from '../Components/ErrorBoundary';
import { useTranslation } from 'next-i18next';import { useRouter } from 'next/router';
import Layout from '../Components/layouts/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const HubPage = styled.div`
overflow:hidden;
width:100%;

`;
const HeroHub = styled.section`
display: flex;
  justify-content: center;
  align-items:center;
background-color:#2755A1;
height: 40vh;
@media (max-width:768px){
  height: 30vh;

}
.programsandhubstitle{
  margin:0;
}

@media (max-width: 1199px) {
  .programsandhubstitle{
  
  h1,span{ 
    font-size: 3rem;
  }
  span svg {
    left: -17px;
bottom: -47px;
width: 66px;
}

}
}
@media (max-width: 991px) {
  .programsandhubstitle{
  
  h1,span{ 
    font-size: 2.5rem;
  }
  span svg {
    left: -13px;
bottom: -51px;
width: 54px;
}

}
}
  
`;


const HubheroparalaxeLeft = styled.img`
position:absolute;
top:0;
left:0;
@media (max-width:768px){
  width: 75%;
height: 20%;
left: 92px;
}
@media (max-width:500px){
  width: 70%;
height: 25%;
  left: 65px;
}
@media (max-width:360px){
 display:none;
}

`;
const HubheroparalaxeRight = styled.img`
position:absolute;
right:0;
@media only screen and (max-width: 1199px) {
  width: 34%;
  
}

@media (max-width:991px){
  width: 44%;
  right: -8%;
}
@media (max-width:768px){
  display:none;

}

`;
const HubsSection = styled.section`
width:100%;
height:100%;
@media (max-width:768px){
 margin-top:2vh;
 
}

`;

const HubsSectionWrapper = styled.section`

position:relative;
.clear{
  clear:both;
  margin-top: -26vh;
  @media (max-width:768px){
 display:none;
 
}
  @media (max-width:900px){
    margin-top: 5vh;

}
}

`;
const HubBamako = styled.div`
position: relative;
height: 90vh;
top:30vh;
@media (max-width:900px){
 display:flex;
 flex-direction:column-reverse;
 justify-content:center;
width:90%;
margin:0 auto;
position: static !important;

}

`;

const HubSikasso = styled.div`
top:15vh;
position: relative;
height: 90vh;
@media (max-width:900px){
 display:flex;
 flex-direction:column;
 justify-content:center;
width:90%;
margin:0 auto;
position: static !important;

}
`;
const HubSegou = styled.div`
position: relative;
height: 90vh;
@media (max-width:900px){
 display:flex;
 flex-direction:column-reverse;
 justify-content:center;
width:90%;
margin:0 auto;
margin-bottom: 4vh;
position: static !important;
}

`;

const Hubbamakoparalaxe = styled.img`
position:absolute;
bottom:0;
left:0;
width:350px;
@media (max-width:900px){
display:none;

}
`;
const Hubsikassoparalaxe = styled.img`
position:absolute;
bottom:0;
right:0;
width:350px;
@media (max-width:900px){
display:none;

}
`;
const HubInfo = css`
display: grid;
width: 110vh;
/* height: 60vh; */
@media (max-width: 1600px) {
width: 90vh;
}
@media (max-width: 1024px) {
width: 80vh;
}
@media (max-width: 1199px) {
width: 73vh;
}
@media (max-width:1000px){
  width: 70vh;
height: 60vh;
}
@media (max-width:930px){
  width: 65vh;
height: 60vh;
}
@media (max-width:900px){
  width: 100%;
height: 100%;

}

    grid-auto-columns: 1fr;
    align-items: center;
h1{
  font-family:"Cera Round Pro";
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom:3vh;
  @media (max-width:768px){
    font-size:2rem;
  margin-bottom:1vh;

}
}
p{
  padding:.3rem;

}
.contenthubinfo{
  margin-bottom:6vh;
  @media (max-width:900px){
   
  margin-bottom:1vh;

}
}
`;
const HubBamakoInfo = styled.div`
position:absolute;
top: 11%;
left: 8%;
background-color: ${({ gris }) => (gris ? '#EFEFEF' : '#2755A1')};

color:${({ gris }) => (gris ? '#2755A1' : '#fff')};
text-align: left;
border-radius:25px;
z-index:10;
${HubInfo}
padding:18vh 25vh 18vh 7vh;

@media (max-width: 1199px) {
  padding:15vh 15vh 15vh 7vh;
}
@media (max-width:900px){

  position: static !important;
  padding:4vh;

}
`;
const HubSikassoInfo = styled.div`
position:absolute;
top: 11%;
right: 8%;
background-color: #95B71D;
color:#fff;
text-align: left;
padding:5vh 21vh 2vh 15vh;
border-radius:25px;
z-index:2;
${HubInfo}
padding: 18vh 4vh 18vh 25vh;
@media (max-width:900px){

position: static !important;
padding:4vh;
margin-bottom:1vh;
}

`;
const HubSegouInfo = styled.div`
position:absolute;
top: 11%;
left: 8%;
background-color: ${({ gris }) => (gris ? '#EFEFEF' : '#2755A1')};
color:${({ gris }) => (gris ? '#2755A1' : '#fff')};
text-align: left;
border-radius:25px;
z-index:10;
${HubInfo}
padding: 21vh 25vh 21vh 7vh;
@media (max-width:900px){

position: static !important;
padding:4vh;

}

`;

const HubBamakoImg = styled.div`
z-index:10 ;
background-color:#fff;
width: 100vh;
height: 50vh;
position:absolute;
border-radius: 20px 0 0 20px;
top: 17%;
right:0;
padding:1vh 0 1vh 1vh;

img{
  width: 100%;
  border-radius: 20px 0 0 20px;
  height: 100%;
  object-fit:cover;
}

@media (max-width: 1600px) {
width: 110vh;
height: 55vh;
top:19%;
}
@media (max-width: 1450px) {
width: 90vh;
height: 50vh;
top:19%;
}
@media (max-width: 1270px) {
width: 75vh;
height: 50vh;
top:19%;
}
@media (max-width: 1199px) {
width: 68vh;
height: 50vh;
top:19%;
}

@media (max-width: 1024px) {
width: 60vh;
height: 50vh;
top:19%;
}

@media (max-width:991px){
  width: 55vh;
height: 45vh;
}
@media (max-width:900px){
width:100%;
position: static !important;
border-radius: 20px;
img{
border-radius: 20px;

}
}

`;

const HubSikassoImg = styled.div`
z-index:10 ;
background-color:#fff;
width: 100vh;
height: 50vh;
position:absolute;
border-radius: 20px 0 0 20px;
top: 17%;
left:0;
padding:1vh 0 1vh 1vh;
transform: rotateY(180deg);
img{
  width: 100%;
  border-radius: 20px 0 0 20px;
  height: 100%;
  object-fit:cover;
}


@media (max-width: 1600px) {
width: 110vh;
height: 55vh;
top:19%;
}
@media (max-width: 1450px) {
width: 90vh;
height: 50vh;
top:19%;
}

@media (max-width: 1270px) {
width: 75vh;
height: 50vh;
top:19%;
}

@media (max-width: 1199px) {
width: 68vh;
height: 50vh;
top:19%;
}
@media (max-width: 1024px) {
width: 59vh;
height: 50vh;
top:19%;
}

@media (max-width:991px){
  width: 55vh;
height: 45vh;
}


/* @media (max-width: 1199px) {
width: 45vh;
height: 45vh;
top:19%;
}

@media (max-width:991px){
  width: 40vh;
height: 40vh;
}
 */
@media (max-width:900px){
width:100%;
position: static !important;
border-radius: 20px;
img{
border-radius: 20px;

}
}

`;
const HubExploreLink = styled(Link)`
color:#fff;
background-color: ${({ green }) => (green ? '#95B71D' : '#2755A1')};
border-radius:30px;
padding:.5rem 1rem;
font-size: 1.2rem;
font-weight: bold;
text-transform: uppercase;
font-family:"Cera Round Pro";
text-decoration:none;
@media (max-width:768px){

font-size: 1rem;

}

`;

function Hubs() {
  const { t} = useTranslation('common')
  const {locale} = useRouter()
  const dispatch = useDispatch()
  const hubList = useSelector((state) => state.hubList)
  const { loading, error, hubs } = hubList;


  useEffect(() => {
    dispatch(listHubs(locale))
  }, [dispatch,locale])

  useEffect(() => {
    dispatch(listLieuDeshubs())
  }, [dispatch])


  return (
    <>
    <HubPage>
      <HeroHub>
        <HubheroparalaxeLeft src={"/static/assets/svg/paralaxetopherohub.svg"} alt="" />
        <HubheroparalaxeRight src={"/static/assets/svg/paralaxebottomherohub.svg"} alt="" />

        <SectionTitle className= "programsandhubstitle" white="true">
          {/* <h1>
          {t("n")}
            <span className="conectimg">
              o
              <svg id="Grupo_729" data-name="Grupo 729" xmlns="http://www.w3.org/2000/svg" width="128.639" height="143.869" viewBox="0 0 128.639 143.869">
                <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d" />
                <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d" />
                <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d" />
              </svg>
            </span>
            {t("os")} hubs
        </h1> */}
        {
          locale === "en" ?
          <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_HUBS-EN.svg'} className="">
          </object> :
           <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_HUBS-FR.svg'} className="">
           </object>
           }
        </SectionTitle>

      </HeroHub>

      <HubsSection>

        <ErrorBoundary>
          {
            loading ? <div style={{ height: '50vh' }}> <div className="loading"></div> </div> : error ? <div style={{ height: '50vh' }}><MessageBox>erreur de chargement des hubs</MessageBox> </div> :
              <HubsSectionWrapper>
                <div className="clear"></div>
                {
                  hubs.map((hub, index) => (
                    index === 0 ? (
                      <HubBamako key={index}>
                        <Hubbamakoparalaxe src={"/static/assets/svg/paralaxebamakohub.svg"} alt="" />
                        <HubBamakoInfo>
                          <div>
                            <h1>
                              Bamako
                       </h1>
                          </div>
                          <div className="contenthubinfo">
                            {parse(hub.content.rendered)}
                          </div>

                          <div>
                            <HubExploreLink href={`/hub/${hub.id}`} green="true">
                              {t("decouverthub")}
                    </HubExploreLink>
                          </div>
                        </HubBamakoInfo>
                        <HubBamakoImg>
                          <img src={hub.fimg_url} alt="" />
                        </HubBamakoImg>
                      </HubBamako>
                    ) : index === 1 ? (
                      <HubSikasso key={index}>
                        <Hubsikassoparalaxe src={"/static/assets/svg/paralaxesikassohub.svg"} alt="" />
                        <HubSikassoImg>
                          <img src={hub.fimg_url} alt="" />
                        </HubSikassoImg>

                        <HubSikassoInfo>
                          <div>
                            <h1>sikasso</h1>
                          </div>
                          <div className="contenthubinfo">
                            {parse(hub.content.rendered)}
                          </div>
                          <div>
                            <HubExploreLink href={`/hub/${hub.id}`}>
                              {t("decouverthub")}
              </HubExploreLink>
                          </div>
                        </HubSikassoInfo>

                      </HubSikasso>

                    ) : (

                      <HubSegou key={index}>
                        <Hubbamakoparalaxe src={"/static/assets/svg/paralaxesegouhub.svg"} alt="" />
                        <HubSegouInfo gris="true">
                          <div>
                            <h1>segou</h1>
                          </div>
                          <div className="contenthubinfo">
                            {parse(hub.content.rendered)}
                          </div>
                          <div>
                            <HubExploreLink href={`/hub/${hub.id}`}>
                              {t("decouverthub")}
              </HubExploreLink>
                          </div>
                        </HubSegouInfo>
                        <HubBamakoImg>
                          <img src={hub.fimg_url} alt="" />
                        </HubBamakoImg>
                      </HubSegou>
                    )
                  ))
                }
              </HubsSectionWrapper>
          }

        </ErrorBoundary>

      </HubsSection>

    </HubPage>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Hubs
