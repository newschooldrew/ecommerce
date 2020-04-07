import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
// allows us to cache store

import rootReducer from './root-reducer';

const middlewares = [logger]

export const store = createStore(rootReducer,applyMiddleware(...middlewares))
// persisted version of our store
export const persistor = persistStore(store)
export default {store, persistor};

// persist: checking if anything exists
// if there is then I want to rehydrate