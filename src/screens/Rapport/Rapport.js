import React from 'react'
import {RapportPage,HeroRapport,Container,Cover,DownloadCtn,DownLoadBtn} from './styles'
import {Row,Col,Button} from 'react-bootstrap';
import RapportImg from '../../assets/Rapport_Donilab_2020-01.png'

function Rapport() {
  return (
    <RapportPage>
      <HeroRapport>    
       <h1> RAPPORT ANNUEL</h1>
     </HeroRapport>
     <Container>
    <Cover>
      <img src={RapportImg} alt="" />
      </Cover>
    <DownloadCtn>
      <h1>RAPPORT 2020</h1>
      <DownLoadBtn href="http://donilab.org/Rapport_Donilab_2020.pdf" target="_blank" className="allblog">
          Télecharger
        </DownLoadBtn>
    </DownloadCtn>
 
</Container>
     
    </RapportPage>
  )
}

export default Rapport
