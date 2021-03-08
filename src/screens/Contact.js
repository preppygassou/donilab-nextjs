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

const ContactPage = styled.div``;
const ContactheroparalaxeLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
const HeroContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2755a1;
  height: 40vh;
  h1 {
    font-size: 3rem;
    margin-top: 14vh;
  }
`;

const ContactheroparalaxeRight = styled.img`
  position: absolute;
  right: 0;
`;

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10vh;
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
line-height: 1.32
  }
  a{
    text-decoration: none;
    text-decoration-color: #2755A1;
line-height: 1.35;
display: inline-flex;
align-items: center;
background-repeat: no-repeat;
background-position: 0px 100%, 100% 100%;
background-size: 0px 8%, 100% 8%;
transition: background-size 0.2s ease-in-out 0s;
font-weight: 500;
letter-spacing: -0.03em;
font-size: 1.125rem;
  }
`;
const ContactInfoContainer = styled.div`
  min-height: auto;
  width: 80%;
  margin-left:auto;
  margin-right:auto;
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
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const Channel = styled.div`
  flex: 1 1 0%;
  text-align: left;
`;
const ChannelLink = styled(Link)`
    
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
const FooterSocialLink = styled(Link)``;
const FooterSocialImg = styled.img`
  padding-left: 15px;
`;

function Contact() {
  return (
    <ContactPage>
      <HeroContact>
        <SectionTitle white="true">
          <h1>Comment préférez-vous nous parler?</h1>
        </SectionTitle>
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
              <ChannelLink to="mailto:info@donilab.net">
                info@donilab.net
              </ChannelLink>
            </Channel>
            <Channel>
              <h1>Telephone</h1>
              <p>
                Vous pouvez appeler à tout moment au numéro ci-dessous. <br />
                Nous travaillons les jours ouvrables de 9h à 18h
              </p>
              <ChannelLink to="mailto:info@donilab.net">
                +223 70091609
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
              <ChannelLink to="mailto:info@donilab.net">
                Lien vers le map
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
              <FooterSocialLink>
                <FooterSocialImg src={FbIcone} alt="Facebook icone" />
              </FooterSocialLink>
              <FooterSocialLink>
                <FooterSocialImg src={TwIcone} alt="Facebook icone" />
              </FooterSocialLink>
            </FooterSocial>
          </SocialLinks>
        </ContactInfoContainer>
      </ContactSection>
    </ContactPage>
  );
}

export default Contact;
