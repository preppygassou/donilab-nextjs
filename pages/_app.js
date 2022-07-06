import moment from "moment";
import { ConfigProvider } from "antd";
import React from 'react';
import { appWithTranslation } from 'next-i18next';
//import DefaultLayout from '../components/layouts/DefaultLayout';
import { useEffect } from 'react';
import Layout from "../Components/layouts/Layout";
import { useRouter } from "../node_modules/next/router";
import ErrorBoundary from "../Components/ErrorBoundary";
import { PostContextProvider } from "../services/post/post.context";
import { ExpertiseContextProvider } from "../services/expertise/expertise.context";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HubContextProvider } from "../services/hub/hub.context";
import { DexpertiseContextProvider } from "../services/dexpertise/dexpertise.context";
import { GeneralContextProvider } from "../services/general/general.context";
import { ProgramContextProvider } from "../services/program/program.context";
import { PartenaireContextProvider } from "../services/partenaire/partenaire.context";
import { EventContextProvider } from "../services/event/event.context";
import { ImpactContextProvider } from "../services/impact/impact.context";
import { AboutContextProvider } from "../services/about/about.context";
import '../sass/themes/donilab.dark.scss';


moment.locale("fr");

const MyApp = (props) => {
    const { Component, pageProps } = props;
    const { locale } = useRouter()
    // const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);

        //  setState({ open: true });

    }, [])


    return (
        <ConfigProvider locale={locale}>
            <GeneralContextProvider locale={locale}>
                <ExpertiseContextProvider locale={locale}>
                    <PostContextProvider locale={locale}>
                        <DexpertiseContextProvider locale={locale}>
                            <PartenaireContextProvider locale={locale}>
                                <ImpactContextProvider locale={locale}>
                                    <ProgramContextProvider locale={locale}>
                                        <HubContextProvider locale={locale}>
                                            <EventContextProvider locale={locale}>
                                            <AboutContextProvider locale={locale}>

                                                <Layout>
                                                    <ErrorBoundary>
                                                        <Component {...pageProps} />
                                                    </ErrorBoundary>
                                                </Layout>

                                            </AboutContextProvider>
                                            </EventContextProvider>
                                        </HubContextProvider>
                                    </ProgramContextProvider>
                                </ImpactContextProvider>
                            </PartenaireContextProvider>
                        </DexpertiseContextProvider>
                    </PostContextProvider>
                </ExpertiseContextProvider>
            </GeneralContextProvider>
        </ConfigProvider>

    );

}

export const getServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
        },
    };
};

export default appWithTranslation(MyApp);

