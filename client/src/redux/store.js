import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'

import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
// allows us to cache store
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();


const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
    // push logger into array when environment is dev
}
// create-react-app sets environment variable
// can be called through calling "env"
// "production",  "environment", or  "test"
// yarn build -> switch "env" to 

export const store = createStore(rootReducer,applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

// persisted version of our store
export const persistor = persistStore(store)
export default {store, persistor};

// persist: checking if anything exists
// if there is then I want to rehydrate