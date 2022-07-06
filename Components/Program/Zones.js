import React, { useContext } from 'react'
import styled from 'styled-components/';
import { useRouter } from 'next/router';

const ZonesSections = styled.section`
background-color:#2755A1;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
padding:2rem;
color:#fff;
@media (max-width:768px){
    justify-content:center;
    display:flex;
    flex-direction:column-reverse;
padding:6rem 2rem 0 2rem;

  }
`;
const ZonesBamako = styled.div`
display:flex;
justify-content:center;
svg{
  width:400px;
  @media (max-width:1080px){
  width:300px;
  }
  @media (max-width:900px){
  width:250px;
  }
  @media (max-width:768px){
  width:80%;
}
}
  
`;

const ZonesInfos = styled.div`
@media (max-width:768px){ 
text-align:center;
}
h1{
  padding:0.8rem 1rem;
color:#fff;
font-size:3rem;
text-transform: uppercase;
margin: 0.2vh 0 1vh 0;
font-family:"Cera Round Pro";
@media (max-width:1080px){ 
font-size:2.5rem;

  }
@media (max-width:900px){ 
font-size:1.5rem;

  }
}
ul {
  padding-left:1rem;
}

`;
const ZonesIcone = styled.img `
width: 100px;
@media (max-width:1080px){ 
  width: 90px;
  }
  @media (max-width:900px){ 
    width: 70px;

  }
  @media (max-width:900px){ 
    width: 60px;

  }
`;

function Zones({program}) {

  const zonesactive = (zoneactive) => (program.acf.zones.includes(zoneactive) ? "#95b71d" : "none")
  
  const {locale} = useRouter()
   
    
  return (
    <ZonesSections>
      <ZonesBamako>
 <svg xmlns="http://www.w3.org/2000/svg" width="617.213" height="577.422" viewBox="0 0 617.213 577.422">
  <g id="Grupo_930" data-name="Grupo 930" transform="translate(-1356.693 -1444.864)">
    <path id="Caminho_762" data-name="Caminho 762" d="M1540.916,1643.207l-8.937,10.426-18.8,2.979,1.489-14.9-12.474-.558v-10.985l-18.246-10.426,5.771-15.267,11.73-2.234,4.469-7.82-4.655-9.123-3.352-.372-2.36-3.087-3.682.508-.045.255-1.664-.019-.141.02.141-.02-29.09-.326-2.387,14.007-6.191,8.868,3.513,4.685,1.172,12.883-7.027.167-11.21,17.234-.5,12.549,3.514,7.361-.335,4.853-4.183.669-6.024,4.35,2.008,3.514-3.179,5.354,8.365,8.7,13.385.836,9.2,7.027,1.375-.292,9.668-2.051,15.56-5.187,6.191,5.187,6.86-6.693,4.518,4.016-.167,4.685,10.875-1,6.023-7.529,7.942,5.655-.021-.143,10.186-1.293-.97-8.569-4.042-6.629,13.708-14.353L1545.571,1646Z" transform="translate(121.183 230.157)" fill={zonesactive("Segou")} stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
    <path id="Caminho_763" data-name="Caminho 763" d="M1453.992,1582.031l-1.709.236,1.664.019Z" transform="translate(159.056 230.478)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
    <path id="Caminho_764" data-name="Caminho 764" d="M1483.077,1696.39l6.006.409,6.961-5.323.683-14.606,4.914-11.329-3.139-8.873,4.231-7.235-3-3.139-3.958,4.368-4.1-.819-4.914-6.689,4.641-4.914-1.365-4.231,8.736-4.1,4.1,3.139,11.329-.546.137-6.825-11.466-7.1v-7.644l-2.73-3.822-9.282-.682-.273-7.781-14.554-11.875-5.221-.059-52.267.367-6.952,11.318-19.078-19.886-10.67,2.748-9.863,28.293-10.832.809-1.455,13.9,10.186,7.114,1.455,14.551-5.173,4.365,9.862,17.138,6.306-2.425,9.377,15.359-5.336,1.778.162,15.036,4.527,3.4-7.275,12.934,11.479,5.5,9.7-8.569,11.317,13.743,13.1-12.449,21.665,8.568,16.815-9.7-2.587-6.952,10.882,2.547,6.245-6.264Z" transform="translate(0 224.445)" fill={zonesactive("Kayes")} stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
    <path id="Caminho_765" data-name="Caminho 765" d="M1603.5,1594.694l-23.153.827-10.749,3.721-7.855-6.615-5.375-14.47-16.538-1.24-.413,6.615-14.056,7.028-8.683-7.442h-16.537l-12.4,5.375-19.864-1.613-6.331,3.352.061.078,1.378-.19-1.378.19,2.36,3.087,3.352.372,4.654,9.123-4.468,7.82-11.73,2.234L1450,1628.213l18.246,10.426v10.985l12.474.559-1.49,14.895,18.8-2.979,8.937-10.426,4.655,2.793,3.323,15.117.035-.036,18.108,11.8,9.707-3.932-.923-15.922,13.383,1.846.462-9.922,14.768-14.537,17.306,4.384,1.154-13.153,47.074-22.153-19.707-4.171Z" transform="translate(155.129 221.692)" fill={zonesactive("Mopti")} stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
    <path id="Caminho_766" data-name="Caminho 766" d="M1719.642,1564.28l-77.932,3.264-4.548,7.028-23.153,5.788-29.767-13.643L1570.6,1541.5l-38.188-9.426v41.5l-27.4,19.342,4.03,16.924,31.029,4.03,12.574,70.448.186-.011,52.38,2.077,11.537-11.537,80.995-6.692,12.691-15.23,9.692-27,1.154-33.229Z" transform="translate(249.63 144.655)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
    <path id="Caminho_767" data-name="Caminho 767" d="M1555.706,1513.451l-57.221,49.565,45.133,37.476v1.215l38.188,9.426,13.643,25.22L1625.216,1650l23.153-5.788,4.548-7.028,77.932-3.264-2.519-43.809-32.767,7.845-7.846-5.769,3-25.152-54.688-17.768-3.692-9.691-18.229-6.692.923-12.23-41.944-29.113-16.171,11.438Z" transform="translate(238.423 75.02)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
    <path id="Caminho_768" data-name="Caminho 768" d="M1621.064,1754.494l-4.03-16.925,27.4-19.342v-41.5l-1.323-.327,1.323.327v-1.215l-45.132-37.476,57.221-49.565,1.209-10.477,16.171-11.438-171-118.692H1439.8l30.584,325.643,10.5,7.988-5.433,31.014,3.681-.508-.06-.078,6.33-3.351,19.864,1.612,12.4-5.375H1534.2l8.683,7.442,14.057-7.028.413-6.615,16.538,1.241,5.375,14.47,7.855,6.615,10.75-3.721,23.152-.827,12.817,9.1,19.707,4.171,11.121-.681-12.574-70.448Z" transform="translate(137.603)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
    <path id="Caminho_769" data-name="Caminho 769" d="M1555.3,1627.968l-10.875,1,.168-4.685-4.518-4.016-6.86,6.693-6.19-5.187-15.56,5.187-9.668,2.051-.205,7.254,5.051,3.413,5.187-.137.137,6.825-11.057,1.365-3.549,3.959-3.959,13.65-3.549.819-.273-5.46-8.736-.819-13.377-9.828,2.594-4.914-1.092-11.193-5.733,3.685-.683,2.866-8.736,5.323-.409,5.6-15.834,5.46-2.866,4.5-9.418,1.229-8.736,3.685-2.828,4.756,6.779,5.5-13.1,13.258,5.173,2.263,4.2-4.2,5.658,1.616,1.456,22.312,10.347,8.73,10.509-6.467,9.377-1.293,5.335,7.437,13.742,2.91,2.91-6.629,9.216-.323,1.455-12.773,14.713.647,1.293,16.653,10.671-1.132,2.587-6.952,13.257-.647,3.072-16.329-2.425-5.336,7.761-4.365,1.778-16.491-5.82-10.509,26.838-7.276,10.833-11.156-2.081-14.409-7.942-5.655Z" transform="translate(81.956 296.169)" fill={zonesactive("Sikasso")} stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
    <path id="Caminho_770" data-name="Caminho 770" d="M1433.7,1729.116l9.419-1.229,2.867-4.5,15.834-5.46.409-5.6,8.736-5.323.683-2.867,5.733-3.685,1.092,11.193-2.594,4.914,13.377,9.828,8.736.819.273,5.46,3.549-.818,3.958-13.65,3.549-3.959,11.057-1.365-.137-6.825-5.187.137-5.051-3.413.2-7.254-1.375.292-9.2-7.027-13.385-.837-8.365-8.7,3.179-5.354-2.008-3.514,6.024-4.35,4.183-.669.335-4.852-3.514-7.362.5-12.548,11.21-17.234,7.027-.167-1.172-12.883-3.514-4.685,6.191-8.868,2.388-14.007-106.219-1.194,14.554,11.875.273,7.781,9.282.683,2.73,3.822v7.644l11.466,7.1-.136,6.825-11.329.546-4.095-3.139-8.736,4.1,1.365,4.231-4.641,4.914,4.914,6.689,4.1.819,3.958-4.368,3,3.139-4.231,7.235,3.14,8.873-4.914,11.329-.683,14.606-6.961,5.323-6.006-.409-.683,3.549-6.245,6.265,4.316,1.01,4.85,27.162,10.358,8.4,2.828-4.756Z" transform="translate(73.533 229.666)" fill={zonesactive("District de Bamako et zone périurbaine")} stroke="#fff" stroke-linejoin="round" stroke-width="6"/>
  </g>
</svg>

      </ZonesBamako>
      <ZonesInfos>
          <ZonesIcone src={"/static/assets/svg/zones.svg"} alt=""/>
          <h1>
      {locale=== "en" ?"Intervention":"zones"}

             <br/>
      {locale=== "en" ?"areas":"d’interventions"}

            
            </h1>
          
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
