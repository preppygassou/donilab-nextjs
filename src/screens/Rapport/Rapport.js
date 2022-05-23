import React from 'react'
import { RapportPage, HeroRapport, Container, Cover, DownloadCtn, DownLoadBtn } from './styles'
import { Row, Col, Button } from 'react-bootstrap';
import RapportImg from '../../assets/Rapport_Donilab_2020-01.png'
import RapportImg2 from '../../assets/Rapport-dactivite-Donilab-2021-VF-01.png'

function Rapport() {
  return (
    <RapportPage>
      <HeroRapport>
        <h1> RAPPORT ANNUEL</h1>
      </HeroRapport>
      <Container>
        <Cover>
          <img src={RapportImg2} alt="RAPPORT 2021" />
        </Cover>
        <DownloadCtn>
          <h1>RAPPORT 2021</h1>
          <DownLoadBtn href="https://bit.ly/Rapport_Donilab_2021" target="_blank" className="allblog">
            Télecharger
          </DownLoadBtn>
        </DownloadCtn>

      </Container>
      <Container className="revers">
        
        <DownloadCtn>
          <h1>RAPPORT 2020</h1>
          <DownLoadBtn href="https://bit.ly/Rapport_Donilab_2020" target="_blank" className="allblog">
            Télecharger
          </DownLoadBtn>
        </DownloadCtn>
        <Cover>
          <img src={RapportImg} alt="RAPPORT 2020" />
        </Cover>

      </Container>

    </RapportPage>
  )
}

export default Rapport
