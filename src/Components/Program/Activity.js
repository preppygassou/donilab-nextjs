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
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}

.cibleslistes ul li{
  margin-top:1rem;
padding-left:-0.5em;

}

`;


const CibleVisionMissionIcon = styled.img `
width:100px;
`;

function Activity({program}) {
  return (
    <div>
      <ActivitySection>
      
        <CibleVisionMissionIcon className="" src={ActivityProgramsvg} alt="Historic icon" />
        <h1>
        activités menées
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
