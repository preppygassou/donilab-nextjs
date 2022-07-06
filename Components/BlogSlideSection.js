import React, { useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link';
import SectionTitle from "./SectionTitle"
import Slider from "react-slick";
import axios from 'axios'
import { connect, useDispatch, useSelector } from 'react-redux'
import Blogcard from "./Blogcard"
import { listPosts } from '../store/actions/PostActions'
/* import Carousel from './Carousel' */
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useTranslation } from 'next-i18next';
import { CurrentLangContext } from '../Context/CurrentLangContext'
import { useRouter } from 'next/router';



const BlogSection = styled.section`
animation: slideInFromBottom 1s ease-in;
position:relative;
padding:8vh 0;
background-color:#fff;
overflow:hidden;


`;
const BlogContainer = styled.div`
display: flex;
    width: 100%;
    /* margin-bottom: 13vh; */
    padding:0 0 0 32vh;
    @media  (max-width: 640px) {
  padding:0 0 0 8vh;

}
    @media (min-width: 769px) and (max-width: 1024px) {

      margin-bottom: 8vh;

}

@media (max-width: 768px)   {
  margin-bottom: 0vh;

}

 .BrainhubCarousel__container{
/* position:relative; */
 }
 ul{
   display:flex;
   align-items:start;
   /* margin-bottom: 15vh;
    margin-left: 33vh !important; */
 }
 ul li{
   list-style-type:none;
   
    @media  (max-width: 768px) {
 
  width:250px !important;
   max-width: 250px !important;
    min-width: 250px !important;
}
    
 }

 /* Carousel css */
 .slick-cloned{
   display:none;
 }
 .slick-slider{
 
  margin-bottom:5vh;
  margin-left: 60%;
}
 .slick-slide{
  width:auto !important;
}

.slick-list{
  width:auto !important;
}

.slick-track{
  width:auto !important;
  display:flex;
align-items:start;

}
`;
const BlogWrapper = styled.div`
overflow: hidden;
    width: 100%;
    height: 100%;
`;
const BlogSlide = styled.div`
    display: flex;
    align-items:flex-start;
    transition: all 250ms linear;
    margin-left: 32vh;
    -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
    scrollbar-width: none;  /* hide scrollbar in Firefox */
    &::-webkit-scrollbar, .carousel-content::-webkit-scrollbar {
    display: none;
    }

    @media (min-width: 1281px) { 
      margin-left: 25vh;
   
}

@media (min-width: 769px) and (max-width: 1024px) {

  margin-left: 19vh;

}

@media (max-width: 768px)   {
  margin-left: 16vh;
}

@media (min-width:  1025px) and (max-width: 1280px) {
  margin-left: 23vh;
}
  
.show-3 > * {
    width: calc(100% / 3);
}
.show-4 > * {
    width: calc(100% / 4);
}

`;


const SectionTitletest = styled.div`
color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;
  z-index: 1;

h1{
  font-family:"Cera Round Pro";
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
}
 img{
 position: absolute;
 width: 95px;
left: 61.5vh;
bottom: -.8vh;

}
span{
 color: #95B71D;
}

`;

const SliderButtons = styled.div`
z-index: 10;
display:flex;
justify-content:space-between;
align-items:center;


`;
const AllblogBtnsection = styled.div`
z-index:10;
display:flex;
align-items:center;
justify-content:center;
margin-top: 4vh;
a {
  color:#fff;
  font-family:"Cera Round Pro";
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color:#95B71D;
  padding:1.6vh 2.2vh;
user-select:none;
transition:0.3s;
border-radius:25px;
z-index: 2;
&:hover{

transform:scale(1.05);
}
}

@media (min-width: 769px) and (max-width: 1024px) {

  margin-top:3vh;

}

@media (max-width: 768px)   {
  margin-top:7vh;
}
@media (max-width: 400px)   {
  margin-right:3rem;
  text-align:center;
}

`;
const arrowButton = css`

cursor:pointer;
z-index: 10;

margin-right:1rem;
user-select:none;
transition:0.3s;
&:hover{
transform:scale(1.05);
}
`;

const ParalaxeBlogImg = styled.img`
position:absolute;
left:0;
top:0;
bottom:0;

`;
const ParalaxeBlogImgRight = styled.img`
position:absolute;
right:0;
bottom:0;
width:200px;

@media (min-width: 769px) and (max-width: 1024px) {

  width:120px;


}

@media (max-width: 768px)   {
 display:none;


}
`;

const NextArrow = styled.img`
${arrowButton}
position:absolute;
top:38%;
left:7%;
width: 60px;
@media (max-width: 768px)   {
  width:35px;
  left:2%;
}
`;
const PrevArrow = styled.img`
position:absolute;
top:40%;
left:3%;
${arrowButton}
/* display:none; */
z-index: 2;
`;

function SampleNextArrow(props) {
  const { currentSlide, onClick } = props;
  console.log("bbb" + currentSlide)

  return (
    <NextArrow
      src={"/static/assets/svg/arowright.svg"}
      onClick={onClick}
    />
  );
}


const BlogSlideSection = ({listPostsAction,loading,error,posts}) => {
  //const [posts, setPosts] = useState([])\
  const { t} = useTranslation('common')
  const [isloaded, setIsloaded] = useState(false)
  //const postList = useSelector((state) => state.postList);
  //const { loading, error, posts } = postList;
  /* const posts = data.posts; */
  const dispatch = useDispatch()
  const {locale} = useRouter()


  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToSlide, setSlidesToSlide] = useState(1);
  const [containerWidth, setContainerWidth] = useState(1);
  const [itemWidth, setItemWidth] = useState(1);
  const [transform, setTransform] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  const [breakpoint, setBreakpoint] = useState({
    desktop: { min: 900, max: 3000, itemsToShow: 3 },
    tablet: { min: 500, max: 900, itemsToShow: 2 },
    mobile: { min: 0, max: 500, itemsToShow: 1 }
  });
  const [domLoaded, setDomLoaded] = useState(false);
  const [active, setActive] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)
  const length = posts === undefined ? [{}].length : posts.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    /*  if (current < (length - slidesToShow)) {
       setCurrent(prevState => prevState + 1)
   } */

    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    if (current > 0) {
      setCurrent(prevState => prevState - 1)
    }
    /* 
      if (timeout.current){
        clearTimeout(timeout.current)
      }
       setCurrent(current=== 0 ? length -1 : current  - 1) */
  }

  const next = () => {
    if (current < (length - slidesToShow)) {
      setCurrent(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (current > 0) {
      setCurrent(prevState => prevState - 1)
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


  useEffect(() => {
    listPostsAction(locale)
    setDomLoaded(true)
  }, [listPostsAction,locale])

  useEffect(() => {
    setActive((length - (posts % length)) % length) // prettier-ignore
  }, [length, posts])


  /* setDeviceType  ('desktop') // presuming this deviceType is the result after our user-agent detection for the sake of simplicity.
 
     const isServerSide = !domLoaded && deviceType;
     if (isServerSide) {
       setItemWidth (100 / breakpoint[deviceType].itemsToShow).toFixed(1);
       // we are on desktop, then the item width here will be 33.3% based // on our pre-defined breakpoint that we declared in the constructor.
     } else {
       setItemWidth (containerWidth / slidesToShow)
     }
  */

  if (!Array.isArray(posts) || posts.length <= 0) {
    return null;
  }

  /*  function SampleNextArrow(props) {
    const { currentSlide,onClick } = props;
    
  
    return (
      <NextArrow
      src={ArrowRighthIcon}
      onClick={()=>{nextSlide(onClick);}}
      />
    );
  } */

/*   function SamplePrevArrow(props) {

    const { onClick, currentSlide } = props;

    return (
      <PrevArrow
        src={ArrowLeftIcon}
        onClick={onClick}
      />
    );
  }
 */

  return (
    <BlogSection>
      <ParalaxeBlogImg src={"/static/assets/svg/sectionblogparalaxe.svg"} alt="" />
      <ParalaxeBlogImgRight src={"/static/assets/svg/blogparalaxeimgright.png"} alt="" />
      <SectionTitle>
{/* 
        <h1>
          
        {t('n')}
            <span className="conectimg">
            o
              <svg id="Grupo_729" data-name="Grupo 729" xmlns="http://www.w3.org/2000/svg" width="128.639" height="143.869" viewBox="0 0 128.639 143.869">
              <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d" />
              <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d" />
              <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d" />
            </svg>

          </span>
          {t('os')} {t('actualites')}
            </h1> */}
            {
          locale === "en" ?
          <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_NEWS-EN.svg'} className="">
          </object> :
           <object type="image/svg+xml" width="500px" height="100" data={'/static/assets/svg/title/title_NEWS-FR.svg'} className="">
           </object>
           }
      </SectionTitle>

      <BlogContainer className='donilab-posts-container'>

        {

          loading ? <div className='loading-overlay' ><div className="loading"></div></div>  : error ? <div>erreur de chargement </div> :
            <Carousel
              slidesPerPage={4}
              infinite
              offset={8}
              arrowLeft= {<NextArrow src={"/static/assets/svg/arowleft.svg"}/> }
              addArrowClickHandler= {true}
              breakpoints={{
                768: {
                  slidesPerPage: 1,
                  centered:true,
                 offset:1,

                },
                900: {
                  slidesPerPage: 2,
                }
              }}
            >
              {
                posts.map((post, index) => (
                  <Blogcard key={index} post={post} />
                ))
              }

            </Carousel>


        }



        {/*         <BlogWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        >
          <BlogSlide 
         className={`show-${slidesToShow}`}
         style={{ transform: `translateX(-${current * (100 / slidesToShow)}%)` }}
         >
        {
        loading ? <div>chargement ...</div> : error ? <div>erreur de chargement </div> :
        posts.map((post,index)=>(
          
      
<Blogcard key={index} post={post}  />
          
          
        ))    
        }
         </BlogSlide>
        
       
         <SliderButtons>
            <PrevArrow  onClick={prevSlide} src={ArrowRighthIcon}/>
            <NextArrow onClick={nextSlide} src={ArrowLeftIcon}/>
          </SliderButtons>
          </BlogWrapper> */}
      </BlogContainer>
      <AllblogBtnsection className="allblog">
        <a href="https://blog.donilab.org" target="_blank" rel="noopener noreferrer">{t('allactu')}</a>
      </AllblogBtnsection>
    </BlogSection>
  )
}


const mapStateToProps = ({ postList }) => {
  const { loading, error, } = postList;
  return { loading, error,};
};

export default connect(mapStateToProps, {
  listPostsAction:listPosts
})(BlogSlideSection);
