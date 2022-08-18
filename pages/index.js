import React, { useContext } from 'react'
import ExpertiseSection from '../Components/ExpertiseSection'
import { Dexpertise } from '../Components/Dexpertise/index'
import Hero from '../Components/Hero'
import BlogSlideSection from '../Components/BlogSlideSection';
import ImpactSection from '../Components/ImpactSection';
import TeamSection from '../Components/TeamSection';
import PartnersSection from '../Components/PartnersSection';
import Labelafricinnov from '../Components/Labelafricinnov';
import { HubContext } from '../services/hub/hub.context';
import ClientRepository from '~/repositories/ClientRepository';
import Layout from '~/Components/layouts/Layout';

const Index = ({ hubs, expertises, blogs, impacts, dexpertises, partners, generales }) => {
  /*   const { state:stateLocale } = useContext(CurrentLangContext);
    const {locale} =  stateLocale */

  const { state } = useContext(HubContext);
  const {/* hubs, */loading, error } = state

  return (
    <Layout generales={generales}>
      <Hero />
      {expertises && expertises.length > 0 && <ExpertiseSection expertises={expertises} />}

      {blogs && blogs.length > 0 && <BlogSlideSection posts={blogs} />}
      {impacts && impacts.length > 0 && <ImpactSection impacts={impacts} />}
      {
        hubs && hubs.length > 0 && (
          hubs.map((hub, index) => (
            hub.title.rendered === "Hub de Bamako" ? (
              <TeamSection home="home" hub={hub} />
            ) : hub.title.rendered === "Bamako Hub" ? (
              <TeamSection home="home" hub={hub} />
            ) : hub.title.rendered === "Hub of Bamako" ? (
              <TeamSection home="home" hub={hub} />
            ) : <></>
          ))

        )
      }
      {dexpertises && dexpertises.length > 0 && <Dexpertise dexpertises={dexpertises} />}
      {partners && partners.length > 0 && <PartnersSection partenaires={partners} />}
      <Labelafricinnov />
    </Layout>
  )
}



export async function getStaticProps({ req, res, locale }) {




  const reshubs = await ClientRepository.get(
    `/hubs/?lang=${locale}`
  );
  const resexpertise = await ClientRepository.get(
    `/expertises/?lang=${locale}`
  );
  const resdexpertise = await ClientRepository.get(
    `/dexpertise/?lang=${locale}`
  );
  const resimpact = await ClientRepository.get(
    `/impacts/?lang=${locale}`
  );
  const resblogs = await ClientRepository.get(
    `/posts/?lang=${locale}`
  );
  const respartners = await ClientRepository.get(
    "/partenaire"
  );
  const resgenerales = await ClientRepository.get(
    `/generale/?lang=${locale}`
  );

  /* res.setHeader('Cache-Control',
  'public, s-maxage=20, stale-while-revalidate=59')  */
  // console.log(res.data)
  return {
    props: {
      hubs: reshubs.data,
      expertises: resexpertise.data,
      dexpertises: resdexpertise.data,
      blogs: resblogs.data,
      impacts: resimpact.data,
      partners: respartners.data,
      generales: resgenerales.data,
    }, // will be passed to the page component as props
    revalidate: 10,
  }
}


export default Index

