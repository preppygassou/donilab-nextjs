import React, { useContext, useEffect } from 'react'

import Link from 'next/link';
import styled, { css } from 'styled-components';
import { listHubs } from '../../store/actions/HubActions';
import { useRouter } from 'next/router';
import MessageBox from '../MessageBox';
import { HubContext } from '~/services/hub/hub.context';
import { CurrentLangContext } from '~/Context/CurrentLangContext';



const RelatedHubsSection = styled.div`
padding:4rem;
background-color: ${(props) => props.background};
text-align:center;
/* display:flex;
flex-direction:column;
justify-content:center; */
position:relative;

h1{
  font-family:"Cera Round Pro";
  font-size:3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    color:#2755A1;
    @media (max-width:768px){
  font-size: 2rem;
  margin: 2vh 0;
       }
  @media (max-width:360px){
  font-size: 1.8rem;

}
}
`;
const LinksRelateds = styled.div`
display:flex;
justify-content:center;
@media (max-width:500px){
  flex-direction:column;
 
       }

       a{
        background-color:#95B71D;
border-radius:15px;
color:#fff;
padding:.7rem 1.3rem;
font-family:"Cera Round Pro";
  font-size:1.1rem;
  z-index:2;
  @media (max-width:768px){
  font-size: 0.9rem;
  margin:1vh;
    width:200px;
 
       }
    text-transform: uppercase;
    margin:3vh;
    width:225px;
    transition:0.3s;
&:hover{

transform:scale(1.05);
}
       }
`;

const RelatedLinkCss = css`
background-color:#95B71D;
border-radius:15px;
color:#fff;
padding:.7rem 1.3rem;
font-family:"Cera Round Pro";
  font-size:1.1rem;
  z-index:2;
  @media (max-width:768px){
  font-size: 0.9rem;
  margin:1vh;
    width:200px;
 
       }
    text-transform: uppercase;
    margin:3vh;
    width:225px;
    transition:0.3s;
&:hover{

transform:scale(1.05);
}
`;
const RelatedLink = styled(Link)`
${RelatedLinkCss}
`;

const RealatedHubparalaxImgbottom = styled.img`
position:absolute;
bottom: 0;
right:0;
width: 200px;
@media (max-width:768px){
  width: 150px;
       }
`;
const RelatedHub = ({ hub }) => {

  const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale
  
  const { state, dispatch } = useContext(HubContext);
  const { hubs, loading, error } = state

  return (
    <RelatedHubsSection background={hub?"none":"#E4E4E4"}>
      <RealatedHubparalaxImgbottom src={"/static/assets/svg/RealatedHubparalaxImgbottom.svg"}/>
      <h1>
        {locale=== "en" ?"DISCOVER":"Découvrez"}
    <br />
    {
      hub? locale=== "en" ?"OUR OTHER HUB!":"nos autres hub !" :
      locale=== "en" ?"OUR MALI HUB!":"nos hub AU MALI !" 
    }
    </h1>

      <LinksRelateds>
        {
          loading ? <div className="loading"/> : error ? <MessageBox>erreur de chargement</MessageBox> :hub?
            hubs.filter(item => item.id !== hub.id)
              .map(hubrelated => (
                <Link key={hubrelated.id} href={`/hub/${hubrelated.slug}`}>
                  {hubrelated.title.rendered}
                </Link>
              ))
              :hubs.map(hubrelated => (
                <Link key={hubrelated.id} href={`/hub/${hubrelated.slug}`}>
                  {hubrelated.title.rendered}
                </Link>
              ))

        }
      </LinksRelateds>
    </RelatedHubsSection>
  )
}

export default RelatedHub
