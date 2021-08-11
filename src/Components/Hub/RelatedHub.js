import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { listHubs } from '../../actions/HubActions';
import { CurrentLangContext } from '../../Context/CurrentLangContext';
import Loading from '../Loading';
import MessageBox from '../MessageBox';
import RealatedHubparalaxImgbottomsvg from "./../../assets/svg/RealatedHubparalaxImgbottom.svg";


const RelatedHubsSection = styled.div`
padding:4rem;
text-align:center;
/* display:flex;
flex-direction:column;
justify-content:center; */
position:relative;

h1{
  font-family:"CeraRoundPro-Bold";
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
`;

const RelatedLinkCss = css`
background-color:#95B71D;
border-radius:15px;
color:#fff;
padding:.7rem 1.3rem;
font-family:"CeraRoundPro-Bold";
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
  const dispatch = useDispatch()
  const hubList = useSelector((state) => state.hubList)
  const value = useContext(CurrentLangContext);
  const {currentLang} = value


  const { loading, error, hubs } = hubList;

  useEffect(() => {
    dispatch(listHubs(currentLang))
  }, [dispatch,currentLang])

  return (
    <RelatedHubsSection>
      <RealatedHubparalaxImgbottom src={RealatedHubparalaxImgbottomsvg}/>
      <h1>
        {currentLang=== "en" ?"DISCOVER":"Découvrez"}
    <br />
    {currentLang=== "en" ?"OUR OTHER HUB!":"nos autres hub !"}
    </h1>

      <LinksRelateds>
        {
          loading ? <Loading></Loading> : error ? <MessageBox>erreur de chargement</MessageBox> :
            hubs.filter(item => item.id !== hub.id)
              .map(hubrelated => (
                <RelatedLink key={hubrelated.id} to={`/hub/${hubrelated.id}`}>
                  {hubrelated.title.rendered}
                </RelatedLink>
              ))

        }
      </LinksRelateds>
    </RelatedHubsSection>
  )
}

export default RelatedHub
