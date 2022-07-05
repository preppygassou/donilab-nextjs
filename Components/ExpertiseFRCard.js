import parse from "html-react-parser";
import React, { useContext } from 'react'
import Link from 'next/link';;
import styled from 'styled-components'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { CurrentLangContext } from "../Context/CurrentLangContext";

const ExpertiseCardContent = styled.div`

position: relative;
display:flex;
word-wrap: break-word;
justify-content:center;
align-content: center;
align-items: center;
flex-direction:column;
text-align:center;
padding:1.7rem;
width:100%;
height:60vh;
color:#2755A1;
border:2px #E3E3E3;
&:hover{
background-color:#2755A1;
color:#fff;
a{
color:#FFF;  
    border:2px solid #FFF;
}
}
object{
  margin:0 .5rem .5rem .5rem;
  display:flex;
  align-items:center;
  justify-content:center;
}
@media (max-width: 1450px) {
  p{
    word-wrap: break-word;
    font-size:17px;
   
margin-bottom:2rem;
font-weight: 500;
/* display:flex;
align-items:center;
justify-content:center; */

}
.card-title {
    margin:1.20rem 0;
    font-weight: 700;
    display:flex;
  align-items:center;
  justify-content:center;
}
}

/* h1{
  margin:.5rem;
  font-size:2rem;
  display:flex;
  align-items:center;
  justify-content:center;
}
p{
  margin:.5rem;
  display:flex;
  align-items:center;
  justify-content:center;

} */
/* h1{
  margin:.5rem;

  font-size:2rem;
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

} */
@media (max-width: 768px) {
 p{
  height:none;


 }
/*  h1{
   font-size:1rem;
  height:100%;

 } */

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
const BtnLinkExpertiseCard = styled(Link)`
  color:#95B71D;   
  font-size:16px;
  font-weight: bold;
  font-family:"Cera Round Pro";
  text-transform: uppercase;
  border:2.5px solid #95B71D;
  padding:.5rem 1rem;
  width:5vh;
  height:4vh ;
  margin-top:2rem;
  border-radius: 25px;
`;
const ExpertiseFRCard = ({ item }) => {
  const value = useContext(CurrentLangContext);
  const { currentLang } = value
  return (
    <>


      {/*   <Card
    body
    className="text-center expertiseCard"
    >
     
    <CardImg
      alt="Card image cap"
      src={item.acf.icone_normal.url}
      top
      width="100" height="100"
      className="svg default"
    />
    <CardImg
      alt="Card image cap"
      src={item.acf.icone_onhover.url}
      top
      width="100" height="100"
      className="svg hover"
    />
    <CardBody> 
      <CardTitle tag="h3">
      {item.title.rendered}
      </CardTitle>

      <CardText>
      {parse(item.excerpt.rendered)}
      </CardText>
      <BtnLinkExpertiseCard href="/expertise">
        {currentLang === "en" ? "find out more" : "en savoir plus"}
      </BtnLinkExpertiseCard>
    </CardBody>
  </Card> */}

      {/*   <ExpertiseCardContent key={item.id} className="expertise">

      <object id={item.acf.icone_normal.id} type="image/svg+xml" width="100" height="100" data={item.acf.icone_normal.url} className="svg default">
      </object>
      <object id={item.acf.icone_onhover.id} type="image/svg+xml" width="100" height="100" data={item.acf.icone_onhover.url} className="svg hover">
      </object>
      <h1>{item.title.rendered}</h1>
      {parse(item.excerpt.rendered)}
      <BtnLinkExpertiseCard href="/expertise">
        {currentLang === "en" ? "find out more" : "en savoir plus"}
      </BtnLinkExpertiseCard>
    </ExpertiseCardContent> */}

      <ExpertiseCardContent className="" >

        <object id={item.acf.icon_normal.id} type="image/svg+xml" width="100" height="100" data={item.acf.icon_normal.url} className="svg default">
        </object>
        <object id={item.acf.icon_hover.id} type="image/svg+xml" width="100" height="100" data={item.acf.icon_hover.url} className="svg hover">
        </object>
        <div className="">
          <h3 className="card-title"> {item.title.rendered}</h3>
          <>{parse(item.content.rendered)}</>
        </div>
      </ExpertiseCardContent>
    </>

  )
}

export default ExpertiseFRCard
