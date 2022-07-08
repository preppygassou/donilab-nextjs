import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { PartnersData } from '../services/data/PartnerData';
import SectionTitle from "./SectionTitle"
import PartnersSlider from './PartnersSlider';
import { connect, useDispatch, useSelector } from 'react-redux';
import { listPartenaires } from '../store/actions/PartenaireActions';
import { useTranslation } from 'next-i18next';import { useRouter } from '../node_modules/next/router';
import { PartenaireContext } from '../services/partenaire/partenaire.context';
;


const SectionTitletest = styled.div`
color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;

h1{
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
}
 img{
 position: absolute;
 width: 95px;
 left: 48vh;
 bottom: 0vh;

}
span{
 color: #95B71D;
}

`;
const PartnerSection = styled.div`
background-color:#fff;
padding:4rem 0;
overflow:hidden;
`;

const PartnersContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-right: -23vh;

`;
const Partner = styled.div`
 
 margin:0 2rem;
`;

const PartnerImg = styled.img`
 width:250px;
`;




function PartnersSection() {
  const {locale} = useRouter()
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

