import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_i7bJE84QP11alRDH8lY2Twkw00Jl1wYTZb'
    const onToken = token =>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(res=> {
            alert('payment successful')
        }).catch(err => {
            console.log('error ', JSON.parse(err))
        })
    }
    return(
        <StripeCheckout
            label="Pay Now"
            name="Drew Clothing"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;