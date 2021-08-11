import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components/macro'
import PropTypes from 'prop-types';
import axios from 'axios'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/PostActions';


const BlogSlider = styled.div`
width:100%;
border-radius:20px;
margin:0 1vh;
z-index: 1;
background-color:#2755A1;
cursor: pointer;
.blogcardcontent{
  padding:2vh;
}
img {
  width: 100%;
  border-radius: 20px 20px 0 0;
}
h4{
  color:#fff
}
h1{
  font-family:"CeraRoundPro-Bold";
  font-weight:bold;
  font-size:2rem;
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

    <BlogSlider className="blogslider" key={post.id} /* onClick={() => history.push("/blogsingle"+ index)} */>
      <a href={post.link} target="_blank" rel="noopener noreferrer">
      <div className="blogcardhead">
        <img src={post.fimg_url} alt={post.title.rendered} />
      </div>
      <div className="blogcardcontent">

        <h4>
          {/*   {
               loading ? <span>loading...</span> :
               categories.map(category=>(
                <span key={category.id}>{category.name +  ","} </span>
 
               ))
             }
  */}
             {/*  {
               categoriess.map((category)=>(
                 categoriess.length === 1 ? <span key={category.id}>{category.name} </span>
                : categoriess.lastIndexOf(category) ? <span key={category.id}>{category.name} </span>
                : <span key={category.id}>{category.name +  ","} </span>
           
                 ))
                 
                 
                }  */}
                <span>{post.x_categories} </span>

        </h4>

        <h1>{post.title.rendered}</h1>
        <p>{post.x_date}</p>
        {/* <p>{moment(post.date).format('LL')}</p> */}
      </div>
      </a>
    </BlogSlider>
  )

}


Blogcard.propTypes = {
  post: PropTypes.object.isRequired
}


export default Blogcard