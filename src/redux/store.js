import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
// allows us to cache store

import rootReducer from './root-reducer';

const middlewares = []

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
    // push logger into array when environment is dev
}
// create-react-app sets environment variable
// can be called through calling "env"
// "production",  "environment", or  "test"
// yarn build -> switch "env" to 

export const store = createStore(rootReducer,applyMiddleware(...middlewares))
// persisted version of our store
export const persistor = persistStore(store)
export default {store, persistor};

// persist: checking if anything exists
// if there is then I want to rehydrate