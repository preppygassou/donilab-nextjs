import React from 'react';
import moment from "moment";
import { ConfigProvider } from "antd";
//import DefaultLayout from '../components/layouts/DefaultLayout';
import Layout from "../Components/layouts/Layout";
import ErrorBoundary from "../Components/ErrorBoundary";
import { PostContextProvider } from "../services/post/post.context";
import { ExpertiseContextProvider } from "../services/expertise/expertise.context";
import { HubContextProvider } from "../services/hub/hub.context";
import { DexpertiseContextProvider } from "../services/dexpertise/dexpertise.context";
import { GeneralContextProvider } from "../services/general/general.context";
import { ProgramContextProvider } from "../services/program/program.context";
import { ProgramPartnersContextProvider } from "../services/partner/partner.context";
import { PartenaireContextProvider } from "../services/partenaire/partenaire.context";
import { EventContextProvider } from "../services/event/event.context";
import { ImpactContextProvider } from "../services/impact/impact.context";
import { AboutContextProvider } from "../services/about/about.context";
import '../sass/themes/donilab.dark.scss';
import CurrentLangContextProvider, { CurrentLangContext } from "~/Context/CurrentLangContext";


moment.locale("fr");

const MyApp = (props) => {
    const { Component, pageProps } = props;
   

    return (
        <CurrentLangContextProvider>
        <ConfigProvider /* locale={"FR"} */>
            <GeneralContextProvider>
                <ExpertiseContextProvider>
                    <PostContextProvider>
                        <DexpertiseContextProvider>
                            <PartenaireContextProvider>
                                <ImpactContextProvider>
                                    <ProgramContextProvider>
                                    <ProgramPartnersContextProvider>
                                        <HubContextProvider>
                                            <EventContextProvider>
                                            <AboutContextProvider>

                                                <Layout>
                                                    <ErrorBoundary>
                                                        <Component {...pageProps} />
                                                    </ErrorBoundary>
                                                </Layout>

                                            </AboutContextProvider>
                                            </EventContextProvider>
                                        </HubContextProvider>
                                    </ProgramPartnersContextProvider>
                                    </ProgramContextProvider>
                                </ImpactContextProvider>
                            </PartenaireContextProvider>
                        </DexpertiseContextProvider>
                    </PostContextProvider>
                </ExpertiseContextProvider>
            </GeneralContextProvider>
        </ConfigProvider>
        </CurrentLangContextProvider>

    );

}


export default MyApp;

