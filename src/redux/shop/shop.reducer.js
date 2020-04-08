import SHOP_DATA from './shop.data'
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null
}

const shopReducer = (currentState = INITIAL_STATE, actions) => {
    switch(actions.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...currentState,
                collections:actions.payload
            }
        default:
        return currentState;
    }
}

export default shopReducer