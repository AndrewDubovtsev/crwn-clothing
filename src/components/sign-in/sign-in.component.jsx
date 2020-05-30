import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({email: '', password: '', error: ''});
    const {email, password, error} = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({email: '', password: '', error: ''});
        } catch (e) {
          setCredentials({...userCredentials, error: e.message});
        }
    };

    const handleChange = (e) => {
        const {value, name} = e.target;
        setCredentials({...userCredentials, [name]: value});
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    value={email}
                    type='email'
                    label='email'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name='password'
                    value={password}
                    type='password'
                    label='password'
                    handleChange={handleChange}
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        isGoogleSignIn={true}
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
};

export default SignIn;