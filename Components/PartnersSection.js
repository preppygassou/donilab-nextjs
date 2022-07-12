import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import SectionTitle from "./SectionTitle"
import PartnersSlider from './PartnersSlider';
import { PartenaireContext } from '../services/partenaire/partenaire.context';
import { CurrentLangContext } from '~/Context/CurrentLangContext';


const PartnerSection = styled.div`
background-color:#fff;
padding:4rem 0;
overflow:hidden;
`;



function PartnersSection() {
  const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale
  const { state } = useContext(PartenaireContext);
  const {partenaires,loading,error} =  state


  return (
    <PartnerSection>
      <SectionTitle>

        {
          locale === "en" ?
          <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_PARTNERS-EN.svg'} className="">
          </object> :
           <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_PARTNERS-FR.svg'} className="">
           </object>
           }
      </SectionTitle>
      {
        loading ? <div className='loading-overlay' ><div className="loading"></div></div> :
        <PartnersSlider PartnersData={partenaires} />
      }
      
    </PartnerSection>
  )
}

export default PartnersSection;

