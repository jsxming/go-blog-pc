import React from 'react';
import { Provider } from 'react-redux'
import { useStore } from '@/redux/store'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import {setRedirect} from '@/api/config';

import '@/styles/antd.reset.less';
import '@/styles/reset.less'
import './../styles/globals.less'


function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })
  

  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  </ConfigProvider>
  )
}


App.getInitialProps = async ({ ctx }) => {
  if(!process.browser){
    setRedirect(ctx.res)
  }
  return {
    props:{}
  }
}





// export default wrapper.withRedux(App)
export default App

