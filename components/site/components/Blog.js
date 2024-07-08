import React, { useEffect, useRef, useState } from 'react'
import styled,{css} from 'styled-components'
import ConectImgTitle from "/assets/svg/conecttitle.svg"
import SectionBlogParalaxeImg from "/assets/svg/sectionblogparalaxe.svg"
import BlogParalaxeImgright from "/assets/svg/blogparalaxeimgright.png"
import { BlogData } from '../../../services/data/BlogData';
import ArrowLeftIcon from "/assets/svg/arowleft.svg"
import ArrowRighthIcon from "/assets/svg/arowright.svg"
import Link from 'next/link';


const BlogSection = styled.section `
position:relative;
padding:8vh 0;
background-color:#fff;
overflow:hidden;

`;
const BlogContainer = styled.div `
 display:flex;
 flex-direction:column;
 align-items:center;
`;
const BlogWrapper = styled.div `

`;
const BlogSlide = styled.div `
display:flex;
align-items:baseline;
margin-bottom:5vh;
margin-right: -43vh;
`;
const BlogSlider = styled.div `
width:40vh;
border-radius:20px;
margin:0 1vh;
z-index: 1;
background-color:#2755A1;
.blogcardcontent{
  padding:2vh;
}
img {
  width:40vh;
}
h4{
  color:#fff
}
h1{
  font-family:"Montserrat";
  font-weight:bold;
  font-size:2rem;
  color:#fff;
  margin:1vh 0;
}
p{
  
  color:#95B71D;
}
`;

const SectionTitle =styled.div`
color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;
  z-index: 1;

h1{
  font-family:"Montserrat";
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

const SliderButtons =styled.div `

display:flex;
justify-content:space-between;
align-items:center;
position:absolute;
left: 16vh;
top:46vh;

`;
const AllblogBtnsection =styled.div `
margin-top:3vh;
a {
  color:#fff;
  font-family:"Montserrat";
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color:#95B71D;
  padding:1.5vh 2.5vh;
user-select:none;
transition:0.3s;
border-radius:25px;
&:hover{

transform:scale(1.05);
}
}

`;
const arrowButton = css`

cursor:pointer;

padding:10px;
margin-right:1rem;
user-select:none;
transition:0.3s;
&:hover{

transform:scale(1.05);
}
`;

const ParalaxeBlogImg  = styled.img`
position:absolute;
left:0;
top:0;
bottom:0;
height: 100%;
`;
const ParalaxeBlogImgRight  = styled.img`
position:absolute;
right:0;
bottom:0;
width:200px;
`;

const PrevArrow = styled.img`
${arrowButton}
z-index: 2;
`;
const NextArrow = styled.img`
${arrowButton}
position:relative;
display:none;
left: 145vh;
z-index: 2;
`;

const Blog= () =>{
  const [current, setCurrent] = useState(2);
  const [active, setActive] = useState(0);
const length = BlogData.length;
const timeout = useRef(null);

const nextSlide = ()=>{
  if (timeout.current){
    clearTimeout(timeout.current)
  }
   setCurrent(current=== length - 1 ? 0 : current + 1)
 }
 const prevSlide = ()=>{
  if (timeout.current){
    clearTimeout(timeout.current)
  }
   setCurrent(current=== 0 ? length -1 : current  - 1)
 }

 useEffect(() => {
  setActive((length - (BlogData % length)) % length) // prettier-ignore
}, [length])
  
 if(!Array.isArray(BlogData)||BlogData.length <=0){
   return null;
 }

  return (
    <BlogSection>
      <ParalaxeBlogImg src={SectionBlogParalaxeImg} alt=""/>
      <ParalaxeBlogImgRight src={BlogParalaxeImgright} alt=""/>
      <SectionTitle>
      <h1>n<span>o</span>s Actualités</h1>
          <img src={ConectImgTitle} alt="" />
        </SectionTitle>

    <BlogContainer>
      <BlogWrapper >
        
        <BlogSlide>
        {
          BlogData.map((slide,index)=>(
            <BlogSlider key={index}>
            <div className="blogcardhead">
              <img src={slide.image} alt="" srcset=""/>
            </div>
            <div className="blogcardcontent">
              <h4>{slide.category}</h4>
              <h1>{slide.title}</h1>
              <p>{slide.date}</p>
            </div>
          </BlogSlider>
          ))      
        }
         </BlogSlide>
         <SliderButtons>
            <PrevArrow  onClick={prevSlide} src={ArrowLeftIcon}/>
            <NextArrow onClick={nextSlide} src={ArrowRighthIcon}/>
          </SliderButtons>
      </BlogWrapper >

      <AllblogBtnsection className="allblog">
        <Link href="">Toutes nos actualités</Link>
      </AllblogBtnsection>
    </BlogContainer>
  </BlogSection>
  )
}

export default Blog
