import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';

const GotoTopContainer = styled.div`
position: absolute;
bottom:30%;
right:5%;
z-index: 10000;
img{

  width:70px;
}
`;
const ContactPage = styled.section`

`;


function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <GotoTopContainer className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <img src={"/static/assets/svg/gototop.svg"} alt='Go to top'/>
        </div>}
    </GotoTopContainer>
  )
}

export default Scroll
