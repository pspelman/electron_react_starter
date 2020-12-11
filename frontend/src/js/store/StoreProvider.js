import React from 'react';
import { Provider } from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from '../reducers/app';
import settingsReducer from '../reducers/settings';

import configureStore from '../store';
// const store = configureStore();
// const store = createStore
// const rootReducer = combineReducers({
//   settings: settingsReducer,
//   app: appReducer
// });

const store = configureStore()



export default function StoreProvider({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
