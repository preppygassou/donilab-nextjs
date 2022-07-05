import moment from "moment";
import { ConfigProvider } from "antd";
import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import store from "../store/store";
import DefaultLayout from '../components/layouts/DefaultLayout';
import '../sass/themes/donilab.dark.scss';
import { useEffect } from 'react';
import Layout from "../Components/layouts/Layout";
import { useRouter } from "../node_modules/next/router";


moment.locale("fr");

const MyApp = (props) => {
    const { Component, pageProps } = props;
    const {locale} = useRouter()
    // const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);

        //  setState({ open: true });

    }, [])




     const getLayout = Component.getLayout || (page => <DefaultLayout>{page}</DefaultLayout>);
    return getLayout(
        <ConfigProvider locale={locale}>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </ConfigProvider>

    );

}

export default appWithTranslation(MyApp);

