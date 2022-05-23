import React from 'react'
import styled,{css} from 'styled-components/macro'
import Slider from "react-slick";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


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
/* ul li{
 margin:0 1rem !important;
} */
`;
const Partner = styled.div `
 

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
    <Carousel
    slidesPerPage={4}
    infinite
    autoPlay={2000}
  animationSpeed={1000}
  stopAutoPlayOnHover={true}
  offset={32}
  breakpoints={{
    768: {
      slidesPerPage: 1,
    },
    900: {
      slidesPerPage: 2,
      offset:0,
    }
  }}
    >
          {
            PartnersData === undefined ? [] :PartnersData.map(partner=>(
              <Partner key={partner.id}>
                <PartnerImg src={partner.acf.logo_partenaire.url} alt={partner.title.rendered} />
              </Partner>
            ))
          }
          
        </Carousel>
        </PartnersContainer>
  )
}

export default PartnersSlider
