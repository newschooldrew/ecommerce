// moving fetchCollectionsStartAsync to this file

import {takeLatest, call, put, all} from 'redux-saga/effects'
// takeEvery
// creates non blocking call in order to create other sagas
// can cancel tasks coming from 
// call
// the code inside the generator function that invokes the method
// put
// saga effect for creating actions
// dispatches action
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess,fetchCollectionsFailure} from './shop.actions'
import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync(){
    yield console.log('fetchCollectionsStartAsync has run')

    try{
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(err){
        yield put(fetchCollectionsFailure(err.message))
    }
    // collectionRef.get().then(
    //  snapshot =>{
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // })
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}