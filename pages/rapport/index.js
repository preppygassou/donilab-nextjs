import React from 'react'
import Layout from '../../Components/layouts/Layout'
import { RapportPage, HeroRapport, Container, Cover, DownloadCtn, DownLoadBtn } from './styles'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Rapport() {
  return (
    <>
    <RapportPage>
      <HeroRapport>
        <h1> RAPPORT ANNUEL</h1>
      </HeroRapport>
      <Container>
        <Cover>
          <img src={"/static/assets/Rapport-dactivite-Donilab-2021-VF-01.png"} alt="RAPPORT 2021" />
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
          <img src={"/static/assets/Rapport_Donilab_2020-01.png"} alt="RAPPORT 2020" />
        </Cover>

      </Container>

    </RapportPage>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
export default Rapport
