import React, { useContext } from 'react'
import styled from 'styled-components/';
import parse from "html-react-parser";
import { useParams, useRouter } from 'next/navigation';


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
text-align: left;
}
p{
  margin-bottom: .2rem;
}
`;


const CibleVisionMissionIcon = styled.img `
width:100px;
@media (max-width:768px){
width: 80px;

}
`;

function Activity({program}) {
  const params = useParams()
  const { locale} = params;

  const translateStatus = (status) => {
    if (locale === "fr") {
      switch (status) {
        case 'planned':
          return 'prévu';
        case 'in_progress':
          return 'en cours';
        case 'completed':
          return 'terminé';
        case 'cancelled':
          return 'annulé';
        default:
            if (status === 'in_progress') {
            return 'in progress';
            }
            return status;
      }
    }
    return status;
  };

  return (
    <div>
      <ActivitySection>
        <CibleVisionMissionIcon className="" src={"/assets/svg/ActivityProgramsvg.svg"} alt="Historic icon" />
        <h1>
          {locale === "fr" ? "activités menées" : "activities carried out"}
        </h1>
        <div className="cibleslistes">
          <ul>
            {program.activities.map(activity => (
              <li key={activity.id}>
               - {locale === "fr" ? activity.fr : activity.en} - {new Date(activity.startDate).toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' })} {locale === "fr" ? "au":"to" } {new Date(activity.endDate).toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' })} ({translateStatus(activity.status)})
              
              </li>
            ))}
          </ul>
        </div>
      </ActivitySection>
    </div>
  )
}

export default Activity
