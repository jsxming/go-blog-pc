import { useMemo } from 'react'

import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducer/index'
import rootSaga from './saga/index'


let store;

const exampleInitialState = {
  token:'',
  types:[],
  user:{}
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}



const persistConfig = {
  key: '962464kill',
  storage,
  // whitelist: ['token'], // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = (initialState = exampleInitialState) => {
  // wrapper.getServerSideProps wrapper.getStaticProps  使用这两个方法时会把next的context对象传过来
  const isValid = typeof initialState.res === 'undefined';
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(persistedReducer,isValid ? initialState : undefined , bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store
  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}


export const wrapper = createWrapper(makeStore, { debug: false })


