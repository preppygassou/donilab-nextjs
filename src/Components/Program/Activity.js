import React from 'react'
import styled from 'styled-components/';
import ActivityProgramsvg from "./../../assets/svg/ActivityProgramsvg.svg";
import parse from "html-react-parser";


const ActivitySection = styled.div `
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


const CibleVisionMissionIcon = styled.img `


`;

function Activity({program}) {
  return (
    <div>
      <ActivitySection>
      
        <CibleVisionMissionIcon className="" src={ActivityProgramsvg} alt="Historic icon" />
        <h1>
        activités menées
       </h1>
        {
          parse(program.acf.activites)
        }
      </ActivitySection>
    </div>
  )
}

export default Activity
