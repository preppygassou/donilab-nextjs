import React from 'react'
import styled,{css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import ContactheroleftparalaxeImg from "./../assets/svg/paralaxetopherohub.svg"
import ContactherorightparalaxeImg from "./../assets/svg/paralaxebottomherohub.svg"
import SectionTitle from "../Components/SectionTitle"
import FbIcone from "./../assets/fbicone.png"
import TwIcone from "./../assets/twicone.png"
import LogoDonilab from "./../assets/logodonilabwhite.png"
import ContactIcone from "./../assets/contacticone.png"
import EmailIcone from "./../assets/emailicone.png"
import MapIcone from "./../assets/mapicone.png"


const ContactPage = styled.div `

`;
const ContactheroparalaxeLeft  = styled.img `
position:absolute;
top:0;
left:0;

`;
const HeroContact = styled.section `
display: flex;
  justify-content: center;
  align-items:center;
background-color:#2755A1;
height: 40vh;
`;

const ContactheroparalaxeRight = styled.img `
position:absolute;
right:0;

`;

const ContactSection = styled.section `
display:flex;
align-items:center;
padding:3vh 2vh;
`;
const ContactInfoContainer = styled.div `
width:50%;
`;
const ContactFormContainer = styled.div `
width:50%;
background-color:#fff;
padding:2vh;
`;
const FooterInfoContact = styled.div `
margin:2rem 0rem;
`;
const FooterInfoMap = styled.div `
margin:2rem 0rem;
`;
const FooterInfoMapIcone = styled.img `

`;
const FooterSocial = styled.div `
display:flex;
`;
const FooterSocialLink = styled(Link)`

`;
const FooterSocialImg = styled.img `
padding-left:15px;
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
    <FooterInfoContact>
           <div>
           <h1>Contactez-nous</h1>
           </div>
           <div>
            <div className="iconline">
              <span><FooterInfoMapIcone src={ContactIcone} alt="icone"/></span>
              <span>+223 70091609</span>
            </div>
            <div className="iconline">
              <span><FooterInfoMapIcone src={EmailIcone} alt="icone"/></span>
              <span>info@donilab.net</span>
            </div>
           </div>
         </FooterInfoContact> 
         <FooterInfoMap>
         <div>
           <h1>Se rendre à DONILAB</h1>
           </div>
           <div>
            <div className="iconline">
              <span><FooterInfoMapIcone src={MapIcone} alt="icone"/></span>
              <span>Sotuba ACI 2000 <br/> Bamako, Mali</span>
            </div>
           </div>
         </FooterInfoMap>
         <FooterInfoMap>
         <div>
           <h1>Nos reseaux sociaux</h1>
           </div>
           <FooterSocial>
        <FooterSocialLink ><FooterSocialImg src={FbIcone} alt="Facebook icone"/></FooterSocialLink >
        <FooterSocialLink ><FooterSocialImg src={TwIcone} alt="Facebook icone"/></FooterSocialLink >
      </FooterSocial>
           
         </FooterInfoMap>
    </ContactInfoContainer>

    <ContactFormContainer>
    <form action="send_mail" method="post">
        {/*id='contact-form' onClick={document.forms['contact-form'].submit('send_mail')}>*/} 
      
      <div>
      <div>
      	  <label for="nom">NOM</label>
      	  <input type="text" name="nom" required></input>
      </div>
      <div>
      	  <label for="prenom">PRENOM</label>
      	  <input type="text" name="prenom" required></input>
      </div> 
      </div>

      <div>
      <div>
      	  <label for="tel">TEL</label>
      	  <input type="tel" name="tel" required></input>
      </div>
      <div>
      	  <label for="email">EMAIL</label>
      	  <input type="email" name="email" required></input>
      </div>
      </div>
      <div>
      	  <input type="text" name="text" required></input>
      	  <label for="text">LE NOM DE VOTRE ENTREPRISE</label>
      </div>
     
      <div>
        <label for="message">COMMENT ON PEUT VOUS AIDES ?</label>
        <textarea type="text" name="message" required></textarea>
      </div>
      <div>
        <button type="submit">
        	<i class="material-icons">ENVOYEZ</i>
        </button>
      </div>
    </form>
    </ContactFormContainer>
      </ContactSection>
    </ContactPage>
  )
}

export default Contact
