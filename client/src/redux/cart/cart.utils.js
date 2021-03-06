export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(
        cartItem =>cartItem.id === cartItemToAdd.id
        )
        if(existingCartItem){
            return cartItems.map(cartItem =>
                    // returns a new array
                    // this returns a new version of our state
                    // so our components know how to re render properly
                    cartItem.id === cartItemToAdd.id
                    ? {...cartItem, quantity:cartItem.quantity + 1}
                    : cartItem
            )
        }

        return [...cartItems,{...cartItemToAdd,quantity:1}]
    }

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
// find out if there is an item in the count
    const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToRemove.id
        )
        // check if quantity is one
        // you want to keep the values where they dont match
        if(existingCartItem.quantity === 1){
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
            }
                // bring in cartItem
             return  cartItems.map(cartItem => 
                    cartItem.id == cartItemToRemove.id
                    ? {...cartItem,quantity: cartItem.quantity - 1}
                    : cartItem
                // otherwise decrease the quantity                
                // the new value of quantity is whatever that items quantity is, minus 1
                    
            )
        }