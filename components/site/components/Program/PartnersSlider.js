import React from 'react'
import styled, { css } from 'styled-components'
import Slider from "react-slick";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const PartnersContainer = styled.div`
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
const Partner = styled.div`
 
 margin:0 2rem;
`;

const PartnerImg = styled.img`
 width:200px;
`;

const settings = {
  infinite: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  speed: 500,
};

function PartnersSlider({ program }) {
  return (
    <PartnersContainer>
      {
        program.acf.les_partenaires_du_programmes.length < 5 ? (
          <Carousel

            slidesPerPage={program.acf.les_partenaires_du_programmes.length}
            breakpoints={{
              768: {
                slidesPerPage: 1,
              },
              900: {
                slidesPerPage: 2,
              }
            }}

          >
            {
              program.acf.les_partenaires_du_programmes.map((partner, index) => (
                <Partner key={index}>
                  <PartnerImg src={partner.logo.url} alt={partner.logo.name} />
                </Partner>
              ))
            }

          </Carousel>
        ) : (
          <Carousel

            slidesPerPage={5}
            infinite
            autoPlay={2000}
            animationSpeed={1000}
            stopAutoPlayOnHover={true}
            breakpoints={{
              640: {
                slidesPerPage: 1,
              },
              900: {
                slidesPerPage: 2,
              }
            }}

          >
            {
              program.acf.les_partenaires_du_programmes.map((partner, index) => (
                <Partner key={index}>
                  <PartnerImg src={partner.logo.url} alt={partner.logo.name} />
                </Partner>
              ))
            }

          </Carousel>
        )
      }

    </PartnersContainer>
  )
}

export default PartnersSlider
