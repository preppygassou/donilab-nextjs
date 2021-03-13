import React, { useEffect, useRef, useState } from 'react'
import styled,{css} from 'styled-components/macro'
import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import SectionBlogParalaxeImg from "./../assets/svg/sectionblogparalaxe.svg"
import BlogParalaxeImgright from "./../assets/svg/blogparalaxeimgright.png"
import { BlogData } from '../data/BlogData';
import ArrowLeftIcon from "./../assets/svg/arowleft.svg"
import ArrowRighthIcon from "./../assets/svg/arowright.svg"
import { Link } from 'react-router-dom'
import SectionTitle from "./SectionTitle"
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import Oconnect from "./../assets/svg/oconnect.svg";
import axios from 'axios'
import Blogcard from "./Blogcard"
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from '../actions/PostActions'



const BlogSection = styled.section `
position:relative;
padding:8vh 0;
background-color:#fff;
overflow:hidden;

`;
const BlogContainer = styled.div `
/*  display:flex;
 flex-direction:column;
 align-items:center; */
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
const BlogWrapper = styled.div `

`;
const BlogSlide = styled.div `
display:flex;
align-items:baseline;
margin-bottom:5vh;
margin-right: -43vh;
`;


const SectionTitletest =styled.div`
color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;
  z-index: 1;

h1{
  font-family:"CeraRoundPro-Bold";
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
z-index:10;
display:flex;
align-items:center;
justify-content:center;
margin-top:10vh;
a {
  color:#fff;
  font-family:"CeraRoundPro-Bold";
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color:#95B71D;
  padding:1.5vh 2.5vh;
user-select:none;
transition:0.3s;
border-radius:25px;
z-index: 2;
&:hover{

transform:scale(1.05);
}
}

`;
const arrowButton = css`

cursor:pointer;

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

`;
const ParalaxeBlogImgRight  = styled.img`
position:absolute;
right:0;
bottom:0;
width:200px;
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
position:relative;
display:none;
left: 145vh;
z-index: 2;
`;

function SampleNextArrow(props) {
  const { currentSlide,onClick } = props;
  console.log("bbb"+currentSlide)

  return (
    <NextArrow
    src={ArrowRighthIcon}
    onClick={onClick}
    />
  );
}


const BlogSlideSection= () =>{
  //const [posts, setPosts] = useState([])
  const [isloaded, setIsloaded] = useState(false)
 const postList = useSelector((state )=> state.postList);
 const {loading,error,posts} = postList;
  /* const posts = data.posts; */
  const dispatch = useDispatch()
  
  const history = useHistory();

  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(0);
const length = posts.length;
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
   dispatch(listPosts())
 }, [dispatch])

 useEffect(() => {
  setActive((length - (posts % length)) % length) // prettier-ignore
}, [length])
  
 if(!Array.isArray(posts)||posts.length <=0){
   return null;
 }
 const toSingle =(link)=>{
  history.push("/blogsingle"+link);
 }



 function SampleNextArrow(props) {
  const { currentSlide,onClick } = props;
  

  return (
    <NextArrow
    src={ArrowRighthIcon}
    onClick={()=>{nextSlide(onClick);}}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick ,currentSlide} = props;
  
  return (
    <PrevArrow
      src={ArrowLeftIcon}
      onClick={onClick}
    />
  );
}

const settings = {
  slidesToShow: 4,
  slidesToScroll:1,
  nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,  
      slide:'<>',   
};

/* if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>; */

  return (
    <BlogSection>
      <ParalaxeBlogImg src={SectionBlogParalaxeImg} alt=""/>
      <ParalaxeBlogImgRight src={BlogParalaxeImgright} alt=""/>
      <SectionTitle>
         
          <h1> 
            n
            <span className="conectimg">
              <object style={{fill:' #fff '}} id={Oconnect} type="image/svg+xml" width="100" height="100" data={Oconnect} className="svg"> 
              </object>
            </span>
            s Actualités
            </h1>
        </SectionTitle>

    <BlogContainer>
         
        <Slider {...settings}>
        {
        loading ? <div>chargement ...</div> : error ? <div>erreur de chargement </div> :
        posts.map((post)=>(
          <Blogcard key={post.id} post={post}/>
        ))    
        }
         </Slider>
         {/* <SliderButtons>
            <PrevArrow  onClick={prevSlide} src={ArrowLeftIcon}/>
            <NextArrow onClick={nextSlide} src={ArrowRighthIcon}/>
          </SliderButtons> */}
    
    </BlogContainer>
    <AllblogBtnsection className="allblog">
        <Link to={ { pathname: '//blog.donilab.org' } }>Toutes nos actualités</Link>
      </AllblogBtnsection>
  </BlogSection>
  )
}

export default BlogSlideSection
