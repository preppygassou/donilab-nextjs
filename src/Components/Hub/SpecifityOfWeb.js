import React from 'react'
import styled,{css} from 'styled-components/macro'
import SpecifyIcone from "./../../assets/svg/specifityicone.svg";
import SpecifityTopParalaxeImgTop from "./../../assets/svg/SpecifityTopParalaxeImgTop.svg";
import SpecifityTopParalaxeImgFull from "./../../assets/svg/SpecifityTopParalaxeImgFull.svg";
import PropTypes from 'prop-types';





const SpecifityContent = styled.div `
display:flex;
flex-direction:column;
justify-content:space-around;

align-items:center;
`;

const SpecifityContentCard = css `
display:flex;
width:90vh;
height: 30vh;
margin:3vh auto;
border-radius:20px;
`;
const SpecifityContentCardOne = styled.div `
${SpecifityContentCard}
`;
const SpecifityContentCardTwo = styled.div `
${SpecifityContentCard}

`;
const SpecifitySection = styled.div `

`;
const SpecifityContentBox = styled.div `
background-color:#94B61D;
color:#fff;
padding:2rem;
width:60vh;
height: 100%;

`;
const SpecifityContentImage = styled.div `
width:30vh;
height: 100%;
img{
  object-fit:cover;
width:30vh;
height: 100%;

}
`;
const SpecifityHeadContent = styled.div `

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding-top:8vh;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;

const SpecifityParalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 45px;
width: 310px;

`;
const SpecifityParalaxImgbottom = styled.img `
position:absolute;
top: -8rem;
right:0;
width: 125px;

`;
const SpecifityPisionMissionIcon = styled.img `


`;


function SpecifityOfWeb({hub}) {
  return (
    <SpecifitySection>
      <SpecifityParalaxImgtop src={SpecifityTopParalaxeImgTop} alt=""/>
        <SpecifityParalaxImgbottom src={SpecifityTopParalaxeImgFull} alt=""/>
     <SpecifityHeadContent>
        <SpecifityPisionMissionIcon className="" src={SpecifyIcone} alt="Historic icon" />
      <h1>les spécificités du hub</h1>
     </SpecifityHeadContent>
     <SpecifityContent>
       {
         hub.acf.specificite_du_hub.map((specificite,index)=>(
           index === 0 ? (
            <SpecifityContentCardOne>
            <SpecifityContentBox>
               <h1>{specificite.titre_du_specificite_du_hub}</h1>
               <p>{specificite.description_du_specificite_du_hub}
                   </p>
            </SpecifityContentBox>
            <SpecifityContentImage>
               <img src={specificite.imgae_illustrative_du_specificite_du_hub.sizes.large} alt=""/>
            </SpecifityContentImage>
           </SpecifityContentCardOne>
           ) :(
            <SpecifityContentCardTwo>
            <SpecifityContentImage>
            <img src={specificite.imgae_illustrative_du_specificite_du_hub.sizes.large} alt=""/>
             </SpecifityContentImage>
             <SpecifityContentBox>
             <h1>{specificite.titre_du_specificite_du_hub}</h1>

             <p>{specificite.description_du_specificite_du_hub}
                   </p>
             </SpecifityContentBox>
             
            </SpecifityContentCardTwo>
           )
           ))
       }
       
       
     </SpecifityContent>
    </SpecifitySection>
  )
}


SpecifityOfWeb.propTypes = {
  hub: PropTypes.object.isRequired
}


export default SpecifityOfWeb
