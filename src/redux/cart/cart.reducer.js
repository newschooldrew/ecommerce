import CartActionTypes from './cart.types'
import {addItemToCart, removeItemFromCart} from './cart.utils.js'

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (currentState = INITIAL_STATE,action) =>{
    switch(action.type){

        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...currentState,
                hidden:!currentState.hidden
            };

        case CartActionTypes.ADD_ITEM:
            return{
                ...currentState,
                cartItems:addItemToCart(currentState.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...currentState,
                // if the id of the item you pass in doesnt match the id of the item in your cart
                // then you keep it
                // otherwise filter it out
                cartItems:currentState.cartItems.filter(
                    cartItem => cartItem.id !==action.payload.id
                    )
            }

        case CartActionTypes.REMOVE_ITEM:
            return{
                ...currentState,
                cartItems:removeItemFromCart(currentState.cartItems,action.payload)
            }
            
            default:
                return currentState;
        }
    }

export default cartReducer