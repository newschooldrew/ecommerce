import React from 'react';

import FormIput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
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
        
        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        } catch(err){
            console.error(err)
        }
        
        this.setState({email:'',password: ''})
}

handleChange = e =>{
    const {value,name} = e.target;
    this.setState({[name]:value})
}
render(){
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>
            <form onSubmit={this.handleSubmit}>
                <FormIput type="email" label="email" name="email" value={this.state.email} onChange={this.handleChange} required/>

                <FormIput type="password" label="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

export default SignIn;