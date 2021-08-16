import styled, { css } from "styled-components/macro";
export const RapportPage = styled.section`

`;

export const Container = styled.div`
display: flex;
gap: 3rem;
padding: 8vh 10vh;
flex-wrap: wrap;
height: 100%;
`;
export const Cover = styled.div`
height: 100%;
img{
  border-top-right-radius: 3.75rem;
border-bottom-left-radius: 3.75rem;
height:80vh ;
}
`;
export const DownloadCtn = styled.div`
h1{
  margin-bottom: 2rem;
  font-family:"CeraRoundPro-Bold";
    font-size: 2rem;
    line-height: 1.16; 
    font-size: 3rem;
    
    letter-spacing: -0.03em;
    color: #2755A1;

}
`;

export const HeroRapport = styled.div`
  text-align:left;
  
  background-color: #2755a1;
  padding:10rem 10rem 7rem 10rem;
  h1 {
    font-family:"CeraRoundPro-Bold";
    font-size: 3rem;
    line-height: 1.16; 
    font-size: 3rem;
    
    letter-spacing: -0.03em;
    color: rgb(255, 255, 255);
  }
  @media  (max-width: 900px) {
    padding:5rem;
    h1{
    font-size: 2rem;

    }

}
@media  (max-width: 400px) {
  padding:3rem 2rem;

    }
`;

export const DownLoadBtn = styled.a`
color:#fff;
background-color:#2755A1;
border-radius:30px;
padding:.5rem 1rem;
font-size: 1.2rem;
font-weight: bold;
text-transform: uppercase;
font-family:"CeraRoundPro-Bold";
text-decoration:none;
user-select:none;
transition:0.3s;
border-radius:25px;
&:hover{

transform:scale(1.05);
}
@media (max-width:768px){

font-size: 1rem;

}

`;
