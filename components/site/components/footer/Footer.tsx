import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import Scroll from '../Scroll';
import { CurrentLangContext } from '../../../../Context/CurrentLangContext';
import { connect, useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { GeneralContext } from '../../../../services/general/general.context';


const FooterContainer = styled.div`
position: relative;
color:#fff;
`;

/* Top */
const FooterContainerTop = styled.div`
background-color:#2755A1;
display:flex;
/* justify-content:row; */

align-items: start;
padding:40px 50px 30px 50px;
@media (min-width: 768px) and (max-width: 1024px) {
  justify-content:space-between; 
  
}
@media (max-width: 767px) {
  
  flex-direction:column;

  
}
@media (max-width: 500px) {
padding:8px 40px 8px 40px;
}
`;
const FooterAbout = styled.div`
@media (min-width: 768px) and (max-width: 1024px) {
 width: auto;
}
@media (max-width: 767px) {
  
 width:100%;
 p{
  padding-right:0;
}
}
 width:32%;
p{
  padding-right:4rem;
}
`;
const FooterAboutLogo = styled.img`
width:150px;
margin-bottom:.5rem;
@media (max-width: 767px) {
  margin:4vh 0 1vh 0;
}
`;
const FooterMenu = styled.div`
width:32%;
display:flex;
flex-direction:column;
margin-left:13vh;

@media (max-width: 767px) {
  
  width:100%;
  margin-left:0;
  margin-top: 4vh;
   
 }

 a{
  color:#fff;
width:125px;
margin:.4rem;
font-family:"Cera Round Pro";
font-size:1rem;
font-weight: bold;
letter-spacing: .5px;
transition: all .2s linear;
 }

`;
const FooterMenuLinks = styled(Link)`
color:#fff;
width:125px;
margin:.4rem;
font-family:"Cera Round Pro";
font-size:1.4rem;
font-weight: bold;
letter-spacing: .5px;
transition: all .2s linear;

`;

const FooterInfo = styled.div`
width:32%;
@media (max-width: 767px) {
  
  width:100%;
   margin-top:1rem;
 }

h1{
  font-family:"Cera Round Pro";
  text-transform: uppercase;
  font-size:1rem;
  font-weight: bold;
  margin:.5rem 0;
}
img{
  width:15px;
  margin-right:.6rem;
}
.iconline{
  display:flex;
  align-items: center;
align-items: center;
}
`;
const FooterInfoContact = styled.div`
margin-bottom:2rem;
`;
const FooterInfoMap = styled.div`
margin:2rem 0rem;
`;
const FooterInfoMapIcone = styled.img`

`;


/* Bottom */
const FooterContainerBottom = styled.div`
padding:25px 50px 25px 50px;
background-color:#1D3969;
display:flex;
align-items: center;
justify-content:space-between;
color:#fff;
@media (max-width: 767px) {
 flex-direction:column;
padding:26px 5px 20px 5px;
 }
`;
const FooterCopyright = styled.div`
display:flex;
h3{
  font-family:"Cera Round Pro";
  @media (max-width: 767px) {
font-size: 1.2rem;  
 }
}
`;
const FooterSocial = styled.div`
display:flex;
`;
const FooterSocialLink = styled.a`
background-color:#fff;
color:rgb(29, 57, 105);
display:flex;
align-items:center;
justify-content:center;
font-size: 1.8rem;
border-radius:50%;
margin:.5rem;
width:52px;
height:52px;
transition:0.3s;
@media (max-width: 767px) {
  width:35px;
height:35px;
font-size: 1.3rem;  
 }
&:hover{
transform:scale(1.05);
}
`;
const FooterSocialImg = styled.img`
padding-left:15px;
`;

function Footer({generals}:{generals:any}) {

 const params = useParams<{ locale: string; }>()
 const { locale} = params;

  return (
    <>
    {
      /* loading ? <div className='loading-overlay' ><div className="loading"></div></div> : */ 
      
      generals && <FooterContainer>
      
      
      <FooterContainerTop>
        <FooterAbout>
          <div><FooterAboutLogo src={generals.logo.url} alt="Donilab logo" /></div>
          <div>
            <p>
              {generals.about[locale]}
            </p>
          </div>
        </FooterAbout>
        <FooterMenu>
          {generals.menu.map((item, index) => (
            <FooterMenuLinks href={item.link} key={index}>
              {item.title[locale]}
            </FooterMenuLinks>
          ))}
        </FooterMenu>
        <FooterInfo>
          {
            generals.information.map((info,index)=>(
              index === 0 ? <FooterInfoContact>
              <div>
                <h1>{info.title[locale]}</h1>
              </div>
              <div>
                {
                info.contact.map((item,index)=>(
                  <div key={item.id} className="iconline">
                  <span><FooterInfoMapIcone src={item.image.url} alt={item.title[locale]}/></span>
                  <span>{item.title[locale]}</span>
                </div>
                ))
                }
                {/* <div className="iconline">
                  <span><FooterInfoMapIcone src={ContactIcone} alt="icone" /></span>
                  <span>+223 70091609</span>
                </div>
                <div className="iconline">
                  <span><FooterInfoMapIcone src={EmailIcone} alt="icone" /></span>
                  <span>info@donilab.net</span>
                </div> */}
              </div>
            </FooterInfoContact> : <FooterInfoMap>
            <div>
              <h1>{info.title[locale]}</h1>
            </div>
            <div>
            {
                info.contact.map((item,index)=>(
                  <div key={index} className="iconline">
                  <span><FooterInfoMapIcone src={item?.image?.url} alt={item.title[locale]}/></span>
                  <span>Sotuba ACI 2000 <br/> Bamako, Mali</span>
                </div>
                ))
                }
            </div>
          </FooterInfoMap>
            ))
          }
          
          
        </FooterInfo>
      </FooterContainerTop>
      <FooterContainerBottom>
        <FooterCopyright>
          <h3>© 2024 DONILAB | </h3>
        </FooterCopyright>
        <FooterSocial>
              <FooterSocialLink href="https://www.facebook.com/donilab.officiel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"  aria-hidden="true"></i>
              </FooterSocialLink>
              <FooterSocialLink href="https://twitter.com/Donilab1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" aria-hidden="true"></i>
              </FooterSocialLink>
              <FooterSocialLink href="https://www.instagram.com/donilab1/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </FooterSocialLink>
              <FooterSocialLink href="https://www.instagram.com/donilab1/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              </FooterSocialLink>
        </FooterSocial>
      </FooterContainerBottom>
      <Scroll/>
    
    </FooterContainer>
  }
  </>)
}


export default Footer;
