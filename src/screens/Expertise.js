import React from 'react'
import styled from 'styled-components/macro';
import ExpertiseheroleftparalaxeImg from "./../assets/svg/aboutheroleftparalaxe.svg"
import ExpertiseherorightparalaxeImg from "./../assets/svg/aboutherorightparalaxe.svg"
import ExpertisesectionparalaxeImg from "./../assets/svg/expertisesectionparalaxe.svg"
import AccelerationImg from "./../assets/accelerationimg.png"
import EtudeImg from "./../assets/etudes.png"
import CoworkingImg from "./../assets/coworking.png"
import FablabImg from "./../assets/fablab.png"
import AccelerationIcon from './../assets/svg/icon-01.svg'
import EtudeIcon from './../assets/svg/EtudeIcon.svg'
import CoworkingIcon from './../assets/svg/icon-03.svg'
import FablabIcon from './../assets/svg/icon-04.svg'
import ExpertiseSection from '../Components/ExpertiseSection'
import { Link } from 'react-router-dom';


const ExpertiseContainer = styled.div `

`;
const ExpertiseContainerWrapper = styled.div `

`;
const FakeMarging = styled.div `
margin-top: -61vh;
.expertsect{
  background-color:transparent;
}
`;

const AllExpertisesSection = styled.section `

`;
const ExpertiseHeroSection = styled.section `

`;
const Acceleration = styled.div `
display:flex;
`;
const ContentInfo = styled.div `
color:#2755A1;
display:flex;
flex-direction:column;
padding-left: 20vh;
    height: 60%;
    padding-right: 20vh;
    h1{
      font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
  margin:1vh 0;
  
    }
    p{
      margin:1vh 0;
    }
    h4{
      margin:1vh 0;
    }
    ul{
      margin:1vh 0;  
    }
`;
const Etude = styled.div `
display:flex;
`;
const Coworking = styled.div `

display:flex;

`;
const Fablab = styled.div `
display:flex;
`;
const FablabLink = styled(Link) `
color:#fff;
background-color: #2755A1;
border-radius:30px;
padding:.5rem 1rem;
font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
  text-decoration:none;
  text-align:center;
  width:300px;
  margin:2vh 0;
`;

const ImgHero = styled.div `
height: 60%;
img{
  object-fit:cover;
  width: 500px;
}
`;

const ExpertiseHero = styled.section `
background-color:#2755A1;
height: 80vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
color:#fff;
padding-top:2vh;
`;
const ExpertiseParagraph = styled.div `
text-align:center;
width:95vh;
p{
  margin:0  2vh 2vh 0;
}
`;
const ExpertiseheroparalaxeLeft  = styled.img `
position:absolute;
top:0;
right:0;
width:350px;
transform: rotateY(180deg);
`;
const ExpertiseheroparalaxeRight = styled.img `
position:absolute;
top: 78px;
left:0;
width:400px;
transform: rotateY(180deg);

`;

function Expertise() {
  return (
    <ExpertiseContainer>
        <ExpertiseContainerWrapper>
        <ExpertiseHero>
        <ExpertiseheroparalaxeLeft src={ExpertiseheroleftparalaxeImg} alt=""/>
        <ExpertiseheroparalaxeRight src={ExpertiseherorightparalaxeImg} alt=""/>
      </ExpertiseHero>

      <AllExpertisesSection>
        <FakeMarging>
      <ExpertiseSection expertise="true"/>
      <Acceleration>
        <ContentInfo>
        <object  type="image/svg+xml" width="100" height="100" data={AccelerationIcon} className="svg"> 
        </object>
        <h1>accélération</h1>
        <p>L’accompagnement des entrepreneurs est le cœur de métier de DoniLab. Une attention particulière y est accordée afin d’assurer les succès des entreprises. D’un programme à un autre, l’accompagnement peut être individuel ou en groupe. Destiné aux entreprises déjà crées, les programmes d’accélération de DoniLab ont pour but d’appuyer le développement commercial et financier des entreprises à fort potentiel de croissance.
        </p>
        <h4>
         L’entrepreneur passe par un diagnostic rigoureux de ses besoins et l’identification de ses défis afin de personnaliser l’accompagnement qui prend en compte les aspects suivants :
        </h4>
        <ul>
          <li>L’accompagnement pré-création ;</li>
          <li>Le renforcement des compétences (collecte de fonds, recrutement, propriété intellectuelle, marketing, ventes, utilisation des outils de gestions efficaces)</li>
          <li>La viabilité économique du projet ;</li>
          <li>L’intégration économique ;</li>
          <li>Le suivi régulier de l’accompagnement;</li>
          <li>Conseils de pairs, de coaches et de mentors;</li>
          <li>Préparation aux opportunités de financement; Networking … </li>
        </ul>
        </ContentInfo>
        <ImgHero>
        <img src={AccelerationImg} alt=""/>
        </ImgHero>
      </Acceleration>
      <Etude>
      <ImgHero>
        <img src={EtudeImg} alt=""/>
        </ImgHero>
        <ContentInfo>
        <object  type="image/svg+xml" width="100" height="100" data={EtudeIcon} className="svg"> 
        </object>
        <h1>études et <br/> conseils</h1>
        <p>Nous accompagnons les entrepreneurs, les professionnels et les entreprises, installés ou l’envisageant, à obtenir des informations fiables sur leurs marchés.  Aux études de marché, nous associons des études de faisabilités techniques, commerciales et financières.
        En fonction des besoins de nos clients, nous formulons des conseils & stratégies afin de leurs permettre d’obtenir un avantage concurrentiel significatif et durable. Nous conseillons sur les volets organisationnels, juridiques et fiscaux, économiques et financiers.
        </p>
        <h4>
         L’entrepreneur passe par un diagnostic rigoureux de ses besoins et l’identification de ses défis afin de personnaliser l’accompagnement qui prend en compte les aspects suivants :
        </h4>
        <ul>
          <li>L’accompagnement pré-création ;</li>
          <li>Le renforcement des compétences (collecte de fonds, recrutement, propriété intellectuelle, marketing, ventes, utilisation des outils de gestions efficaces)</li>
          <li>La viabilité économique du projet ;</li>
          <li>L’intégration économique ;</li>
          <li>Le suivi régulier de l’accompagnement;</li>
          <li>Conseils de pairs, de coaches et de mentors;</li>
          <li>Préparation aux opportunités de financement; Networking … </li>
        </ul>
        </ContentInfo>
        
      </Etude>
      <Coworking>
        <ContentInfo>
        <object  type="image/svg+xml" width="100" height="100" data={CoworkingIcon} className="svg"> 
        </object>
        <h1>coworking</h1>
        <p>L’accompagnement des entrepreneurs est le cœur de métier de DoniLab. Une attention particulière y est accordée afin d’assurer les succès des entreprises. D’un programme à un autre, l’accompagnement peut être individuel ou en groupe. Destiné aux entreprises déjà crées, les programmes d’accélération de DoniLab ont pour but d’appuyer le développement commercial et financier des entreprises à fort potentiel de croissance.
        </p>
        <h4>
         L’entrepreneur passe par un diagnostic rigoureux de ses besoins et l’identification de ses défis afin de personnaliser l’accompagnement qui prend en compte les aspects suivants :
        </h4>
        <ul>
          <li>L’accompagnement pré-création ;</li>
          <li>Le renforcement des compétences (collecte de fonds, recrutement, propriété intellectuelle, marketing, ventes, utilisation des outils de gestions efficaces)</li>
          <li>La viabilité économique du projet ;</li>
          <li>L’intégration économique ;</li>
          <li>Le suivi régulier de l’accompagnement;</li>
          <li>Conseils de pairs, de coaches et de mentors;</li>
          <li>Préparation aux opportunités de financement; Networking … </li>
        </ul>
        </ContentInfo>
        <ImgHero>
        <img src={CoworkingImg} alt=""/>
        </ImgHero>
      </Coworking>
      <Fablab>
      <ImgHero>
        <img src={FablabImg} alt=""/>
        </ImgHero>
        <ContentInfo>
        <object  type="image/svg+xml" width="100" height="100" data={FablabIcon} className="svg"> 
        </object>
        <h1>fablab</h1>
        <p>Laboratoire de fabrication numérique, servant de lieu d’apprentissage et d’expérimentation et de prototypage des nouvelles technologies. C’est un espace équipé avec des outils de robotique et numériques, pour permettre aux jeunes d’imaginer et de créer à travers les technologies des solutions aux défis du Mali.
        </p>
        <h4>
        À travers son Fablab, Donilab cherche à faire émerger les meilleures inventions technologiques du Mali !
        </h4>
        <p>
        Plus de 15 innovations y sont nées dans le domaine de la santé, de la gestion des ressources humaines, de l’agriculture, ou encore de la sécurité automobile.
        </p>
        <FablabLink>
        Visiter le FABLAB
        </FablabLink>
        
        </ContentInfo>
        
      </Fablab>
      </FakeMarging>
      </AllExpertisesSection>
      </ExpertiseContainerWrapper>
    </ExpertiseContainer>
  )
}

export default Expertise
