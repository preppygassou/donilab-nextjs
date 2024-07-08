import React, { useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import SectionTitle from "./SectionTitle"
import Blogcard from "./Blogcard"
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { CurrentLangContext } from '../../../Context/CurrentLangContext'
import { useParams, useRouter } from 'next/navigation';
import { PostContext } from '../../../services/post/post.context';



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
      src={"/assets/svg/arowright.svg"}
      onClick={onClick}
    />
  );
}


const BlogSlideSection = ({posts}:{posts:any}) => {

  const params = useParams<{ locale: string; }>()
  const { locale} = params;


  if (!Array.isArray(posts) || posts.length <= 0) {
    return null;
  }


  return (
    <BlogSection>
      <ParalaxeBlogImg src={"/assets/svg/sectionblogparalaxe.svg"} alt="" />
      <ParalaxeBlogImgRight src={"/assets/svg/blogparalaxeimgright.png"} alt="" />
      <SectionTitle>
            {
          locale === "en" ?
          <object type="image/svg+xml" width="500px" height="100" data={'/assets/svg/title/title_NEWS-EN.svg'} className="">
          </object> :
           <object type="image/svg+xml" width="500px" height="100" data={'/assets/svg/title/title_NEWS-FR.svg'} className="">
           </object>
           }
      </SectionTitle>

      <BlogContainer className='donilab-posts-container'>

        {

          /* loading ? <div className='loading-overlay' ><div className="loading"></div></div>  : */<>
          {
            <Carousel
              slidesPerPage={4}
              infinite
              offset={8}
              arrowLeft= {<NextArrow src={"/assets/svg/arowleft.svg"}/> }
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
          </>
}
      </BlogContainer>
      <AllblogBtnsection className="allblog">
        <a href="https://blog.donilab.org" target="_blank" rel="noopener noreferrer">{
        locale==="en" ? "ALL OURS NEWS":"TOUTES NOS ACTUALITÉS"
        }
        </a>
      </AllblogBtnsection>
    </BlogSection>
  )
}



export default BlogSlideSection;
