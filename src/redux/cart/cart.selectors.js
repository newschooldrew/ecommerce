import {createSelector} from 'reselect';

// input selector
// function that gets the whole state and returns a slice of it
// 
// we just want the cart
const selectCart = state => state.cart;
// state gets passed from component

export const selectCartItems = createSelector(
    // input selector
    [selectCart],
    cart => cart.cartItems
    //grabs cartItems from state; see cart reducer
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    // pass to the component you want to use this function in
    // pass the destructred state of cart and its functionality
    // here to reference from that component
    cartItems.reduce(
        (accumulatedQuantity,cartItem)=>
        accumulatedQuantity + cartItem.quantity, 
        0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity,cartItem)=>
        accumulatedQuantity + cartItem.quantity * cartItem.price, 
        0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)