import React, { useEffect, useState } from "react";
import GoToTopSvg from "./../assets/svg/gototop.svg"
import styled, { css } from "styled-components/macro";

const GotoTopContainer = styled.div`
position: absolute;
bottom:25%;
right:5%;
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
          <img src={GoToTopSvg} alt='Go to top'/>
        </div>}
    </GotoTopContainer>
  )
}

export default Scroll
