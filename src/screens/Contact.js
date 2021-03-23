import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import ContactheroleftparalaxeImg from "./../assets/svg/paralaxetopherohub.svg";
import ContactherorightparalaxeImg from "./../assets/svg/paralaxebottomherohub.svg";
import SectionTitle from "./../Components/SectionTitle";
import FbIcone from "./../assets/fbicone.png";
import TwIcone from "./../assets/twicone.png";
import LogoDonilab from "./../assets/logodonilabwhite.png";
import ContactIcone from "./../assets/contacticone.png";
import EmailIcone from "./../assets/emailicone.png";
import MapIcone from "./../assets/mapicone.png";

const ContactPage = styled.section`

`;

const HeroContact = styled.div`
  text-align:left;
  
  background-color: #2755a1;
  padding:10rem 10rem 7rem 10rem;
  h1 {
    font-family:"CeraRoundPro-Bold";
    font-size: 3rem;
    line-height: 1.16; 
    font-size: 3rem;
    
    letter-spacing: -0.03em;
    color: rgb(255, 255, 255);
  }
`;

const ContactSection = styled.section`
 /*  display: flex;
  justify-content: center;
  position: relative;
  padding: 10vh; */
  padding:4rem 10rem;

  h1{
    font-family:"CeraRoundPro-Bold";
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin:3vh 0 3vh 0;
  color:#2755A1;
  font-size: 1.5rem;
line-height: 1.32;
 
  }
  p{
    margin:3vh 0 3vh 0;
    font-weight: 400;
letter-spacing: -0.01em;
font-size: 1.125rem;
line-height: 1.32;
  }


svg{
  margin: 0px 0px 0px 0.5rem;
  color: rgb(39,85,161);
}
`;
const ContactInfoContainer = styled.div`
  min-height: auto;
 /*  width: 80%;
  margin-left:auto;
  margin-right:auto; */
  .Channel_Divider {
    border: 1px solid rgba(17, 17, 17, 0.2);
    margin: 32px 0px;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`;
const ContactFormContainer = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 2vh;
`;
const Channels = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows:1fr;
`;
const Channel = styled.div`

  text-align: left;
`;
const ChannelLink = styled.a`
color: rgb(39, 85, 161);
font-weight: 500;
letter-spacing: -0.03em;
font-size: 1.125rem;
text-align: left;
text-decoration: none;
line-height: 1.35;
display: inline-flex;
-moz-box-align: center;
align-items: center;
background-repeat: no-repeat;
background-position: 0px 100%, 100% 100%;
background-size: 0px 8%, 100% 8%;
transition: background-size 0.2s ease-in-out 0s;
background-image: linear-gradient(120deg, rgb(39, 85, 161) 0%, rgb(39, 85, 161) 100%), linear-gradient(120deg, transparent, transparent);
    &:hover,&:focus {
    text-decoration: none;
    background-size: 100% 8%, 100% 8%;
    }
    i{
    padding-left:.5rem;
      transform:rotate(-37deg)
    }
`;
const goToDonilab = styled.div`
  margin: 2rem 0rem;
`;
const SocialLinks = styled.div`
  margin: 2rem 0rem;
`;
const FooterInfoMap = styled.div`
  margin: 2rem 0rem;
`;
const FooterInfoMapIcone = styled.img``;
const FooterSocial = styled.div`
  display: flex;
`;
const FooterSocialLink = styled.a`
background-color:rgb(39, 85, 161);
color:#fff;
display:flex;
align-items:center;
justify-content:center;
font-size: 1.8rem;
border-radius:50%;
transition:0.3s;
&:hover{
transform:scale(1.05);
}
margin:.5rem;
width:55px;
height:55px;
`;
const FooterSocialImg = styled.img`
  padding-left: 15px;
`;

function Contact() {
  return (
    <ContactPage>
      <HeroContact>
        <h1>Comment préférez-vous nous parler?</h1>
      </HeroContact>
      <ContactSection>
        <ContactInfoContainer>
          <Channels>
            <Channel>
              <h1>E-mail</h1>
              <p>
                Avez-vous un doute? Nous pouvons vous aider via notre canal de
                email.
              </p>
              <ChannelLink href="mailto:info@donilab.net" target="_blank" rel="noopener noreferrer">
                info@donilab.net
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </ChannelLink>
            </Channel>
            <Channel>
              <h1>Telephone</h1>
              <p>
                Vous pouvez appeler à tout moment au numéro ci-dessous. <br />
                Nous travaillons les jours ouvrables de 9h à 18h
              </p>
              <ChannelLink href="tel:info@donilab.net" target="_blank" rel="noopener noreferrer">
                +223 70091609
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </ChannelLink>
            </Channel>
          </Channels>
          <hr class="Channel_Divider" />

          <goToDonilab>
            <Channel>
              <h1>Se rendre à DONILAB</h1>
              <p>
                Sotuba ACI 2000 <br /> Bamako, Mali
              </p>
              <ChannelLink href="https://goo.gl/maps/FSLUzaFMUvnsJaZv8" target="_blank" rel="noopener noreferrer">
                Lien vers le map
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </ChannelLink>
            </Channel>
          </goToDonilab>
          <hr class="Channel_Divider" />
          <SocialLinks>
            <h1>Nos reseaux sociaux</h1>
            <p>
              Découvrez les nouveautés et recevez des conseils sur nos réseaux
              sociaux .
            </p>
            <FooterSocial>
              <FooterSocialLink href="https://www.facebook.com/donilab.officiel" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook-f"  aria-hidden="true"></i>
              </FooterSocialLink>
              <FooterSocialLink href="https://twitter.com/Donilab1" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
              </FooterSocialLink>
              <FooterSocialLink href="https://www.instagram.com/donilab1/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </FooterSocialLink>
              <FooterSocialLink href="https://www.instagram.com/donilab1/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              </FooterSocialLink>
            </FooterSocial>
          </SocialLinks>
        </ContactInfoContainer>
      </ContactSection>
    </ContactPage>
  );
}

export default Contact;
