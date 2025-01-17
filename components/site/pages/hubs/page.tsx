"use client"
import React from 'react'
import styled, { css } from 'styled-components';
import SectionTitle from "../../components/SectionTitle";
import ErrorBoundary from '../../components/ErrorBoundary';
import { useParams } from 'next/navigation';
import Layout from '../../components/Layout';
import { useHubs } from '@/hooks/useHubs';
import { useSite } from '@/hooks/useSites';
import LoadingPage from '@/components/global/loading-page';


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
/* width:100%;
height:100%; */
margin-top:6rem;
/* @media (max-width:768px){
 margin-top:2vh;
 
} */

.reverse div:nth-of-type(1) {
    order: 2;
  }
.reverse  {
  grid-template-columns: 40% 60% !important;
  }
.donilab-hub__container{
  position: relative;
/* height: 90vh; */
  top:30vh;
  height: 450px;
 margin-bottom:5px;
max-width: 1200px;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
display: grid;
grid-template-columns: 60% 40%;
  @media (max-width: 1200px){

    max-width: 1140px;
  }
  @media (max-width: 992px){

    max-width: 960px;
  }
  @media (max-width:  768px){

    max-width: 720px;
  }
  @media (max-width: 576px){

    max-width: 540px;
  }


}


`;

const HubsSectionWrapper = styled.div`

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
//display:grid;

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

@media (max-width:900px){
width:100%;
position: static !important;
border-radius: 20px;
img{
border-radius: 20px;

}
}

`;
const HubExploreLink = styled.div`
a{
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
}


`;

function Hubs() {

 
  const params = useParams<{ locale: string; }>()
  const { locale} = params;
  const { data: site, isLoading, error } = useSite("dml");

  return (
    <>
    {
      isLoading?<LoadingPage/>:<Layout data={site} footer={site?.data?.footer}>
      <HubPage>
        <HeroHub>
          <HubheroparalaxeLeft src={"/assets/svg/paralaxetopherohub.svg"} alt="" />
          <HubheroparalaxeRight src={"/assets/svg/paralaxebottomherohub.svg"} alt="" />

          <SectionTitle className="programsandhubstitle" white="true">
     
            {
              locale === "en" ?
                <object type="image/svg+xml" width="500px" height="100" data={'/assets/svg/title/title_HUBS-EN.svg'} className="">
                </object> :
                <object type="image/svg+xml" width="500px" height="100" data={'/assets/svg/title/title_HUBS-FR.svg'} className="">
                </object>
            }
          </SectionTitle>

        </HeroHub>

        <HubsSection>

          <ErrorBoundary>
            {
              
                <HubsSectionWrapper className='donilab-hubs__container'>
                  {site?.hubs?.length > 0 && site.hubs.map((hub, index) => {
                    const isBamako = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27].includes(index);
                    const isSikasso = [1, 4, 7, 10, 13, 16, 19, 22, 25, 29].includes(index);

                    const HubComponent = isBamako ? HubBamako : isSikasso ? HubSikasso : HubSegou;
                    const HubParalaxe = isBamako ? Hubbamakoparalaxe : isSikasso ? Hubsikassoparalaxe : Hubbamakoparalaxe;
                    const HubInfoComponent = isBamako ? HubBamakoInfo : isSikasso ? HubSikassoInfo : HubSegouInfo;
                    const hubInfoProps = isBamako ? {} : isSikasso ? {} : { gris: true };
                    const HubImgComponent = isBamako || !isSikasso ? HubBamakoImg : HubSikassoImg;

                    return (
                      <HubComponent key={index}>
                        <HubParalaxe src={isBamako ? "/assets/svg/paralaxebamakohub.svg" : isSikasso ? "/assets/svg/paralaxesikassohub.svg" : "/assets/svg/paralaxesegouhub.svg"} alt="" />
                        <HubInfoComponent {...hubInfoProps}>
                          <div>
                            <h1>{hub.title[locale]}</h1>
                          </div>
                          <div className="contenthubinfo">
                            {hub.description[locale]}
                          </div>
                          <HubExploreLink green={isSikasso}>
                            <a href={`/hub/${hub.slug[locale]}`}>
                              {locale === "en" ? "DISCOVER THE HUB" : "DÉCOUVRIR LE HUB"}
                            </a>
                          </HubExploreLink>
                        </HubInfoComponent>
                        <HubImgComponent>
                          <img src={hub?.featured_media?.url} alt="" />
                        </HubImgComponent>
                      </HubComponent>
                    );
                  })}
                </HubsSectionWrapper>
            }

          </ErrorBoundary>

        </HubsSection>

      </HubPage>
    </Layout>
    }
    </>
    
  )
}


export default Hubs
