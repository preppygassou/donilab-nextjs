import React, { useContext, useEffect, useState } from 'react'
import ExpertiseCard from './ExpertiseCard';
import styled from 'styled-components';
import { ExpertiseData } from '../../services/data/ExpertiseData';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import { listDexpertises } from '../../store/actions/DexpertiseActions';
import { CurrentLangContext } from '../../Context/CurrentLangContext';
import { useRouter } from '../../node_modules/next/router';


const ExpertisesContainer = styled.div `
 display:grid;
 margin-left:auto;
 margin-right:auto;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: 1fr;
max-width:1200px;
 background-color:#fff;
 border-radius: 25px;
 -webkit-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);
box-shadow: 4px 12px 20px 0px rgba(0,0,0,0.27);

.donilab-dexpertise-card:last-child{
  border:none;
}
@media (max-width: 1200px) { 
  max-width:80% ;
  .donilab-dexpertise-card{
  border:none;
}
}

@media (max-width: 768px)  {
  max-width:80% ;
  grid-template-columns: 1fr;
}

@media (min-width:  769px) and (max-width: 1280px) {
  grid-template-columns: repeat(2, 1fr); 
}
`;


function ExpertiseCards({loading, error, dexpertises,listDexpertisesAction}) {
 /*  const [expertises, setExpertises] = useState([]) */
/*   useEffect(() => {
       
    axios.get(`https://blog.donilab.org/wp-json/wp/v2/expertises`)      
    .then(res => 
      setExpertises(res.data) , 
        ); 
  //console.log(categoriess)
  }, [])
 */
  //const dexpertiseList = useSelector((state) => state.dexpertiseList);
  /* const { loading, error, dexpertises } = dexpertiseList; */
 
  const {locale} = useRouter()


  useEffect(() => {
    listDexpertisesAction(locale)
  }, [listDexpertisesAction,locale])

  return (
        <ExpertisesContainer>
          {
          loading ? <div className='loading-overlay' ><div className="loading"></div></div> : dexpertises.map((item,index)=>(
            <ExpertiseCard item={item} index={index}/>
              
            ))}
        </ExpertisesContainer>
  )
}

const mapStateToProps = ({ dexpertiseList }) => {
  const { loading, error, dexpertises } = dexpertiseList;
  return { loading, error, dexpertises};
};

export default connect(mapStateToProps, {
  listDexpertisesAction:listDexpertises
})(ExpertiseCards);
