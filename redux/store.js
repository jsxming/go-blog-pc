import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './reducer/reducer'
import rootSaga from './saga/saga'
import { isDev } from '@/config/index';



const bindMiddleware = (middleware) => {
  if (isDev) {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export let Store;

export const initStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)
  Store = store;
  return store
}

// export const wrapper = createWrapper(initStore, { debug: isDev })
export const wrapper = createWrapper(initStore, { debug: false })