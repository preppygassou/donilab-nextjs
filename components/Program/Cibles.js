import React, { useContext } from 'react'
import styled from 'styled-components/';
import parse from "html-react-parser";
import { useParams } from 'next/navigation';



const CibleSection = styled.div `
background-color:#FFFFFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
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
    margin: 2.5vh 0 1vh 0;
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
}

`;


const CibleparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 0;
width: 310px;
@media (max-width:900px){
width: 201px;
}
@media (max-width:500px){
width: 190px;
}

`;
const CibleparalaxImgbottom = styled.img `
position:absolute;
bottom: 0;
right:0;
width: 200px;
@media (max-width:768px){
width: 150px;
}

`;
const CibleVisionMissionIcon = styled.img `

width: 100px;
@media (max-width:768px){
width: 80px;

}
`;


function Cibles({program}) {
  const params = useParams()
  const { locale} = params;
  

  return (
      <CibleSection>
        <CibleparalaxImgtop src={"/assets/svg/cibleparalaximgtop.svg"} alt=""/>
        <CibleparalaxImgbottom src={"/assets/svg/cibleparalaximgbottom.svg"} alt=""/>
        <CibleVisionMissionIcon className="" src={"/assets/svg/Cibleicone.svg"} alt="Historic icon" />
        <h1>
          {locale === "en" ? "targets" : "cibles"}
        </h1>
        <div className="cibleslistes">
          <ul>
            {
              program?.targets?.map(target => (
                <li key={target.id}>
                  {locale === "en" ? target.en : target.fr} - {locale === "en" ?"Achieved":"Réalisé"} {target.value}
                </li>
              ))
            }
          </ul>
        </div>
      </CibleSection>
  )
} 

export default Cibles