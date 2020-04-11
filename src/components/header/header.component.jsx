import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/myLogo.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {signOutStart} from '../../redux/user/user.actions'

const Header = ({currentUser,hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/contact'>
                Contact
            </OptionLink>            
        {currentUser ?
        <OptionLink as='div' onClick={signOutStart}>Sign out</OptionLink>   
        :(
        <OptionLink 
        to='/signin'>Sign In</OptionLink>
        )}
        <CartIcon />
        </OptionsContainer>
    {hidden ? null: (
        <CartDropdown />
    )}
    </HeaderContainer>
)

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

const mapStateToProps = createStructuredSelector({
    //createStructuredSelector bundles up all of selectors
    // and it will automatically pass in state to each selector
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
    // we get the user from root-reducer.js
    // user: userReducer
    // and userReducer returns currentUser
    // we pass in currentUser in Header component
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);