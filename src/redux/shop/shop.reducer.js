import SHOP_DATA from './shop.data'
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (currentState = INITIAL_STATE, actions) => {
    switch(actions.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...currentState,
                isFetching:true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...currentState,
                isFetching:false,
                collections:actions.payload
            }
            case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...currentState,
                isFetching:false,
                errorMessage:actions.payload
            }            
        default:
        return currentState;
    }
}

export default shopReducer