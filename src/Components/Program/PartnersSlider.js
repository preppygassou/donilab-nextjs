import React from 'react'
import styled,{css} from 'styled-components/macro'
import Slider from "react-slick";

const PartnersContainer = styled.div `
margin-bottom:10vh;
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
 width:200px;
`;

const settings = {
  infinite: true,
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll:1,
  arrows:false,
  speed: 500,
     
      
};

function PartnersSlider({program}) {
  return (
    <PartnersContainer>
    <Slider {...settings}>
          {
            program.acf.les_partenaires_du_programmes.map((partner,index)=>(
              <Partner key={index}>
                <PartnerImg src={partner.logo.url} alt={partner.logo.name} />
              </Partner>
            ))
          }
          
        </Slider>
        </PartnersContainer>
  )
}

export default PartnersSlider
