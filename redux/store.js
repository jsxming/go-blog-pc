import { useMemo } from 'react'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer/index'
import rootSaga from './saga/index'
import { isDev } from '@/config/index';


let store;

const initialState = {
  user: {},
  types: [],
  token: "",
}


const bindMiddleware = (middleware) => {
  if (isDev) {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}


export function initStore(preloadedState = initialState) {
  const sagaMiddleware = createSagaMiddleware()
  // 防止 createWrapper 函数传入context对象进来初始化 导致数据错误的问题
  const isValid = typeof preloadedState.AppTree === 'undefined';
  let s = createStore(
    rootReducer,
    isValid ? preloadedState : undefined,
    bindMiddleware([sagaMiddleware])
  )
  s.sagaTask = sagaMiddleware.run(rootSaga)
  return s
}


export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export const wrapper = createWrapper(initStore, { debug: false })


export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) store = _store

  return _store
}

