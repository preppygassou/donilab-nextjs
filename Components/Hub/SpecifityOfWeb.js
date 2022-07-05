import React, { useContext } from 'react'
import styled,{css} from 'styled-components'
import PropTypes from 'prop-types';
import { CurrentLangContext } from '../../Context/CurrentLangContext';



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
@media (max-width:768px){
 height:100%;

}
`;

const SpecifityContentCard = css `
display:flex;
width:90vh;
height: 30vh;
margin:3vh auto;
border-radius:20px;
z-index:2;
@media (max-width:768px){
  width:100%;

}

`;
const SpecifityContentImageCss = css `
width:30vh;
height: 100%;
@media (max-width:768px){
  width:80%;
margin:0 auto;
height: 100%;

}
img{
  object-fit:cover;
width:30vh;
height: 100%;
@media (max-width:768px){
  width:100%;
  border-radius: 10px;

}

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
@media (max-width:768px){
  width:80%;
margin:1rem auto;
height: 100%;

}

`;

const SpecifityContentCardOne = styled.div `
${SpecifityContentCard}
@media (max-width:768px){
flex-direction:column-reverse;
}
.SpecifityContentImage{
  ${SpecifityContentImageCss}
  img{
    border-radius: 0px 10px 13px 0px;
    @media (max-width:768px){
  border-radius: 10px;

}
  }
}
.SpecifityContentBox{
${SpecifityContentBox}
border-radius: 10px 0 0 10px;
@media (max-width:768px){
  border-radius: 10px;
  height: 60vh;

}
}
`;
const SpecifityContentCardTwo = styled.div `
@media (max-width:768px){
flex-direction:column;
}
${SpecifityContentCard}
.SpecifityContentImage{
  ${SpecifityContentImageCss}
img{
  border-radius: 13px 0 0 10px;
  @media (max-width:768px){
  border-radius: 10px;

}
}
}
.SpecifityContentBox{
${SpecifityContentBox}
border-radius: 0 10px 10px 0;
@media (max-width:768px){
  border-radius: 10px;
  height: 60vh;
padding:1vh;

}
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
z-index:10;
@media (max-width:768px){
  padding-top:3vh;
  margin-bottom: 31vh;
}

h1{
  font-family:"Cera Round Pro";
z-index:10;

  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    @media (max-width:768px){
  font-size: 1.2rem;
  margin: 2vh 0;
       }

}
`;

const SpecifityParalaxImgtop = styled.img `
position:absolute;
top: 0;
right: 0;
width: 310px;
@media (max-width:1199px){
  width:180px;

}
/* @media (max-width:991px){
  width:200px;

} */
@media (max-width:768px){
  width:150px;

}
@media (max-width:500px){
  width:100px;

}

`;
const SpecifityParalaxImgbottom = styled.img `
position:absolute;
top: 0;
left:0;
height: 100%;
@media (max-width:768px){
  display:none;

}

`;
const SpecifityPisionMissionIcon = styled.img `
width:100px;
@media (max-width:768px){
width: 80px;
}
`;


function SpecifityOfWeb({hub}) {
  const value = useContext(CurrentLangContext);
  const {currentLang} = value
  return (
    <SpecifitySection>
      <SpecifityParalaxImgtop src={"/static/assets/svg/SpecifityTopParalaxeImgTop.svg"} alt=""/>
        <SpecifityParalaxImgbottom src={"/static/assets/svg/SpecifityTopParalaxeImgFull.svg"} alt=""/>
     <SpecifityHeadContent>
        <SpecifityPisionMissionIcon className="" src={"/static/assets/svg/specifityicone.svg"} alt="Historic icon" />
      <h1>
        
        {currentLang=== "en" ?"the specificities of the hub":"les spécificités du hub"}

      </h1>
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
