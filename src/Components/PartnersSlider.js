import React from 'react'
import styled,{css} from 'styled-components/macro'
import Slider from "react-slick";

const PartnersContainer = styled.div `

.slick-track{
  width:auto !important;
}

.slick-track{
  display:flex;
align-items:center;
justify-content:space-between;
margin-right: -23vh;
}
`;
const Partner = styled.div `
 
 margin:0 2rem;
`;

const PartnerImg = styled.img `
 width:250px;
`;

const settings = {
  infinite: true,
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll:1,
  arrows:false,
  speed: 500,
     
      
};

function PartnersSlider({PartnersData}) {
  return (
    <PartnersContainer>
    <Slider {...settings}>
          {
            PartnersData.map(partner=>(
              <Partner key={partner.id}>
                <PartnerImg src={partner.acf.logo_partenaire.url} alt={partner.title.rendered} />
              </Partner>
            ))
          }
          
        </Slider>
        </PartnersContainer>
  )
}

export default PartnersSlider
