import React, { useEffect } from 'react'
import styled, { css } from 'styled-components/macro';
import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import HubheroleftparalaxeImg from "./../assets/svg/paralaxetopherohub.svg"
import HubherorightparalaxeImg from "./../assets/svg/paralaxebottomherohub.svg"
import HubbamakoparalaxeImg from "./../assets/svg/paralaxebamakohub.svg"
import HubsikassoparalaxeImg from "./../assets/svg/paralaxesikassohub.svg"
import HubsegouparalaxeImg from "./../assets/svg/paralaxesegouhub.svg"
import HubImg from "./../assets/hubimg.png"
import { Link } from 'react-router-dom';
import SectionTitle from "../Components/SectionTitle";
import Oconnect from "./../assets/svg/oconnect.svg";
import { useDispatch, useSelector } from 'react-redux';
import { listHubs, listLieuDeshubs } from '../actions/HubActions';
import parse from "html-react-parser";
import Loading from '../Components/Loading';
import MessageBox from '../Components/MessageBox';
import ErrorBoundary from '../Components/ErrorBoundary';


const HubPage = styled.div`
overflow:hidden;
.clear{
  clear:both;
  margin-top: -25vh;
}
`;
const HeroHub = styled.section`
display: flex;
  justify-content: center;
  align-items:center;
background-color:#2755A1;
height: 40vh;
`;

const SectionTitleyy = styled.div`

color: #fff;
  
  position: relative;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
}
 img{
  position: absolute;
  width: 95px;
  left: 5vh;
  bottom: 0;

}
span{
 color: #95B71D;
}

`;

const HubheroparalaxeLeft = styled.img`
position:absolute;
top:0;
left:0;

`;
const HubheroparalaxeRight = styled.img`
position:absolute;
right:0;

`;
const HubsSection = styled.section`
position:initial;

`;
const HubBamako = styled.div`
position: relative;
height: 90vh;
top:30vh;
`;

const HubSikasso = styled.div`
top:15vh;
position: relative;
height: 90vh;
`;
const HubSegou = styled.div`
position: relative;

height: 90vh;
`;
const Hubbamakoparalaxe = styled.img`
position:absolute;
bottom:0;
left:0;
width:350px;
`;
const Hubsikassoparalaxe = styled.img`
position:absolute;
bottom:0;
right:0;
width:350px;
`;
const HubInfo = css`
h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom:3vh;
}
p{
  padding:.3rem;

}
.contenthubinfo{
  margin-bottom:6vh;
}
`;
const HubBamakoInfo = styled.div`
position:absolute;
top: 11%;
left: 8%;
background-color: ${({ gris }) => (gris ? '#EFEFEF' : '#2755A1')};
width: 110vh;
height: 60vh;
color:${({ gris }) => (gris ? '#2755A1' : '#fff')};
text-align: left;
padding:6vh 21vh 2vh 4vh;
border-radius:25px;
z-index:10;
${HubInfo}

`;
const HubSikassoInfo = styled.div`
position:absolute;
top: 11%;
right: 8%;
background-color: #95B71D;
width: 110vh;
height: 60vh;
color:#fff;
text-align: left;
padding:5vh 21vh 2vh 15vh;
border-radius:25px;
z-index:2;
${HubInfo}
`;
const HubSegouInfo = styled.div`
position:absolute;
top: 11%;
left: 8%;
background-color: ${({ gris }) => (gris ? '#EFEFEF' : '#2755A1')};
width: 110vh;
height: 60vh;
color:${({ gris }) => (gris ? '#2755A1' : '#fff')};
text-align: left;
padding:6vh 21vh 2vh 4vh;
border-radius:25px;
z-index:10;
${HubInfo}
`;

const HubBamakoImg = styled.div`
z-index:10 ;
background-color:#fff;
width: 70vh;
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
`;
const HubSikassoImg = styled.div`
z-index:10 ;
background-color:#fff;
width: 70vh;
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
`;
const HubExploreLink = styled(Link)`
color:#fff;
background-color: ${({ green }) => (green ? '#95B71D' : '#2755A1')};
border-radius:30px;
padding:.5rem 1rem;
font-size: 1.2rem;
font-weight: bold;
text-transform: uppercase;
font-family:"CeraRoundPro-Bold";
text-decoration:none;


`;

function Hubs() {

  const dispatch = useDispatch()
  const hubList = useSelector((state) => state.hubList)

  const { loading, error, hubs } = hubList;

  useEffect(() => {
    dispatch(listHubs())
  }, [dispatch])

  useEffect(() => {
    dispatch(listLieuDeshubs())
  }, [dispatch])


  return (
    <HubPage>
      <HeroHub>
        <HubheroparalaxeLeft src={HubheroleftparalaxeImg} alt="" />
        <HubheroparalaxeRight src={HubherorightparalaxeImg} alt="" />

        <SectionTitle white="true">
          <h1>
            N
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
          s hub
        </h1>
        </SectionTitle>

      </HeroHub>

      <HubsSection>
        <ErrorBoundary>
          {
            loading ? <div style={{ height: '50vh' }}> <Loading></Loading> </div> : error ? <div style={{ height: '50vh' }}><MessageBox>erreur de chargement des hubs</MessageBox> </div> :
              hubs.map((hub, index) => (
                index === 0 ? (
                  <HubBamako key={index}>
                    <Hubbamakoparalaxe src={HubbamakoparalaxeImg} alt="" />
                    <HubBamakoInfo>
                      <h1>
                        Bamako
                  </h1>
                      <div className="contenthubinfo">
                        {parse(hub.content.rendered)}
                      </div>

                      <HubExploreLink to={`/hub/${hub.id}`} green="true">
                        découvrir le hub
                    </HubExploreLink>
                    </HubBamakoInfo>
                    <HubBamakoImg>
                      <img src={HubImg} alt="" />
                    </HubBamakoImg>
                  </HubBamako>
                ) : index === 1 ? (
                  <HubSikasso key={index}>
                    <Hubsikassoparalaxe src={HubsikassoparalaxeImg} alt="" />
                    <HubSikassoImg>
                      <img src={HubImg} alt="" />
                    </HubSikassoImg>

                    <HubSikassoInfo>
                      <h1>sikasso</h1>
                      <div className="contenthubinfo">
                        {parse(hub.content.rendered)}
                      </div>
                      <HubExploreLink to={`/hub/${hub.id}`}>
                        découvrir le hub
              </HubExploreLink>
                    </HubSikassoInfo>

                  </HubSikasso>

                ) : (

                  <HubSegou key={index}>
                    <Hubbamakoparalaxe src={HubsegouparalaxeImg} alt="" />
                    <HubSegouInfo gris="true">
                      <h1>segou</h1>
                      <div className="contenthubinfo">
                        {parse(hub.content.rendered)}
                      </div>
                      <HubExploreLink to={`/hub/${hub.id}`}>
                        découvrir le hub
              </HubExploreLink>
                    </HubSegouInfo>
                    <HubBamakoImg>
                      <img src={HubImg} alt="" />
                    </HubBamakoImg>
                  </HubSegou>
                )
              ))
          }

        </ErrorBoundary>

      </HubsSection>

    </HubPage>
  )
}

export default Hubs
