import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import ErrorBoundary from '../Components/ErrorBoundary'
import RelatedHub from '../Components/Hub/RelatedHub'
import { useDispatch, useSelector } from 'react-redux';
import { listExpertises } from '../store/actions/ExpertiseActions';
import { CurrentLangContext } from '../Context/CurrentLangContext';
import ExpertiseFRCard from '../Components/ExpertiseFRCard';
import { listHubsFr } from '../store/actions/HubActions';
import parse from "html-react-parser";
import { Row } from 'reactstrap';
import { Colxx } from '../Components/common/CustomBootstrap';
import { listFrexpertises } from '../store/actions/FranceexpertiseActions';


const ExpertisesContainer = styled.div`
 display:grid;
 margin-left:auto;
 margin-right:auto;
grid-template-columns: repeat(4, 1fr);

 max-width:85%;
 background-color:#fff;
 border-radius: 25px;
 -webkit-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
/* margin:2rem 9rem; */

@media (min-width: 1281px) { 
  max-width:95% 
}

@media (max-width: 768px)  {
  max-width:80% ;
  grid-template-columns: 1fr;
}

@media (min-width:  769px) and (max-width: 1280px) {
  grid-template-columns: repeat(2, 1fr); 
}
`;

const HubImg = styled.div`

background-color:#fff;
height: 50vh;
/* 
top: 17%;
right:0;
padding:1vh 0 1vh 1vh; */

img{
  width: 100%;
  border-radius: 20px 0 0 20px;
  height: 100%;
  object-fit:cover;
}
/* 
@media (max-width: 1600px) {
width: 110vh;
height: 55vh;
top:19%;
}
@media (max-width: 1450px) {
width: 90vh;
height: 50vh;
top:19%;
}
@media (max-width: 1270px) {
width: 75vh;
height: 50vh;
top:19%;
}
@media (max-width: 1199px) {
width: 68vh;
height: 50vh;
top:19%;
}
 */
/* @media (max-width: 1024px) {
width: 60vh;
height: 50vh;
top:19%;
}

@media (max-width:991px){
  width: 55vh;
height: 45vh;
}
@media (max-width:900px){
width:100%;
position: static !important;
border-radius: 20px;
img{
border-radius: 20px;

}
} */

`;

const HubBannerImg = styled.div`

background-color:#fff;
height: 50vh;
/* 
top: 17%;
right:0;
padding:1vh 0 1vh 1vh; */

img{
  width: 100%;
  border-radius: 20px 0 0 20px;
  height: 100%;
  object-fit:cover;
}
/* 
@media (max-width: 1600px) {
width: 110vh;
height: 55vh;
top:19%;
}
@media (max-width: 1450px) {
width: 90vh;
height: 50vh;
top:19%;
}
@media (max-width: 1270px) {
width: 75vh;
height: 50vh;
top:19%;
}
@media (max-width: 1199px) {
width: 68vh;
height: 50vh;
top:19%;
}
 */
/* @media (max-width: 1024px) {
width: 60vh;
height: 50vh;
top:19%;
}

@media (max-width:991px){
  width: 55vh;
height: 45vh;
}
@media (max-width:900px){
width:100%;
position: static !important;
border-radius: 20px;
img{
border-radius: 20px;

}
} */

`;

const France = () => {
  const frexpertiseList = useSelector((state) => state.frexpertiseList);
  const { frexpertises, loading: loadingexpert } = frexpertiseList;
  const hubListFr = useSelector((state) => state.hubListFr)
  const { loading, error, hubsfr } = hubListFr

  const value = useContext(CurrentLangContext);
  const { currentLang } = value
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listHubsFr(currentLang))
  }, [dispatch, currentLang])

  useEffect(() => {
    dispatch(listFrexpertises(currentLang))
  }, [dispatch, currentLang])

  return (
    <>
      {
        loading ?<div style={{height:'50vh',display:'flex',justifyContent:'center',alignContent:'center'}}> <div className="loading"> </div>


        </div> :
          <>
            <section className="herosection">
              <div className="container">
                <h2>
                  DONILAB FRANCE
                </h2>

                <Row className="mb-4 hero">
                  <Colxx xxs="5">
                    <h1>
                      {
                        hubsfr[0].title.rendered
                      }
                    </h1>
                    <>
                      {parse(hubsfr[0].content.rendered)}
                    </>
                  </Colxx>
                  <HubImg className="col-7">
                    <img src={hubsfr[0].x_featured_media_original} alt="" />
                  </HubImg>
                </Row>


              </div>

            </section>
            <div className="container bannerfr">
              <HubBannerImg>
                <img src={hubsfr[0].acf.bannerfr.url} alt="" />
              </HubBannerImg>
            </div>
            <ExpertisesContainer>

              {
                loadingexpert ? <div className="loading"></div> :
                  <>
                    {
                      frexpertises.map((item, index) => (
                        <ExpertiseFRCard item={item} index={index} />

                      ))
                    }

                  </>
              }

            </ExpertisesContainer>

            <ErrorBoundary>
              <RelatedHub />
            </ErrorBoundary>
          </>
      }
    </>

  )
}

export default France