import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { listHubs } from '../../actions/HubActions';
import Loading from '../Loading';
import MessageBox from '../MessageBox';
import RealatedHubparalaxImgbottomsvg from "./../../assets/svg/RealatedHubparalaxImgbottom.svg";


const RelatedHubsSection = styled.div`
padding:4rem;
text-align:center;
position:relative;
h1{
  font-family:"CeraRoundPro-Bold";
  font-size:3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    color:#2755A1;
}
`;
const LinksRelateds = styled.div`
display:flex;
justify-content:center;
`;

const RelatedLinkCss = css`
background-color:#95B71D;
padding:0.4rem;
border-radius:15px;
color:#fff;
padding:.7rem 1.3rem;
font-family:"CeraRoundPro-Bold";
  font-size:1.1rem;
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
`;
const RelatedHub = ({ hub }) => {
  const dispatch = useDispatch()
  const hubList = useSelector((state) => state.hubList)

  const { loading, error, hubs } = hubList;

  useEffect(() => {
    dispatch(listHubs())
  }, [dispatch])

  return (
    <RelatedHubsSection>
      <RealatedHubparalaxImgbottom src={RealatedHubparalaxImgbottomsvg}/>
      <h1>Découvrez
    <br />nos autres hub !
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
