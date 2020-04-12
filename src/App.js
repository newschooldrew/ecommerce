import React,{ useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import logo from './logo.svg';
import './App.css';

import {selectCurrentUser} from './redux/user/user.selectors'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import { checkUserSession } from './redux/user/user.actions'
import CheckoutPage from './pages/checkout/checkout.component';

const App = ({currentUser, checkUserSession}) => {

useEffect(() =>{
  checkUserSession()
},[checkUserSession])

  return (
    <div>
      <Header/>
      {/* route gives us 
        - history
          + history.push gives us ability to change routes
            * useful for onClick methods to history.push('/linkToPage')
        - match
          + "url" 
          + "params.<Id>"
            * helpful for path='/topics/:topicId'
        - location : where we are currently
          + hash and search
          + "pathname" gives us the full pathname
        */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
    </div>
    );
  }

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: user => dispatch(checkUserSession())
  // way for redux to know the object you're 
  // passing is an action object to pass
  // to every reducer
})

//connect(mapDispatchToProps,)
export default connect(mapStateToProps,mapDispatchToProps)(App);
