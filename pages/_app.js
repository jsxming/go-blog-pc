import React, { useEffect } from 'react';
import '@/styles/antd.reset.less';
import '@/styles/reset.less'
import './../styles/globals.less'
import { parseCookies } from '../util/index';
import { wrapper } from '@/redux/store'
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '@/redux/actions';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN'
import API from '@/api/index';
import { setServerToken } from '@/api/config';

//页面切换 跳转到顶部
function scrollTop() {
  document.body.scrollTo(0, 0)
}

function App({ Component, pageProps, token, userInfo }) {
  // let dispatch = useDispatch()
  // if (token) {
  //   dispatch(setToken(token))
  //   dispatch(setUser(userInfo))
  // }

  // useEffect(() => {
  //   scrollTop()
  // })

  return <ConfigProvider locale={zhCN}>
    <Component {...pageProps} />
  </ConfigProvider>
}


App.getInitialProps = async ({ ctx }) => {
  // let token = '',
  //   userInfo = {};
  // if (ctx && ctx.req) {
  //   let cookieObj = parseCookies(ctx.req.headers.cookie || "")
  //   token = cookieObj.token || ''
  //   if (token !== '') {
  //     setServerToken(token)
  //     userInfo = await API.queryUser()
  //   }
  // }

  return {
    // token,
    // userInfo
  }
}


export default wrapper.withRedux(App)

