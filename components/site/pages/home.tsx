"use client"
import React from 'react'
/* 
import { HubContext } from '../../services/hub/hub.context'; */
import Hero from '@/components/site/components/Hero'
import ExpertiseSection from '@/components/site/components/ExpertiseSection'
import BlogSlideSection from '@/components/site/components/BlogSlideSection';
import ImpactSection from '@/components/site/components/ImpactSection';
import TeamSection from '@/components/site/components/TeamSection';
import Dexpertise from '@/components/site/components/Dexpertise'
import PartnersSection from '@/components/site/components/PartnersSection';
import Labelafricinnov from '@/components/site/components/Labelafricinnov';
import Layout from '@/components/site/components/Layout';
import { useSite } from '@/hooks/useSites';
import Loading from '@/components/global/loading';


export default function Home(/* { hubs, expertises, blogs, impacts, dexpertises, partners, generales } */) {
//  const { data, isLoading, error } = useSite("dml");
 const { data: site, isLoading, error } = useSite("dml");

  return (
    <>
    {
      isLoading?<Loading/>:<Layout data={site} footer={site?.data?.footer}>

      <Hero site={site}/>
      {site?.expertise && site?.expertise.length > 0 && <ExpertiseSection expertises={site?.expertise} />}
      {site?.posts && site?.posts.length > 0 && <BlogSlideSection posts={site?.posts} />}
      {site?.impact && site?.impact.length > 0 && <ImpactSection impacts={site?.impact} />}
      {
        site?.teams && site?.teams.length > 0 && <TeamSection home="home" teams={site?.teams} />
      }
      {site?.services && site?.services.length > 0 && <Dexpertise dexpertises={site?.services} />}

      {site?.partners && site?.partners.length > 0 && <PartnersSection partenaires={site?.partners} />}
      <Labelafricinnov />
    </Layout>
    }
    </>
    
  )
}



/* export async function getStaticProps({ req, res, locale }) {




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

  return {
    props: {
      hubs: reshubs.data,
      expertises: resexpertise.data,
      dexpertises: resdexpertise.data,
      blogs: resblogs.data,
      impacts: resimpact.data,
      partners: respartners.data,
      generales: resgenerales.data,
    }, 
    revalidate: 10,
  }
}
 */

