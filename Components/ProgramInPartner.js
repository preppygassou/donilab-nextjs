import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';



import { useRouter } from 'next/router';
import Router, { withRouter } from 'next/router'
import { CurrentLangContext } from '~/Context/CurrentLangContext';
const ProgramDonilabContent = styled.div`
 -webkit-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
background-color:#fff;
 border-radius: 25px;
z-index:10;
max-width:1100px;
height:100%;
@media (max-width: 1280px) { 
  //max-width:80% ;
/*   .donilab-program-card:nth-child(2){
  border:none;
} */

}

@media (min-width: 576px){
  .donilab-program-card:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
}

  @media (min-width: 576px){
    .donilab-program-card:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
  }

  @media (min-width: 576px){
    .donilab-program-card + .donilab-program-card {
  margin-left: 0;
  border-left: 0;
}
  }

  @media (min-width: 576px){
    .donilab-program-card {
  -ms-flex: 1 0 0%;
  flex: 1 0 0%;
  margin-bottom: 0;
}
  }
  @media (min-width: 576px){
   & > .donilab-program-card:not(:first-child) .card-header, & > .donilab-program-card:not(:first-child) .card-img-top {
  border-top-left-radius: 0;
}
  }

  @media (min-width: 576px){
    & > .donilab-program-card:not(:last-child) .card-header, & > .donilab-program-card:not(:last-child) .card-img-top {
  border-top-right-radius: 0;
}
  }




display:grid;

grid-template-columns: repeat(4, 1fr);
.donilab-program-card:first-child{
  border-top: 0;
  border-left: 0;
}

.donilab-program-card:nth-child(4){
  border-right: 0;
  border-top: 0;
}
.donilab-program-card:last-child{
 border:none;
}
@media (max-width: 1280px) { 
  .donilab-program-card:nth-child(2){
    border-right: 0;
  border-top: 0;
  border-left: 0;
}
  
}
@media (max-width: 576px){
  .donilab-program-card:first-child{
    border-right: 0;
  border-top: 0;
  border-left: 0;
  
}
  }


/* grid-gap: 1fr; */
/* width: 100%; */


@media (max-width: 768px)  {
 max-width:80% ;
 grid-template-columns: 1fr;
}

@media (min-width:  769px) and (max-width: 1280px) {
 grid-template-columns: repeat(2, 1fr); 
}

.program-container {

}


`;
const OneOfProgramDonilab = styled.div`
position: relative;
display:flex;
word-wrap: break-word;
justify-content:center;
align-content: center;
align-items: center;
flex-direction:column;
text-align:center;
width: 100%;
min-height: 100%;
background-clip: border-box;
border: 2px solid rgba(227,227,227,.4);
color:#2755A1;
margin-bottom: 15px;

&:hover{
  color:#fff;
}
&:hover > a {
  color:#fff;
  border:2px solid #fff;
}
&:hover > .donilab-program__content {
 
  background-color:#2755A1;
  color:#fff;
 
}

.card-img, .card-img-top {
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
}
.card-img, .card-img-bottom, .card-img-top {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
}

.donilab-program_card-footer{
 /*  padding: .75rem 0; */
}
.donilab-program_thumnail{
  /* margin-top: 20px; */
  padding: 5px 30px;
}
.donilab-program_thumnail img {
  vertical-align: middle;
  border-style: none;
  max-width:200px
}
.donilab-program__title{
  /* margin-top: 20px; */
  flex: 1 1 auto;
min-height: 1px;
}
.card-title {
  margin-bottom: .75rem;
}
.h5, h5 {
  font-size: 1.25rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
}

.card-text:last-child {
  margin-bottom: 0;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.donilab-program__title h3{
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family:"Cera Round Pro";
  text-align:center;
}
.donilab-program_description{
  margin-top: 10px;
}
.donilab-program_description p{
    word-wrap: break-word;
    font-size:14px;
   
/* margin-bottom:2rem; */
font-weight: 500;
/* display:flex;
align-items:center;
justify-content:center; */

}
.donilab-expertise_link {
  margin-top: auto;
  padding: 20px 30px 20px 30px;
margin-bottom: 0;
}

button{
  color:#95B71D;   
  font-size:16px;
  font-weight: bold;
  font-family:"Cera Round Pro";
  text-transform: uppercase;
  border:2.5px solid #95B71D;
  padding:.5rem 1rem;
  margin-top:2rem;
  border-radius: 25px;
}
&:hover button {
  color:#FFF;
  border:2px solid #FFF;
}
.donilab-program__content{
  display:flex;
align-items:center;
flex-direction:column;
padding: 1.40rem;
height: 100%;


}
.donilab-program__card-body{
  -ms-flex: 1 1 auto;
flex: 1 1 auto;
min-height: 1px;
display: flex;
align-content:start;
/* justify-content:center; */
flex-direction:column;

}
`;



function ProgramInPartner({ programPartnersData,history }) {
  
  const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale

  return (
    <ProgramDonilabContent className="donilab-program_container">
      {/* <div className='program-container card-group'>
        {
          ProgramData && ProgramData.map((program) => (
            <OneOfProgramDonilab className='donilab-program-card card' key={program.id}>
                <img className='card-img-top' src={program.acf.logo_officiel.url} alt={program.title.rendered} />
              <ProgramLogo className='donilab-program_thumnail'>
              </ProgramLogo>

              <div className="donilab-program__content card-body">
                <div className="donilab-program__title">
                  <h3 className="card-title"> {program.title.rendered}</h3>

                </div>
                <div className="donilab-program_description">
                  <p className='card-text'>{program.acf.programme_description.length > 100 ? program.acf.programme_description.substring(0, 100) + "..." : program.acf.programme_description}</p>
                </div>
                <div className="donilab-program_link">
                  <Link className="program-link-action" href={`/program/${program.slug}`}>
                    {locale === "en" ? "find out more" : "en savoir plus"}
                  </Link>
                </div>
              </div>
            </OneOfProgramDonilab>
          ))
        }
      </div> */}

      {
        programPartnersData && programPartnersData.map((program) => (
          <OneOfProgramDonilab className='donilab-program-card' key={program.id}>
             <div className='donilab-program_thumnail'>
            <img className='card-img-top' src={program.acf.logo_officiel.url ? program.acf.logo_officiel.url : "/static/assets/dummy.png"} alt={"programme image"} />
              </div>
            <div className="donilab-program__content">
            <div className="donilab-program__card-body">
              {/* <h5 className="card-title"> {program.title.rendered}</h5> */}
              <div className="donilab-program__title">
                  <h3 className="card-title"> {program.title.rendered}</h3>

                </div>
                <div className="donilab-program_description">
                  <p className='card-text'>{program.acf.programme_description.length > 100 ? program.acf.programme_description.substring(0, 100) + "..." : program.acf.programme_description}</p>
                </div>
              {/* <p className='card-text'>{program.acf.programme_description.length > 70 ? program.acf.programme_description.substring(0, 70) + "..." : program.acf.programme_description}</p> */}
              {/* <p className='card-text'>{program.acf.programme_description.length > 100 ? program.acf.programme_description.substring(0, 100) + "..." : program.acf.programme_description}</p> */}


            </div>
            <div class="donilab-program_card-footer">
              <button className='btn' onClick={() => { Router.push(`/program/${program.slug}`) }}>

                {locale === "en" ? "find out more" : "en savoir plus"}
              </button>
            </div>
            </div>
           
          </OneOfProgramDonilab>
        ))
      }

    </ProgramDonilabContent>
  )
}

export default ProgramInPartner
