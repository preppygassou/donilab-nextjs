import React, { useEffect } from 'react'
import styled from 'styled-components'
import DoniEvent from '../Components/DoniEventSection';
import TeamSection from '../Components/TeamSection';
import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import AboutheroleftparalaxeImg from "./../assets/svg/aboutheroleftparalaxe.svg"
import AboutherorightparalaxeImg from "./../assets/svg/aboutherorightparalaxe.svg"
import VisionIcon from "./../assets/svg/visionicon.svg"
import HistoryIcon from "./../assets/svg/historyicon.svg"
import MissionIcon from "./../assets/svg/missionicon.svg"
import Historyparalaximgtop from "./../assets/svg/historyparalaximgtop.svg"
import Historyparalaximgbottom from "./../assets/svg/historyparalaximgbottom.svg"
import MissionParalaxeBottom from "./../assets/svg/missionParalaxe.svg"
import MissionRightParalaxeImg from "./../assets/svg/missionRightParalaxe.svg"
import SectionTitle from "../Components/SectionTitle";
import Oconnect from "./../assets/svg/oconnect.svg";
import { useDispatch, useSelector } from 'react-redux';
import { listHubs } from '../actions/HubActions';
import Loading from '../Components/Loading';
import MessageBox from '../Components/MessageBox';

const AboutContainer = styled.div `

`;
const AboutWrapper = styled.div `
.iconAbout{
  width:100px;
}
`;
const AboutHero = styled.section `
background-color:#2755A1;
height: 80vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
color:#fff;
padding-top:2vh;
`;
const AboutParagraph = styled.div `
text-align:center;
width:95vh;
p{
  margin:0  2vh 2vh 0;
}
`;

const SectionTitlett =styled.div`
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
  font-family:"CeraRoundPro-Bold";
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

const AboutHistoric = styled.div `
background-color:#EFEFEF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;

const AboutVision = styled.div `
background-color:#95B71D;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#FFF;
text-align:center;
padding:12vh 45vh;
position:relative;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}

`;
const AboutMission = styled.div `
background-color:#FFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;
const AboutheroparalaxeLeft  = styled.img `
position:absolute;
top:0;
left:0;
width:350px;
`;
const AboutheroparalaxeRight = styled.img `
position:absolute;
top: 78px;
right:0;
width:400px;

`;
const HistoryparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 12vh;
width: 310px;

`;
const HistoryparalaxImgbottom = styled.img `
position:absolute;
bottom: 0;
right:0;
width: 125px;

`;
const HistoryVisionMissionIcon = styled.img `


`;
const MissionParalaxeImgBottom = styled.img `
position:absolute;
top: 0;
left: 12vh;
width: 310px;
`;
const MissionParalaxeImgRight = styled.img `

position:absolute;
bottom: 0;
right:0;
width: 200px;
`;

export default function About() {
  const dispatch = useDispatch()
  const hubList = useSelector((state) => state.hubList)


  const { loading,error,hubs } = hubList;


  useEffect(() => {
    dispatch(listHubs())
  }, [dispatch])

  return (
    <AboutContainer>
      <AboutWrapper>
      <AboutHero>
        <AboutheroparalaxeLeft src={AboutheroleftparalaxeImg} alt=""/>
        <AboutheroparalaxeRight src={AboutherorightparalaxeImg} alt=""/>
      <SectionTitle white="true">
      <h1>
      À pr
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
          pos
        </h1>
        </SectionTitle>
       <AboutParagraph>
       <p>
       DoniLab est la première structure d’accompagnement de entrepreneuriat innovant au Mali. Depuis 2015, sa mission consiste à accompagner les jeunes dans leur parcours entrepreneurial, en favorisant les projets créant de la valeur ajoutée pour le Mali.
        </p>
        <p>
        DoniLab apporte tout ce dont l’entrepreneur a besoin pour réussir dans son projet : de l’accompagnement personnalisé, de la formation, des outils de prototypage, un accès à une communauté, à un réseau, un gain de visibilité, un appui dans la recherche de financement et un accès à des locaux équipés.
        </p>
        <p>
        L’accompagnement à DoniLab comprend un suivi structuré et un accès à tous les services de la structure. L’accompagnement des entrepreneurs, cœur de métier de DoniLab, a pour but d’appuyer l’entrepreneur dans le processus de maturation de son idée de business, dans la structuration de son projet ainsi que son entrée et sa croissance sur le marché.
        </p>
       </AboutParagraph>
      </AboutHero>
      <AboutHistoric>
      <HistoryparalaxImgtop src={Historyparalaximgtop} alt=""/>
        <HistoryparalaxImgbottom src={Historyparalaximgbottom} alt=""/>
        <HistoryVisionMissionIcon className="iconAbout" src={HistoryIcon} alt="Historic icon" />
        <h1>
        historique
       </h1>
        <p>
        Dr Tidiane Ball, médecin titulaire d’un doctorat en médecine, avec une spécialisation en informatique médicale a créé en 2009 Mali Santé et plus tard Doctix. Fort de ces succès, mais aussi et surtout motivé pour transmettre ses compétences, partager son expérience et mettre son réseau à profit, il fonda DoniLab en 2015. Aujourd’hui, DoniLab puise son énergie dans le formidable potentiel d’innovation et d’action de la jeunesse malienne. DoniLab s’améliore et apprend chaque jour à leur coté et nous employons toute notre énergie au service de leurs projets afin de créer de la valeur localement à travers l’impulsion et le développement des projets entrepreneuriaux dans tous les secteurs.Dr Tidiane Ball, médecin titulaire d’un doctorat en médecine, avec une spécialisation en informatique médicale a créé en 2009 Mali Santé et plus tard Doctix. Fort de ces succès, mais aussi et surtout motivé pour transmettre ses compétences, partager son expérience et mettre son réseau à profit, il fonda DoniLab en 2015. Aujourd’hui, DoniLab puise son énergie dans le formidable potentiel d’innovation et d’action de la jeunesse malienne. DoniLab s’améliore et apprend chaque jour à leur coté et nous employons toute notre énergie au service de leurs projets afin de créer de la valeur localement à travers l’impulsion et le développement des projets entrepreneuriaux dans tous les secteurs.
        </p>
      </AboutHistoric>
      <AboutVision>
       
        <HistoryVisionMissionIcon className="iconAbout" src={VisionIcon} alt="Visionicon" />
        <h1>
        vision
       </h1>
        <p>
        Faire de DoniLab la structure d’accompagnement de l’entreprenariat innovant de référence de la sous-région à travers des services de qualité permettant à un nombre important de jeunes entrepreneurs de lancer et de faire croître sainement leurs entreprises
        </p>
      </AboutVision>
      <AboutMission>
      <MissionParalaxeImgBottom src={MissionParalaxeBottom} alt=""/>
        <MissionParalaxeImgRight src={MissionRightParalaxeImg} alt=""/>
        <HistoryVisionMissionIcon className="iconAbout" src={MissionIcon} alt="Historic icon" />
        <h1>
        mission
       </h1>
        <p>
        La mission de DoniLab consiste à accompagner les jeunes vers l’entrepreneuriat, en favorisant les projets créant de la valeur ajoutée pour le Mali. L’ambition étant aussi de constituer le chaînon manquant entre la start-up et l’entreprise rentable à travers des programmes d’accélération de croissance, de renforcement des compétences clés de l’entrepreneur et de ses collaborateurs  afin de les accompagner vers le succès.
        </p>
      </AboutMission>
      {
        loading ? <Loading/> : error ? <MessageBox>erreur de chargement .</MessageBox> :(
          hubs.map((hub,index)=>(
            index === 0  && (<TeamSection about="about" hub={hub}/> )  
            ))
        )
      }

      <DoniEvent/>
      </AboutWrapper>
    </AboutContainer>
  )
}
