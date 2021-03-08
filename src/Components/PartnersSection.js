import React, { useEffect } from 'react'
import styled,{css} from 'styled-components/macro'

import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import { PartnersData } from '../data/PartnerData';
import SectionTitle from "./SectionTitle"
import PartnersSlider from './PartnersSlider';
import Oconnect from "./../assets/svg/oconnect.svg";
import { useDispatch, useSelector } from 'react-redux';
import { listPartenaires } from '../actions/PartenaireActions';


const SectionTitletest =styled.div`
color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;

h1{
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
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
const PartnerSection = styled.div `
background-color:#fff;
padding:4rem;
overflow:hidden;
`;

const PartnersContainer = styled.div `
display:flex;
align-items:center;
justify-content:space-between;
margin-right: -23vh;

`;
const Partner = styled.div `
 
 margin:0 2rem;
`;

const PartnerImg = styled.img `
 width:250px;
`;




function PartnersSection() {
  const dispatch = useDispatch()
  const partenaireList = useSelector((state) => state.partenaireList)


  const { loading,error,partenaires } = partenaireList;


  useEffect(() => {
    dispatch(listPartenaires())
  }, [dispatch])

  return (
    <PartnerSection>
      <SectionTitle>

          <h1>
          n
          <span className="conectimg">
            <object
              style={{ fill: " #fff " }}
              id={Oconnect}
              type="image/svg+xml"
              width="100"
              height="100"
              data={Oconnect}
              className="svg"
            ></object>
          </span>
          s partenaires
        </h1>
        </SectionTitle>
       <PartnersSlider PartnersData={partenaires}/>
    </PartnerSection>
  )
}

export default PartnersSection
