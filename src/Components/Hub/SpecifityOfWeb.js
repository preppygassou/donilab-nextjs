import React from 'react'
import styled,{css} from 'styled-components/macro'
import SpecifyIcone from "./../../assets/svg/specifityicone.svg";
import SpecifityTopParalaxeImgTop from "./../../assets/svg/SpecifityTopParalaxeImgTop.svg";
import SpecifityTopParalaxeImgFull from "./../../assets/svg/SpecifityTopParalaxeImgFull.svg";
import PropTypes from 'prop-types';



const SpecifitySection = styled.div `
padding-bottom:8vh;
position:relative;
`;

const SpecifityContent = styled.div `
display:flex;
flex-direction:column;
justify-content:space-around;

align-items:center;
z-index: 1;
`;

const SpecifityContentCard = css `
display:flex;
width:90vh;
height: 30vh;
margin:3vh auto;
border-radius:20px;
z-index:2;
`;
const SpecifityContentImageCss = css `
width:30vh;
height: 100%;
img{
  object-fit:cover;
width:30vh;
height: 100%;

}
`;
const SpecifityContentBox = css`
background-color:#94B61D;
color:#fff;
padding:2rem;
width:60vh;
height: 100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;

`;

const SpecifityContentCardOne = styled.div `
${SpecifityContentCard}
.SpecifityContentImage{
  ${SpecifityContentImageCss}
  img{
    border-radius: 0px 10px 13px 0px;
  }
}
.SpecifityContentBox{
${SpecifityContentBox}
border-radius: 10px 0 0 10px;
}
`;
const SpecifityContentCardTwo = styled.div `
${SpecifityContentCard}
.SpecifityContentImage{
  ${SpecifityContentImageCss}
img{
  border-radius: 13px 0 0 10px;
}
}
.SpecifityContentBox{
${SpecifityContentBox}
border-radius: 0 10px 10px 0;
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
z-index:2;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;

const SpecifityParalaxImgtop = styled.img `
position:absolute;
top: 0;
right: 0;
width: 310px;

`;
const SpecifityParalaxImgbottom = styled.img `
position:absolute;
top: 0;
left:0;
height: 100%;

`;
const SpecifityPisionMissionIcon = styled.img `

width:100px;
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
            <div className="SpecifityContentBox">
               <h1>{specificite.titre_du_specificite_du_hub}</h1>
               <p>{specificite.description_du_specificite_du_hub}
                   </p>
            </div>
            <div className="SpecifityContentImage">
               <img src={specificite.imgae_illustrative_du_specificite_du_hub.sizes.large} alt=""/>
            </div>
           </SpecifityContentCardOne>
           ) :(
            <SpecifityContentCardTwo>
            <div className="SpecifityContentImage">
            <img src={specificite.imgae_illustrative_du_specificite_du_hub.sizes.large} alt=""/>
             </div>
             <div className="SpecifityContentBox">
             <h1>{specificite.titre_du_specificite_du_hub}</h1>

             <p>{specificite.description_du_specificite_du_hub}
                   </p>
             </div>
             
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
