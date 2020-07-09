import React from 'react'
import './checkout-item.styles.scss'

import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'

const checkoutItem = ({cartItem,clearItem, addItem, removeItem}) =>{
    const {name, quantity,price, imageUrl} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10134;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10133;</div>
        </span>
        <span className='price'>{price}</span>
        <div onClick={()=> clearItem(cartItem)} className='remove-button'>&#10008;</div>
    </div>
        )
    }
const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(checkoutItem);