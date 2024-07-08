import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
//import ArrowLeftIcon from "/assets/svg/arowleft.svg"
//import ArrowRighthIcon from "/assets/svg/arowright.svg"

const CarouselContainer = styled.div`
width: 100%;
height:100%;
    display: flex;
    flex-direction: column;
`;
const CarouseWrapper = styled.div`
display: flex;
    width: 100%;
    height:100%;
    position: relative;
`;
const CarouselContentWrapper = styled.div`
 overflow: hidden;
    width: 100%;
    height: 100%;

    .carousel-content {
    display: flex;
    width: 100%;
    height: 100%;
    align-items:center;
    transition: all 250ms linear;
    -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
    scrollbar-width: none;  /* hide scrollbar in Firefox */
}

/* hide scrollbar in webkit browser */
.carousel-content::-webkit-scrollbar, .carousel-content::-webkit-scrollbar {
    display: none;
}

.carousel-content > * {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    flex-grow: 1;
}

.carousel-content.show-2 > * {
    width: 50%;
}

.carousel-content.show-3 > * {
    width: calc(100% / 3);
}

.carousel-content.show-5 > * {
    width: calc(100% / 5);
}
.carousel-content.show-6 > * {
    width: calc(100% / 6);
}
`;

const SliderButtons = styled.div`
width:100%;
margin-top:13vh;
display:flex;
justify-content:center;
align-items:center;
`;
const arrowButton = css`
cursor:pointer;
z-index:10;
margin-right:1rem;
user-select:none;
transition:0.3s;
&:hover{
transform:scale(1.05);
}
`;

const PrevArrow = styled.img`
${arrowButton}

width: 70px;
`;
const NextArrow = styled.img`
${arrowButton}
width: 70px;
`;

const CarouselCenter = (props) => {
  const { children, show } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)
  const [active, setActive] = useState(2);
  const timeout = useRef(null);
  const [touchPosition, setTouchPosition] = useState(null)
  const [totalItems, setTotalItems] = useState(React.Children.count(children))
 


  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])



  const nextSlide = () => {
    if (timeout.currentIndex) {
      clearTimeout(timeout.currentIndex)
    }
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
   // setCurrentIndex(prevState => prevState + 1)
    setActive(currentIndex === length - 1 ? 3 : active + 1)
    
  }

  const prevSlide = () => {
    if (timeout.currentIndex) {
      clearTimeout(timeout.currentIndex)
    }
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
    //setCurrentIndex(prevState => prevState - 1)
    setActive(currentIndex === 0 ? length - 1 : active - 1)

  }

  const next = () => {
    if (currentIndex < (length - show)) {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
      /* setCurrentIndex(prevState => prevState + 1) */
      setActive(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
      /* setCurrentIndex(prevState => prevState - 1) */
      setActive(prevState => prevState - 1)
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(null)
  }

  if (!Array.isArray(children) || children.length <= 0) {
    return null;
  }

  return (
    <CarouselContainer className="carousel-container">
      <CarouseWrapper className="carousel-wrapper">

        <CarouselContentWrapper
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
          >
           
              {children.map((child, index) => (
                <div
                  key={index}
                  className={index === active ? "active":"slider"}
                >
                  {child}
                </div>
              ))}
            
            {/* {children} */}
          </div>
        </CarouselContentWrapper>
        {/* You can alwas change the content of the button to other things */}
        {/*  {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }
                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                } */}
        
      </CarouseWrapper>
      <SliderButtons>
          <PrevArrow onClick={prevSlide} src={"/assets/svg/arowleft.svg"} />
          <NextArrow onClick={nextSlide} src={"/assets/svg/arowright.svg"} />
        </SliderButtons>
    </CarouselContainer>
  )
}

export default CarouselCenter