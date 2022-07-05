import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { ImpactData } from "../services/data/ImpactData";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import { CurrentLangContext } from "../Context/CurrentLangContext";
import { useRouter } from "../node_modules/next/router";


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
function ImpactSection() {
  const {t} = useTranslation('common')
  const [loading, setloading] = useState(false)
  const [impacts, setImpacts] = useState([])
  const value = useContext(CurrentLangContext);
  const {currentLang} = value
  const {locale} = useRouter()
  /* console.log("inimpact"+t+i18n) */
  const dispatch = useDispatch()
   
 /*  const FecthcurrentLang = ()=>(
    currentLang('i18nextLng') === "fr" ? setCurrentLang("fr") : setCurrentLang("en")
  ) */

   useEffect(() => { 
    setloading(true)
     axios.get(`https://blog.donilab.org/wp-json/wp/v2/impacts/?lang=${locale}`)      
     .then(res => 
       setImpacts(res.data) ,
       setloading(false) 
         ); 
   }, [locale])
  return (
    <ImpactSectionContainer>
      <SectionTitle white="true">
        {/* <h1>
        {t('n')}
          <span className="conectimg">
              o
              <svg id="Grupo_729" data-name="Grupo 729" xmlns="http://www.w3.org/2000/svg" width="128.639" height="143.869" viewBox="0 0 128.639 143.869">
  <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d"/>
  <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d"/>
  <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d"/>
</svg>

            </span>
            {t('tre')} {t('impact')} 
        </h1> */}
         {
          locale === "en" ?
          <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_impact-en.svg'} className="">
          </object> :
           <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_impact-fr.svg'} className="">
           </object>
           }
      </SectionTitle>
      <ImpactWrapper>
        {loading ? <div className='loading-overlay' ><div className="loading"></div></div> : impacts.map(impact => (
          <ImpactCard key={impact.id}>
            <img src={impact.fimg_url} alt="" />
            <h1>{impact.title.rendered}</h1>
            {parse(impact.excerpt.rendered)}
          </ImpactCard>
        ))}
      </ImpactWrapper>
    </ImpactSectionContainer>
  );
}

export default ImpactSection;
