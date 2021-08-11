import parse from "html-react-parser";
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'
import { CurrentLangContext } from "../Context/CurrentLangContext";

const ExpertiseCardContent = styled.div `
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
text-align:center;
padding:1.5rem;
width:100%;
color:#2755A1;
border:2px #E3E3E3;
&:hover{
background-color:#2755A1;
color:#fff;
}
object{
  margin:0 .5rem .5rem .5rem;
  display:flex;
  align-items:center;
  justify-content:center;
}
h1{
  margin:.5rem;
  word-wrap: break-word;
  height: 7vh;
  width: 58%;
  display:flex;
  align-items:center;
  justify-content:center;
}
p{
  margin:.5rem;
  width: 70%;
  height: 9vh;
  display:flex;
  align-items:center;
  justify-content:center;

}
@media (max-width: 768px) {
 p{
  height:100%;
  font-size:.9rem;

 }
 h1{
   font-size:1rem;
  height:100%;

 }

}
@media (max-width: 500px) {

}


object.hover{
display:none
}
&:hover > object.hover {
      display: block;
     }
&:hover > object.default {
      display: none;
     }
    
&:hover > a {
  color:#fff;   
  border:2px solid #fff;
}
`;
const BtnLinkExpertiseCard = styled(Link) `
  color:#95B71D;   
  font-size:13px;
  font-weight: bold;
  font-family:"CeraRoundPro-Bold";
  text-transform: uppercase;
  border:2px solid #95B71D;
  
  padding:.5rem 1rem;
  margin-top:2rem;
  border-radius: 25px;
`;
function ExpertiseCard({item}) {
  const value = useContext(CurrentLangContext);
  const {currentLang} = value
  return ( 
          <ExpertiseCardContent key={item.id} className="expertise">
              {/* <img src={item.icon} alt="" srcset=""/> */}
       
             <object id={item.acf.icone_normal.id} type="image/svg+xml" width="100" height="100" data={item.acf.icone_normal.url} className="svg default"> 
              </object>
              <object id={item.acf.icone_onhover.id} type="image/svg+xml" width="100" height="100" data={item.acf.icone_onhover.url} className="svg hover"> 
              </object>
            <h1>{item.title.rendered}</h1>
            {parse(item.excerpt.rendered)}
            <BtnLinkExpertiseCard to="/expertise">
        {currentLang === "en" ?"find out more":"en savoir plus"}             
            </BtnLinkExpertiseCard>
          </ExpertiseCardContent>
    
  )
}

export default ExpertiseCard
