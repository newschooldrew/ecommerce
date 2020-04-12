import React,{useState} from 'react';
import {connect} from 'react-redux'
import FormIput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import './sign-in.styles.scss'

const SignIn = ({emailSignInStart,googleSignInStart}) => {
    
    const [userCredentials, setCredentials] = useState({email:'',password:''})

    const {email,password} = userCredentials;
    
    const handleSubmit = async e =>{
        e.preventDefault();
        // const {email,password} = this.state;
        emailSignInStart(email,password)
}

const handleChange = e =>{
    const {value,name} = e.target;
    setCredentials({...userCredentials,[name]:value})
}

    // const {googleSignInStart} = this.props;
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>
            <form onSubmit={handleSubmit}>
                <FormIput type="email" label="email" name="email" value={email} onChange={handleChange} required/>

                <FormIput type="password" label="password" name="password" value={password} onChange={handleChange} required/>
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

const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null, mapDispatchToProps)(SignIn);