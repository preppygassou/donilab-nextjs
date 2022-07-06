import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import axios from 'axios'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../store/actions/PostActions';
moment.locale('fr');

const BlogSlider = styled.div`
width:100%;
border-radius:20px;
margin:0 1vh;
z-index: 1;
background-color:#2755A1;
box-shadow: 0 0 10px 0 rgba(0,0,0,.15);
/* cursor: pointer; */
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow: hidden;
position: relative;
min-height: 100%;
border: 0 solid #818a91;
-webkit-transition: all .25s;
-o-transition: all .25s;
transition: all .25s;

.donilab-post__thumbnail__link::after {
  display: block;
  content: "";
  background-image: -o-linear-gradient(bottom,rgba(0,0,0,.35) 0,transparent 75%);
  background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.35)),color-stop(75%,transparent));
  background-image: linear-gradient(0deg,rgba(0,0,0,.35),transparent 75%);
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  opacity: 1;
  -webkit-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
}
.donilab-post__thumbnail__link {
  margin-bottom: 20px;
}

.donilab-post__thumbnail__link {
  position: relative;
  display: block;
  width: 100%;
}

.donilab-post__thumbnail{
  padding-bottom: calc( 0.66 * 100% );
  position: relative;
transform-style: preserve-3d;
-webkit-transform-style: preserve-3d;
top: 0;
left: 0;
right: 0;
bottom: 0;
overflow: hidden;
}
.donilab-post__thumbnail img {
 /*  width: 100%;
  border-radius: 20px 20px 0 0; */
  width: calc(100% + 1px);
  height: 100%;
position: absolute;
top: calc(50% + 1px);
left: calc(50% + 1px);
-webkit-transform: scale(1.01) translate(-50%,-50%);
-ms-transform: scale(1.01) translate(-50%,-50%);
transform: scale(1.01) translate(-50%,-50%);

/* display: block;
width: 100%; */
/* max-height: none;
max-width: none; */
-webkit-transition: -webkit-filter .3s;
transition: -webkit-filter .3s;
-o-transition: filter .3s;
transition: filter .3s;
transition: filter .3s,-webkit-filter .3s;

border: none;
border-radius: 0;
-webkit-box-shadow: none;
box-shadow: none;
}

.donilab-post__badge{
  padding: 0 30px;
  line-height: 1.3em;
font-size: 1rem;
color:#fff;
}
.donilab-post__text {
  margin-top: 20px;
  padding: 0 30px;
margin-bottom: 0;
width: 100%;
display: var(block);
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
}
.donilab-post__title{
  
  margin-bottom: 25px;
  font-family:"Cera Round Pro";
  font-weight:bold;
  font-size:20px;
  color:#fff;
  line-height: 1.2;
 /*  margin:1vh 0; */
  @media  (max-width: 768px) {
    font-size:1.8rem;
 
}
}
.donilab-post__title a{
  color:#fff;
  font-family:"Cera Round Pro";
  text-transform:uppercase
}

.donilab-post__meta-data {
  margin-top: auto;
  padding: 10px 30px 20px 30px;
margin-bottom: 0;
line-height: 1.3em;
font-size: 1rem;
color:#95B71D;
}
h4{
  color:#fff
}
h1{
  font-family:"Cera Round Pro";
  font-weight:bold;
  font-size:24px;
  color:#fff;
  margin:1vh 0;
  @media  (max-width: 768px) {
    font-size:1.8rem;
 
}
}
p{
  
  color:#95B71D;
}
`;



const Blogcard = ({ post }) => {
  // const [imgUrl, setImgUrl] = useState('')
  const [categoriess, setCategories] = useState([])
  //const [isLoaded, setIsLoaded] = useState(false)
  const PostId = post.id;
  /* const CategoriesId = post.categories; */
  const postListCategories = useSelector((state) => state.postListCategories);
  const { loading, error, categories } = postListCategories;

/*   const dispatch = useDispatch()

   useEffect(() => {
       
     axios.get(`https://www.blog.donilab.net/wp-json/wp/v2/categories?post=${PostId}&cat_relation=AND`)      
     .then(res => 
       setCategories(res.data) , 
         ); 
   //console.log(categoriess)
   }, [PostId])
 */

  const intersection = categories.filter(element => post.categories.includes(element.id));
  /*  const CategoryFilter = (inc)=>categoriess.filter(filterCat=>(
     inc ===filterCat.id ? [...(filterCat.name)] :""
     
   )) */

  return (

    <BlogSlider className="donilab-post__card" key={post.id} /* onClick={() => history.push("/blogsingle"+ index)} */>
      <a className='donilab-post__thumbnail__link' href={`https://blog.donilab.org${post.uri}`} target="_blank" rel="noopener noreferrer">
      <div className="donilab-post__thumbnail">
        <img width={300} height={169} src={post.featuredImage.node.sourceUrl} alt={post.title.rendered} />
      </div>
      </a>
      <div className="donilab-post__badge">
      {/* {post.categories.edges} */}
      {/* <h4> */}
          {/*   {
               loading ? <span>loading...</span> :
               categories.map(category=>(
                <span key={category.id}>{category.name +  ","} </span>
 
               ))
             }
  */}
              {
               post.categories.edges.map((category,i)=>(
                 post.categories.edges.length === 1 ? <span key={category.node.id}>{category.node.name} </span>
                : i === post.categories.edges.length - 1 ? <span key={category.node.id}>{category.node.name} </span>
                : <span key={category.node.id}>{category.node.name +  ","} </span>
           
                 ))
                 
                 
                } 
                {/* <span> </span> */}

        {/* </h4> */}
      </div>
      <div className="donilab-post__text">
      
        <h3 className='donilab-post__title'>
        <a href={`https://blog.donilab.org${post.uri}`} target="_blank" rel="noopener noreferrer">
          {post.title} 
          {/* {post.title.rendered} */} 
        </a>
        </h3>
      </div>
     <div className="donilab-post__meta-data">
     <span className='donilab-post-date'>
     
     {moment(post.date).format('LL')}
     </span>
     </div>
    </BlogSlider>
  )

}


Blogcard.propTypes = {
  post: PropTypes.object.isRequired
}


export default Blogcard