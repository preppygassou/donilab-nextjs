import React, { useContext, useEffect } from 'react'
import { connect } from 'react-redux';
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
import { listHubs } from '../store/actions/HubActions';
import { CurrentLangContext } from '../Context/CurrentLangContext';
import { useRouter } from 'next/router';


const Index =({ hublistloading, hublistloadingerror, hubs, listHubsAction }) =>{
  const {locale} = useRouter()
  //const dispatch = useDispatch()
  // const hubList = useSelector((state) => state.hubList)
  //const { loading,error,hubs } = hubList;



  useEffect(() => {
    listHubsAction(locale)
  }, [locale, listHubsAction])


  return (
    <>
      <Hero />
      <ExpertiseSection />
        <BlogSlideSection />
      <ImpactSection />
        {
          hublistloading ? <div className='loading-overlay' ><div className="loading"></div></div> : hublistloadingerror ? <MessageBox></MessageBox> : (
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

const mapStateToProps = ({ hubList }) => {
  const { loading: hublistloading, error: hublistloadingerror, hubs } = hubList;
  return { hublistloading, hublistloadingerror, hubs };
};
const mapActionsToProps = {
  listHubsAction: listHubs
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default connect(mapStateToProps, mapActionsToProps)(Index)
