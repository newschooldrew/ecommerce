// actions:
// functions that return object

// thunk:
// functions that return a function that gets dispatch in it
// so whenever dispatch is called, it fires multiple actions
// this allows us to dispatch multiple fuctions to handle asynchronous code

import ShopActionTypes from './shop.types'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
    // switches the reducers' isFetching state
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {

    }
}