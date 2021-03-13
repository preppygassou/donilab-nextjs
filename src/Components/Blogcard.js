import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components/macro'
import PropTypes from 'prop-types';
import axios from 'axios'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/PostActions';


const BlogSlider = styled.div`
width:40vh !important;
border-radius:20px;
margin:0 1vh;
z-index: 1;
background-color:#2755A1;
/* cursor: pointer; */
.blogcardcontent{
  padding:2vh;
}
img {
  width:40vh;
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
}
p{
  
  color:#95B71D;
}
`;



const Blogcard = ({ post }) => {
  // const [imgUrl, setImgUrl] = useState('')
  //const [categoriess, setCategories] = useState([])
  //const [isLoaded, setIsLoaded] = useState(false)
  const CategoriesId = post.id;
  const postListCategories = useSelector((state) => state.postListCategories);
  const { loading, error, categories } = postListCategories;

  const dispatch = useDispatch()

  /*  useEffect(() => {
       
     axios.get('/wp-json/wp/v2/categories')      
     .then(res => 
       setCategories(res.data) , 
         ); 
   //console.log(categoriess)
   }, [categoriess]) */

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])


  const intersection = categories.filter(element => post.categories.includes(element.id));
  /*  const CategoryFilter = (inc)=>categoriess.filter(filterCat=>(
     inc ===filterCat.id ? [...(filterCat.name)] :""
     
   )) */

  return (

    <BlogSlider className="blogslider" key={post.id} /* onClick={() => history.push("/blogsingle"+ index)} */>
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
              {
               intersection.map((category)=>(
                 intersection.length === 1 ? <span key={category.id}>{category.name} </span>
                : <span key={category.id}>{category.name +  ","} </span>
           
                 ))
           } 

        </h4>

        <h1>{post.title.rendered}</h1>
        <p>{moment(post.date).format('LL')}</p>
      </div>
    </BlogSlider>
  )

}


Blogcard.propTypes = {
  post: PropTypes.object.isRequired
}


export default Blogcard