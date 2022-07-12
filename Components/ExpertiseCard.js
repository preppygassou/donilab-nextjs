import parse from "html-react-parser";
import React, { useContext } from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { CurrentLangContext } from "../Context/CurrentLangContext";
import { useRouter } from "../node_modules/next/router";

const ExpertiseCardContent = styled.div`
border-right:2px solid #E3E3E3;
position: relative;
display:flex;
word-wrap: break-word;
justify-content:center;
align-content: center;
align-items: center;
flex-direction:column;
text-align:center;
padding:1.7rem;
/* width:100%;
height:60vh; */
@media (max-width: 1199px) { 
 border:none
}
width: 100%;
min-height: 100%;
color:#2755A1;
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


@media (max-width: 900px) {
border:none
}


object.hover{
display:none
}
&:hover > .donilab-expertise_thumnail object.hover {
      display: block;
     }
&:hover > .donilab-expertise_thumnail object.default {
      display: none;
     }
    
&:hover > a {
  color:#fff;   
  border:2px solid #fff;
}
a{
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
}
.donilab-expertise_thumnail{
  margin-top: 20px;
  padding: 0 30px;
}
.donilab-expertise__title{
  margin-top: 20px;
  /* padding: 0 30px; */
  /* display:flex;
  align-items:center;
  justify-content:center; */
}
.donilab-expertise__title h3{
  font-size:24px;
  font-weight: 700;
}
.donilab-expertise_description{
  margin-top: 10px;
}
.donilab-expertise_description p{
    word-wrap: break-word;
    font-size:17px;
   
/* margin-bottom:2rem; */
font-weight: 500;
/* display:flex;
align-items:center;
justify-content:center; */

}
.donilab-expertise_link {
  margin-top: auto;
  padding: 20px 30px 20px 30px;
margin-bottom: 0;
}
`;

function ExpertiseCard({ item }) {

  const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale

  return (
    <>

      <ExpertiseCardContent className="donilab-expertise-card" >

        <div className="donilab-expertise_thumnail">
          <object id={item.acf.icone_normal.id} type="image/svg+xml" width="100" height="100" data={item.acf.icone_normal.url} className="svg default">
          </object>
          <object id={item.acf.icone_onhover.id} type="image/svg+xml" width="100" height="100" data={item.acf.icone_onhover.url} className="svg hover">
          </object>

        </div>
        <div className="donilab-expertise__title">
          <h3 className="card-title"> {item.title.rendered}</h3>

        </div>
        <div className="donilab-expertise_description">
          {parse(item.excerpt.rendered)}
        </div>

        <div className="donilab-expertise_link">
          <Link className="expertise-link-action" href="/expertise">
            {locale === "en" ? "find out more" : "en savoir plus"}
          </Link>
        </div>

      </ExpertiseCardContent>
    </>

  )
}

export default ExpertiseCard
