import React, { Component } from "react";
import styled,{css} from 'styled-components'
//import ArrowLeftIcon from "/assets/svg/arowleft.svg"
//import ArrowRighthIcon from "/assets/svg/arowright.svg"

const arrowButton = css`

cursor:pointer;
margin-right:1rem;
user-select:none;
transition:0.3s;
&:hover{
transform:scale(1.05);
}
`;

const PrevArrow = styled.img`
${arrowButton}
position:absolute;
bottom: 43%;
left: 5%;
z-index: 2;
width: 70px;
`;
const NextArrow = styled.img`
position:absolute;
bottom:0;
left:40%;
${arrowButton}
left: 145vh;
z-index: 2;
`;

const SliderButtons = styled.div `

display:flex;
justify-content:space-between;
align-items:center;
position:absolute;
left: 16vh;
top:46vh;

`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      // if domLoaded is true if means we are not longer at the server-side.
      domLoaded: false,
      // itemWidth will be the average width of our Carousel items
      // Its default to 0 as we don't have access to it at the beginning
      itemWidth: 0,
      // container width will be the total width of our entire Carousel component.
      containerWidth: 0,
      // slidesToShow will be the number of items we are showing to the user at a time.
      slidesToShow: 0,
      // slidesToSlide means how many slides we are sliding at a time.
      slidesToSlide: 1,
      // currentSlide is the current index of our arrow of Carousel items
      // which we are using later on in conjunction with the transform property.
      currentSlide: 0,
      // totalItems is the total number of Carousel items we have in the Carousel, this is done
      // by the React.Children api.
      totalItems: React.Children.count(props.children),
      // deviceType will either be "mobile", "tablet" or "desktop".
      deviceType: "",
      // transform here will be used in conjunction with "translate3d"
      transform: 0,
      // breakpoint here is hard-coded for the sake of simplicity
      // for screen size that's larger than 900px, and smaller than 3000px, we are showing 3 items at the time.
      // at 500px to 900px screen sizes and at less than 500px screen size we are showing 2 items and one item repspectively
      breakpoint: {
        desktop: { min: 900, max: 3000, itemsToShow: 3 },
        tablet: { min: 500, max: 900, itemsToShow: 2 },
        mobile: { min: 0, max: 500, itemsToShow: 1}
      }
    };
  }
  
  next(){
    const { slidesToShow, slidesToSlide, containerWidth } = this.state;
    const itemWidth = containerWidth / slidesToShow;
    // the reason for the 1 is because our index starts at 0.
    const nextItems = this.state.currentSlide + 1 + slidesToShow;

    if (nextItems <= this.state.totalItems) {
      // if we are not reaching the end of the Carousel.
      const nextCarouselPosition =
        -itemWidth * (this.state.currentSlide + slidesToSlide);
     // notice that our nextCarouselPosition will be a nagative value
      this.setState({
        transform: nextCarouselPosition,
        currentSlide: this.state.currentSlide + slidesToSlide
      });
    } else {
      this.setState({
        transform: 0,
        currentSlide: 0
      });
    }
    console.log(this.state)
  }

  previous() {
    const { slidesToShow, slidesToSlide, containerWidth } = this.state;
    const itemWidth = containerWidth / slidesToShow;
    const previousItems = this.state.currentSlide - slidesToSlide;
    if (previousItems >= 0 ) {
      // if we are not passing the beginning of the Carousel.
      const nextCarouselPosition =
        -itemWidth * previousItems;
      this.setState({
        transform: nextCarouselPosition,
        currentSlide: previousItems
      });
    } else {
      const nextItems = this.state.totalItems - slidesToShow;
      const nextCarouselPosition = -itemWidth * nextItems;
      // otherwise, we want to go straight to the end of the Carousel to achieve the infinite effects.
      this.setState({
        transform: nextCarouselPosition,
        currentSlide: nextItems
      });
    }
  }

  componentDidMount() {
    // our React codes have been executed and downloaded by the browser 
    this.setState({ domLoaded: true });
  }

  render() {
    // children will be all of our Carousel items.
    const deviceType = 'desktop' // presuming this deviceType is the result after our user-agent detection for the sake of simplicity.
    let itemWidth;
    const isServerSide = !this.state.domLoaded && deviceType;
    if (isServerSide) {
      itemWidth = (100 / this.state.breakpoint[deviceType].itemsToShow).toFixed(1);
      // we are on desktop, then the item width here will be 33.3% based // on our pre-defined breakpoint that we declared in the constructor.
    } else {
      itemWidth = this.state.containerWidth / this.state.slidesToShow;
    }
    const { children } = this.props;
    return (
      <>
      <div>
        <ul
          style={{
          listStyle: "none",
         padding: 0,
         margin: 0,
         display: "flex",
         alignItems: "center",
         transition: 'all .5s',
         overflow: isServerSide ? "hidden" : "unset",
         transform: `translate3d(${this.state.transform}px,0,0)`
          }}
        >
          {React.Children.toArray(children).map((child, index) => (
            <li
              style={{
                flex: isServerSide ? `1 0 ${itemWidth}%` : "auto",
                width: !isServerSide ? `${itemWidth}px` : "auto"
              }}
              key={index}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>
      <SliderButtons>
            <PrevArrow  onClick={() => this.previous()} src={"/assets/svg/arowleft.svg"}/>
            <NextArrow onClick={() => this.next()} src={"/assets/svg/arowright.svg"}/>
          </SliderButtons>
      </>
    );
  }
}
export default Carousel;