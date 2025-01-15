"use client"

import React, { useContext, useEffect, useState } from "react";
import styled, { css } from 'styled-components';
import MessageBox from "../../components/MessageBox";
import Layout from "../../components/Layout";
import dynamic from 'next/dynamic';
import { GeneralContext } from "../../../../services/general/general.context";
import { CurrentLangContext } from "@/Context/CurrentLangContext";
import { useParams } from "next/navigation";
import { useSite } from "@/hooks/useSites";
import LoadingPage from "@/components/global/loading-page";
/* import { site } from "../../components/siteData"; */
const ContactPage = styled.section`
`;

const HeroContact = styled.div`
  text-align:left;
  background-color: #2755a1;
  padding:10rem 10rem 7rem 10rem;
  h1 {
    font-family:"Cera Round Pro";
    font-size: 3rem;
    line-height: 1.16; 
    font-size: 3rem;
    
    letter-spacing: -0.03em;
    color: rgb(255, 255, 255);
  }
  @media  (max-width: 900px) {
    padding:5rem;
    h1{
    font-size: 2rem;

    }

}
@media  (max-width: 400px) {
  padding:3rem 2rem;

    }
`;

const ContactSection = styled.section`
 /*  display: flex;
  justify-content: center;
  position: relative;
  padding: 10vh; */
  padding:4rem 10rem;
  @media  (max-width: 900px) {
    padding:4rem 4rem;

    }
  @media  (max-width: 400px) {
    padding:4rem 2rem;

    }

  h1{
    font-family:"Cera Round Pro";
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
  grid-gap:1rem;
  width: 100%;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows:1fr;
  @media  (max-width: 900px) {
    grid-template-columns:1fr;
}
`;
const Channel = styled.div`

  text-align: left;
  p{
    word-wrap:wrap;
  }
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
const GoToDonilab = styled.div`
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
  flex-wrap:wrap;
  @media  (max-width: 300px) {
    
}
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
color:#fff;
}
margin:.5rem;
width:55px;
height:55px;
`;
const FooterSocialImg = styled.img`
  padding-left: 15px;
`;

function Contact() {

  const params = useParams<{ locale: string; }>()
  const { locale} = params;
 const { data: site, isLoading, error } = useSite("dml");

  return (
    <>
    {
      isLoading?<LoadingPage/>:
    <Layout data={site} footer={site?.data?.footer}>
      {site&&<ContactPage>
        {
   <>
            <HeroContact>

              <h1> {site?.data?.contact_page.title[locale]}</h1>
            </HeroContact>
            <ContactSection>
              <ContactInfoContainer>

                <Channels>
                  <Channel>
                    <h1>{site?.data?.contact_page.contact[0].title[locale]}</h1>
                    <p>
                      {site?.data?.contact_page.contact[0].description[locale]}

                    </p>
                    <ChannelLink href={site?.data?.contact_page.contact[0].link.url} target="_blank" rel="noopener noreferrer">
                      {
                        site?.data?.contact_page.contact[0].link.title[locale]
                      }
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </ChannelLink>
                  </Channel>
                  <Channel>
                    <h1>{site?.data?.contact_page.contact[1].title[locale]}</h1>
                    <p>
                      {site?.data?.contact_page.contact[1].description[locale]}

                    </p>
                    <ChannelLink href={site?.data?.contact_page.contact[1].link.url} target="_blank" rel="noopener noreferrer">
                      {
                        site?.data?.contact_page.contact[1].link.title[locale]
                      }
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </ChannelLink>
                  </Channel>

                </Channels>
                <hr className="Channel_Divider" />

                <GoToDonilab>
                  <Channel>
                    <h1>{site?.data?.contact_page.contact[2].title[locale]}</h1>
                    <p>
                      Sotuba ACI 2000 <br /> Bamako, Mali
                    </p>
                    <ChannelLink href="https://goo.gl/maps/FSLUzaFMUvnsJaZv8" target="_blank" rel="noopener noreferrer">
                      {site?.data?.contact_page.contact[2].link.title[locale]}
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </ChannelLink>
                  </Channel>
                </GoToDonilab>

                <hr className="Channel_Divider" />
                <SocialLinks>
                  <h1>{site?.data?.contact_page.contact[3].title[locale]}</h1>
                  <p>
                    {site?.data?.contact_page.contact[3].description[locale]}
                  </p>
                  <FooterSocial>
                    <FooterSocialLink href="https://www.facebook.com/donilab.officiel" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
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
                </SocialLinks>
              </ContactInfoContainer>

            </ContactSection>
          </>
        }
      </ContactPage>}
    </Layout>
     }
    </>
  );
}




export default Contact;

