import React, { useContext } from 'react'
import styled from 'styled-components';
import ExpertiseSection from '../Components/Dexpertise/ExpertiseSection'
import Link from 'next/link';
import parse from "html-react-parser";
import { ExpertiseContext } from '../services/expertise/expertise.context';


const ExpertiseContainer = styled.div `

`;
const ExpertiseContainerWrapper = styled.div `

`;
const FakeMarging = styled.div `
margin-top: -61vh;
@media (max-width: 768px) { 
  margin-top: -70vh;
  }
@media (max-width: 500px) {
  
  margin-top: -75vh;

  }
.expertsect{
  background-color:transparent;
}
`;

const AllExpertisesSection = styled.section `

`;
const ExpertiseHeroSection = styled.section `

`;
const Acceleration = styled.div `
display:flex;
@media (max-width:900px){
  flex-direction:column;
}
`;
const ContentInfo = styled.div `
color:#2755A1;
display:flex;
flex-direction:column;
padding-left: 20vh;
    height: 60%;
    padding-right: 20vh;
    @media (max-width:900px){
      padding-left: 4vh;
    height: 100%;
    padding-right: 4vh;
      
    }
    h1{
      font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
  margin:1vh 0;
  @media (max-width:768px){
     
      font-size: 2rem;
      
    }
  
    }
    p{
      margin:1vh 0;
    }
    h4{
      margin:1vh 0;
    }
    ul{
      margin:1vh 0;  
    }
    object{
      width:100px;
      @media (max-width:900px){
       margin-top:2vh;
        width:80px;
      
    }
    
  
  justify-content:center;
  h1{
    font-size: 1.8rem;

  }
}
`;
const Etude = styled.div `
display:flex;
@media (max-width:900px){
  flex-direction:column;
}
`;
const Coworking = styled.div `

display:flex;
@media (max-width:900px){
  flex-direction:column;
}

`;
const Fablab = styled.div `
display:flex;
@media (max-width:900px){
  flex-direction:column;
}
`;
const FablabLink = styled(Link) `
color:#fff;
background-color: #2755A1;
border-radius:30px;
padding:.5rem 1rem;
font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
  text-decoration:none;
  text-align:center;
  width:300px;
  margin:2vh 0;
  @media (max-width:768px){
    font-size: 1rem;
    width:200px;

}
`;

const ImgHero = styled.div `
height: 60%;
img{
  object-fit:cover;
  width: 500px;
}
@media (max-width:900px){
 display:none;
}
`;

const ExpertiseHero = styled.section `
background-color:#2755A1;
height: 80vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
color:#fff;
padding-top:2vh;
`;
const ExpertiseParagraph = styled.div `
text-align:center;
width:95vh;
p{
  margin:0  2vh 2vh 0;
}
`;
const ExpertiseheroparalaxeLeft  = styled.img `
position:absolute;
top:0;
right:0;
width:350px;
transform: rotateY(180deg);
@media (max-width: 900px) {
  
  width:250px;

  }
@media (max-width: 768px) {
  
  width:150px;

  }
transform: rotateY(180deg);
@media (max-width: 500px) {
 
  width:100px;

  }
`;
const ExpertiseheroparalaxeRight = styled.img `
position:absolute;
top: 78px;
left:0;
width:400px;
@media (max-width: 900px) {
  
  width:250px;

  }
@media (max-width: 768px) {
  
  width:150px;

  }
transform: rotateY(180deg);
@media (max-width: 500px) {
 
  width:100px;

  }

`;

function Dexpertise() {
  const { state } = useContext(ExpertiseContext);
  const {expertises,loading,error} =  state

  return (
    <ExpertiseContainer>
        <ExpertiseContainerWrapper>
        <ExpertiseHero>
        <ExpertiseheroparalaxeLeft src={"/static/assets/svg/aboutheroleftparalaxe.svg"} alt=""/>
        <ExpertiseheroparalaxeRight src={"/static/assets/svg/aboutherorightparalaxe.svg"} alt=""/>
      </ExpertiseHero>

      <AllExpertisesSection>
        <FakeMarging>
      <ExpertiseSection expertise="true"/>
     
      {
        expertises.map((expertise,index)=>(
        index === 0 ? <Acceleration>
        <ContentInfo>
        <object  type="image/svg+xml" width="100" height="100" data={expertise.acf.icone_normal.url} className="svg"> 
        </object>
        <h1>{expertise.title.rendered}</h1>
        <p>{expertise.acf.description_expertise}</p>
        <h4>
        {expertise.acf.resume_aspects}
        </h4>
        <>
        {parse(expertise.acf.liste_des_aspects)}
        </>
        </ContentInfo>
        <ImgHero>
        <img src={expertise.fimg_url} alt=""/>
        </ImgHero>
      </Acceleration>
      : index === 1 ? <Etude>
      <ImgHero>
        <img src={expertise.fimg_url} alt=""/>
        </ImgHero>
        <ContentInfo>
        <object  type="image/svg+xml" width="100" height="100" data={expertise.acf.icone_normal.url} className="svg"> 
        </object>
        <h1>{expertise.title.rendered}</h1>
        <p>{expertise.acf.description_expertise}</p>
        <h4>
        {expertise.acf.resume_aspects}
        </h4>
        <>
        {parse(expertise.acf.liste_des_aspects)}
        </>
        </ContentInfo>   
      </Etude> : index === 2 ? <Coworking>
      <ContentInfo>
        <object  type="image/svg+xml" width="100" height="100" data={expertise.acf.icone_normal.url} className="svg"> 
        </object>
        <h1>{expertise.title.rendered}</h1>
        <p>{expertise.acf.description_expertise}</p>
        <h4>
        {expertise.acf.resume_aspects}
        </h4>
        <>
        {parse(expertise.acf.liste_des_aspects)}
        </>
        </ContentInfo>
        <ImgHero>
        <img src={expertise.fimg_url} alt=""/>
        </ImgHero>
      </Coworking> : <Fablab>
      <ImgHero>
        <img src={expertise.fimg_url} alt=""/>
        </ImgHero>
        <ContentInfo>
        <object  type="image/svg+xml" width="100" height="100" data={expertise.acf.icone_normal.url} className="svg"> 
        </object>
        <h1>{expertise.title.rendered}</h1>
        <p>{expertise.acf.description_expertise}</p>
        <h4>
        {expertise.acf.resume_aspects}
        </h4>
        <>
        {parse(expertise.acf.liste_des_aspects)}
        </>
        <FablabLink>
        Visiter le FABLAB
        </FablabLink>
        
        </ContentInfo>
        
      </Fablab>
        ))
      }
      
      
      
      </FakeMarging>
      </AllExpertisesSection>
      </ExpertiseContainerWrapper>
    </ExpertiseContainer>
  )
}

export default Dexpertise
