import React, { useContext } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ExpertiseSection from '../Components/ExpertiseSection'
import { Dexpertise } from '../Components/Dexpertise/index'
import Hero from '../Components/Hero'
import BlogSlideSection from '../Components/BlogSlideSection';
import ImpactSection from '../Components/ImpactSection';
import TeamSection from '../Components/TeamSection';
import PartnersSection from '../Components/PartnersSection';
import Labelafricinnov from '../Components/Labelafricinnov';
import MessageBox from '../Components/MessageBox';
import { useRouter } from 'next/router';

import { HubContext } from '../services/hub/hub.context';

const Index =() =>{
/*   const {locale} = useRouter() */

  const { state } = useContext(HubContext);
  const {hubs,loading,error} =  state

  return (
    <>
      <Hero />
      <ExpertiseSection />
        <BlogSlideSection />
      <ImpactSection />
        {
          loading ? <div className='loading-overlay' ><div className="loading"></div></div> : error ? <MessageBox></MessageBox> : (
            hubs.map((hub, index) => (
              index === 0 && (
                <TeamSection home="home" hub={hub} />

              )
            ))
          )
        }
      <Dexpertise />
        <PartnersSection />
      <Labelafricinnov />
    </>
  )
}



export const getServerSideProps = async ({ locale }) => {
 /*  const client = new ApolloClient({
    uri: 'https://blog.donilab.org/graphql',
    cache: new InMemoryCache(),
  });

  const lang ={lang:locale} */

  // const client = ...

/* const response= await client
.query({
  query: gql`
  query NewQuery {
    posts {
      edges {
        node {
          id
          title
          uri
          excerpt
          content
          date
          categories {
            edges {
              node {
                id
                name
              }
            }
          }
          featuredImage {
            node {
              id
              sourceUrl
            }
          }

          
        }
      }
    }
  }
  `,
}) */

//const posts = response.data.posts.edges.map(({node})=>node)

  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
/*       posts */
    },
  };
};
export default Index
