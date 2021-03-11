import React, { useEffect } from 'react';
import { wrapper, useStore, initializeStore } from '@/redux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { setRedirect } from '@/api/config';
import API from "@/api/index";
import { setTypes, queryArticles } from '@/redux/actions';
import { END } from 'redux-saga';
import "../styles/antd.reset.less"
import "../styles/reset.less"
import "../styles/globals.less"

function App({ Component, pageProps, initialReduxState }) {
    const initStore = useStore(initialReduxState)
    useEffect(() => {
        console.log('hello 你好~我是迷人的瓜');
    }, [])
    return (
        <ConfigProvider locale={zhCN}>
            <Provider store={initStore} >
                <Component {...pageProps} />
            </Provider>
        </ConfigProvider>
    )
}



App.getInitialProps = async ({ ctx }) => {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;
    if (!process.browser) {
        setRedirect(ctx.res)
    }
    let typeList = await API.queryTypes()
    dispatch(setTypes(typeList))
    dispatch(queryArticles())
    dispatch(END)
    await reduxStore.sagaTask.toPromise()
    return { initialReduxState: reduxStore.getState() }
}

export default wrapper.withRedux(App)

