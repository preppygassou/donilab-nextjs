import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import SectionTitle from "./SectionTitle";
import parse from "html-react-parser";
import { ImpactContext } from "../../../services/impact/impact.context";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";


const ImpactSectionContainer = styled.section`

  background-color: #2755a1;
  height: 100%;
  padding:5vh 0 9vh 0;
`;
const ImpactWrapper = styled.div`
  margin: 7vh auto 0 auto;
  max-width: 1140px;
  display: grid;
  grid-template-columns:repeat(4,1fr);
  /* grid-auto-rows: 1fr; */
  grid-gap:2rem;
  align-items:baseline;
  
@media (max-width: 768px)  {
  max-width:80% ;
  grid-template-columns: 1fr;
  margin: 3vh auto 0 auto;
}

@media (min-width:  769px) and (max-width: 1280px) {
  margin: 3vh auto 0 auto;
  grid-template-columns: repeat(2, 1fr); 
}
`;

const ImpactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  width: 100%;
  
  h1 {
    font-family: "Cera Round Pro";
    font-weight: bold;
    font-size: 6rem;
  }
  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
  img {
    width: 130px;
  }

  @media (min-width:  769px) and (max-width: 1280px) {
  h1{
    font-size: 4rem;
  }
  p{
    font-size: 1.2rem;
  }
  margin-top:2vh;

  }
  @media (max-width: 768px)  {
  margin-top:1vh;
  h1{
    font-size: 4rem;
  }
  p{
    font-size: 1.1rem;
  }
 
}
`;

/* const SectionTitle =styled.div`
color: #fff;
 text-align:center;
  position: relative;
  padding-top:6vh;

h1{
  font-family:"Cera Round Pro";
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
}
 img{
 position: absolute;
 width: 95px;
 left: 66vh;
 bottom: 0vh;
}
span{
 color: #95B71D;
}

`; */
function ImpactSection({impacts}:{impacts:any}) {

  const params = useParams<{ locale: string; }>()
  const { locale} = params;
   
  return (
    <ImpactSectionContainer>
      <SectionTitle white="true">
         {
          locale === "en" ?
          <object type="image/svg+xml" width="500px" height="100" data={'/assets/svg/title/title_impact-en.svg'} className="">
          </object> :
           <object type="image/svg+xml" width="500px" height="100" data={'/assets/svg/title/title_impact-fr.svg'} className="">
           </object>
           }
      </SectionTitle>
      <ImpactWrapper>
        {
        impacts.map(impact => (
          <ImpactCard key={impact.id}>
            <img src={impact.icon.url} alt={impact.total}/>
            <h1>{impact.total}</h1>
            {impact.description[locale]}
            {/* {parse(impact.description[locale])} */}
          </ImpactCard>
        ))}
      </ImpactWrapper>
    </ImpactSectionContainer>
  );
}

export default ImpactSection;
