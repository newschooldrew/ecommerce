import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {signUpStart} from '../../redux/user/user.actions'

import './sign-up.styles.scss'

const SignUp = ({signUpStart}) => {

    
    const [signUpCredentials, setsignUpCredentials] = useState({displayName:'',email:'',password:'',confirmPassword:''})
    const {displayName,email,password,confirmPassword} = signUpCredentials;

    const handleSubmit = async e => {
            e.preventDefault();
            // const {signUpStart} = this.props;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        signUpStart({displayName,email,password});
    }

    const handleChange = e => {
        const {name,value} = e.target;

        setsignUpCredentials({...signUpCredentials,[name]:value})
    }

        // const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm password'
                        required
                    />
                    <CustomButton 
                        type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch =>({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);