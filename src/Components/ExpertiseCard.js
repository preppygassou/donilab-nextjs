import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

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
function ExpertiseCard({item,index}) {
  return (
    
          <ExpertiseCardContent key={index} className="expertise">
              {/* <img src={item.icon} alt="" srcset=""/> */}
              <object id={item.icon} type="image/svg+xml" width="100" height="100" data={item.icon} className="svg default"> 
              </object>
              <object id={item.iconHover} type="image/svg+xml" width="100" height="100" data={item.iconHover} className="svg hover"> 
              </object>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <BtnLinkExpertiseCard to={item.link}>en savoir plus</BtnLinkExpertiseCard>
          </ExpertiseCardContent>
    
  )
}

export default ExpertiseCard
