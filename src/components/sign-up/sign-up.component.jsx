import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    });

    const {
        displayName,
        email,
        password,
        confirmPassword,
        error
    } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setCredentials({
                ...userCredentials,
                error: 'Passwords do no match'
            });
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            setCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                error: ''
            });
        } catch (e) {
            setCredentials({
                ...userCredentials,
                error: e.message
            });
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
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
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
};

export default SignUp;