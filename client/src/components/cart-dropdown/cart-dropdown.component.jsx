import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import{selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'

import {toggleCartHidden} from '../../redux/cart/cart.actions.js'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.length ?(

            cartItems.map(cartItem =>(<CartItem key={cartItems.id} item={cartItem}/>
            ))
            ):
            <span className='empty-message'>No cart items</span>
        }
        <CustomButton onClick=
        {()=>{(history.push('/checkout'));
            dispatch(toggleCartHidden())
        }}>
            Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));