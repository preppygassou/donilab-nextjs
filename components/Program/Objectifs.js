import React, { useContext } from 'react'
import styled from 'styled-components/';
import parse from "html-react-parser";
import { useRouter } from 'next/navigation';


const ObjectifsSections = styled.section`
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

p {
margin: 0 0 2.5vh 0;
@media (max-width:360px){
  font-size: 0.8rem;

}
}

h3{
  margin:3vh;
}
.Objectiftitle{
  font-family:"Cera Round Pro";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    @media (max-width:768px){
  font-size: 2rem;
  margin: 2vh 0;
  @media (max-width:360px){
  font-size: 1.8rem;

}

}
}

`;
const ObjectifsTitle = styled.h1`
background-color:#95B71D;
border-radius:20px;
padding:0.8rem 1rem;
color:#fff;
font-size: 1.7rem;
text-transform: uppercase;
margin: 2.5vh 0 3vh 0;
font-family:"Cera Round Pro";
@media (max-width:768px){
  font-size: 1rem;

}
@media (max-width:360px){
  font-size: 0.9rem;

}


`;
const Objectifsparalaxtop = styled.img `
position:absolute;
top:0;
left:0;
width: 399px;
@media (max-width:768px){
width: 200px;
}
@media (max-width:500px){
width: 190px;
}
`;
const Objectifsparalaxbottom = styled.img `
position:absolute;
bottom:0;
right:0;
width: 248px;
@media (max-width:768px){
width: 150px;
}
`;
const ObjectifsIcone = styled.img `
width: 100px;
@media (max-width:768px){
width: 80px;

}
`;


function Objectifs({program}) {
  const { locale } = useRouter();
  
  
  return (
    <ObjectifsSections>
      <Objectifsparalaxtop src={"/assets/svg/Objectifsparalaximgtop.svg"} alt=""/>
      <Objectifsparalaxbottom src={"/assets/svg/Objectifsparalaximgbottom.svg"} alt=""/>
      <ObjectifsIcone src={"/assets/svg/objectifssvg.svg"} alt=""/>
      <h1 className="Objectiftitle">
      {locale=== "en" ?"Goals":"objEctifs"}
      </h1>
      <ObjectifsTitle>
      {locale=== "en" ?"GLOBAL Goals":"objectif GLOBAL"}

      </ObjectifsTitle>

      <h3>
      {locale=== "en" ?"The Goals objectives associated with the program are:":"Les objectifs global associés au programme sont : "}

      </h3>
    
      {program?.objectif?.global?.map((obj) => (
        <p key={obj.id}>
          {locale === "en" ? obj.en : obj.fr}
        </p>
      ))}

      <ObjectifsTitle>
      {locale=== "en" ?"Specific objectives":"objectifs spécifiques"}
           
      </ObjectifsTitle>
      <h3>
      {locale=== "en" ?"The specific objectives associated with the program are:":"Les objectifs spécifiques associés au programme sont : "}

      </h3>
      {program?.objectif?.specifiques?.map((obj) => (
        <p key={obj.id}>
          {locale === "en" ? obj.en : obj.fr}
        </p>
      ))}

    </ObjectifsSections>
  )
}

export default Objectifs
