import SHOP_DATA from './shop.data.js'

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (currentState = INITIAL_STATE, actions) => {
    switch(actions.type){
        default:
        return currentState;
    }
}

export default shopReducer