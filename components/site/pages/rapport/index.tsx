"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import styled from 'styled-components';
import Layout from '@/components/site/components/Layout';
import { useSite } from '@/hooks/useSites';
import LoadingPage from '@/components/global/loading-page';

export const RapportPage = styled.section`

`;


export const Container = styled.div`
display: flex;
gap: 3rem;
padding: 8vh 0vh 8vh 40vh;
flex-wrap: wrap;
height: 100%;

.revers{
 
  @media  (max-width: 900px) {
    flex-wrap: wrap-reverse !important;
 
}
}

@media  (max-width: 900px) {
  padding: 8vh 10vh 8vh 10vh;
 
}
@media  (max-width: 400px) {
  width:100%;
  padding:3rem;
 

    }
`;
export const Cover = styled.div`
//width:90vh;
height: 100%;
img{
 // width:100% ;
  border-top-right-radius: 3.75rem;
border-bottom-left-radius: 3.75rem;
height:80vh ;
@media  (max-width: 900px) {
  width:100%;
  height:100% ;
    }
}
`;
export const DownloadCtn = styled.div`
h1{
  margin-bottom: 2rem;
  font-family:"Cera Round Pro";
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
    font-family:"Cera Round Pro";
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
font-family:"Cera Round Pro";
text-decoration:none;
user-select:none;
transition:0.3s;
border-radius:25px;
&:hover{
color:#fff;
transform:scale(1.05);
}
@media (max-width:768px){

font-size: 1rem;

}

`;

const Rapport = () =>{

  const params = useParams<{ locale: string; }>()
  const { locale} = params;
 const { data: site, isLoading, error } = useSite("dml");

  return (
    <>
    {
      isLoading?<LoadingPage/>:
    <Layout data={site} footer={site?.data?.footer}>
    <RapportPage>
      <HeroRapport>
        <h1> {locale==="en"?"ANNUAL REPORT":"RAPPORT ANNUEL"}</h1>
      </HeroRapport>
      {site?.reports && site.reports.map((report, index) => (
        <Container key={index} className={index % 2 === 1 ? "revers" : ""}>
          {index % 2 === 0 && (
        <Cover>
          <img src={report?.featured_media?.url} alt={`RAPPORT ${report.year}`} />
        </Cover>
          )}
          <DownloadCtn>
        <h1>{locale === "en" ? "REPORT" : "RAPPORT"} {report.year}</h1>
        <DownLoadBtn href={report.link} target="_blank" className="allblog">
          {locale === "en" ? "Download" : "Télecharger"}
        </DownLoadBtn>
          </DownloadCtn>
          {index % 2 === 1 && (
        <Cover>
          <img src={report?.featured_media?.url} alt={`RAPPORT ${report.year}`} />
        </Cover>
          )}
        </Container>
      ))}
      
    </RapportPage>
    </Layout>
     }
     </>
     
  )
}

export default Rapport
