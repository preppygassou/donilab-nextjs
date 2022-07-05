import React, { useContext } from 'react'
import styled from 'styled-components/';
import parse from "html-react-parser";
import { CurrentLangContext } from '../../Context/CurrentLangContext';


const ActivitySection = styled.div `
background-color:#95B71D;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#FFF;
text-align:center;
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

.cibleslistes ul li{
  margin-top:1rem;
padding-left:-0.5em;

}

`;


const CibleVisionMissionIcon = styled.img `
width:100px;
@media (max-width:768px){
width: 80px;

}
`;

function Activity({program}) {
  const value = useContext(CurrentLangContext);
  const {currentLang} = value

  return (
    <div>
      <ActivitySection>
      
        <CibleVisionMissionIcon className="" src={"/static/assets/svg/ActivityProgramsvg.svg"} alt="Historic icon" />
        <h1>
  {currentLang=== "en" ?"activities carried out":"activités menées"}

        
       </h1>
        <div className="cibleslistes">
        {
          parse(program.acf.activites)
        }
        </div>
      </ActivitySection>
    </div>
  )
}

export default Activity
