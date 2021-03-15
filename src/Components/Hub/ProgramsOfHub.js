import React from 'react'
import styled, { css } from 'styled-components/macro';
import ProgramTopParalaxeImgFull from "./../../assets/svg/ProgramTopParalaxeImgFull.svg";
import ProgramHubIcone from "./../../assets/svg/ProgramHubIcone.svg";


const ProgramOfHubSection = styled.section`
padding:4rem;
text-align:center;
position:relative;
background-color:#2755A1;
color:#fff;
h1{
  font-family:"CeraRoundPro-Bold";
  font-size:3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    color:#fff;

}
`;
const ProgramHeadContent = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding-top:8vh;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;

const ProgramParalaxImgbottom = styled.img`
position:absolute;
bottom: 0;
left:0;
width: 200px;

`;
const ProgramPisionMissionIcon = styled.img`
width:100px;
`;
const ProgramOfHubContainer = styled.div`
 margin:0 auto;
width:800px;
text-align:center;
`;
const ProgramOfHubListsContent = styled.div` 
width:100%;
text-align:center;
p{
  margin:1rem 0;
}

`;
const ProgramOfHubLists = styled.div`

  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
.logoprogramhub{
  display:flex;
  justify-content:center;
  align-items:center;
  margin:1rem;
  width:180px;
  height: 180px;
  background-color:#fff;
  border-radius:50%;
}

img{

  width:150px;
  
}

`;

function ProgramsOfHub({ hub }) {
  return (
    <ProgramOfHubSection>
      <ProgramParalaxImgbottom src={ProgramTopParalaxeImgFull} alt="" />
      <ProgramHeadContent>
        <ProgramPisionMissionIcon className="" src={ProgramHubIcone} alt="program icon" />
        <h1>les programmes du hub</h1>
      </ProgramHeadContent>
      <ProgramOfHubContainer>
        <ProgramOfHubListsContent>
          <p>{hub.acf.description_programme_hub} </p>
          <ProgramOfHubLists>
            {
              hub.acf.programmes_par_hub.map((program,index) => (
                <div key={index} className="logoprogramhub">
                  <img src={program.logo.url} alt={program.name} />
                </div>
              ))
            }
          </ProgramOfHubLists>
        </ProgramOfHubListsContent>
        <ProgramOfHubListsContent>
          <p>{hub.acf.description_programme_partenariat} </p>
          <ProgramOfHubLists>
            {
              hub.acf.programmes_en_partenariat.map((program,index) => (
                <div key={index} className="logoprogramhub">
                  <img src={program.logo.url} alt={program.name} />
                </div>
              ))
            }
          </ProgramOfHubLists>
        </ProgramOfHubListsContent>
      </ProgramOfHubContainer>
    </ProgramOfHubSection>
  )
}

export default ProgramsOfHub
