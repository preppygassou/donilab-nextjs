import React from 'react'
import styled from 'styled-components/';
import Zonessvg from "./../../assets/svg/zones.svg";
import Zonesbamako from "./../../assets/svg/zonesbamako.svg";


const ZonesSections = styled.section`
background-color:#2755A1;
display:grid;
grid-template-columns:1fr 1fr;
padding:2rem;
color:#fff;
`;
const ZonesBamako = styled.div`
img{
  width:350px;
}
`;
const ZonesInfos = styled.div`

`;

function Zones({program}) {
  return (
    <ZonesSections>
      <ZonesBamako>
          <img src={Zonesbamako} alt=""/>  
      </ZonesBamako>
      <ZonesInfos>
          <img src={Zonessvg} alt=""/>
          <h1>zones <br/>d’interventions</h1>
          
          <ul>
          {
            program.acf.zones.map((zone,index)=>(
              <li key={index}>{zone}</li>
              ))
          }
          </ul>
      </ZonesInfos>
    </ZonesSections>
  )
}

export default Zones
