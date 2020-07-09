import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
// importing local storage
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    //starting to store info at root
    key:'root',
    storage,
    // array containing string names of reducer
    // that we want to store
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop: shopReducer
});

// modified version of root reducer that persists
export default persistReducer(persistConfig,rootReducer)