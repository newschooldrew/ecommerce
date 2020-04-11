import React from 'react';
import {connect} from 'react-redux'
import FormIput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:''
        }
    }
    
    handleSubmit = async e =>{
        e.preventDefault();
        const {emailSignInStart} = this.props;
        const {email,password} = this.state;
        emailSignInStart(email,password)
}

handleChange = e =>{
    const {value,name} = e.target;
    this.setState({[name]:value})
}
render(){
    const {googleSignInStart} = this.props;
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>
            <form onSubmit={this.handleSubmit}>
                <FormIput type="email" label="email" name="email" value={this.state.email} onChange={this.handleChange} required/>

                <FormIput type="password" label="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
        )
    }
}
const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null, mapDispatchToProps)(SignIn);