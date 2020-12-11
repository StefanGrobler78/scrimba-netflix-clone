import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components'
import * as ROUTES from '../constants/routes';

export default function SignUp(){
    const [error, setError] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('')

    const isInValid = firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (event) => {
        event.prevDefault();
    }

    return (
        <div>
        <HeaderContainer>
            <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error> }
                <Form.Base onSubmit={handleSignUp} method="POST">
                    <Form.Input 
                        type="text"
                        placeholder="First Name"
                        value= {firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />
                    {/* <Form.Input 
                        type="text"
                        placeholder="Last Name"
                        value= {lastName}
                        onChange={({ target }) => setLastName(target.value)}
                    /> */}
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={({ target }) => setPassword(target.value)} 
                    />
                    <Form.Submit disabled={ isInValid } type="submit">
                        Sign Up
                    </Form.Submit>
                </Form.Base>
                <Form.Text>
                        Already a Member? <Form.Link to="/signin">Log In.</Form.Link>
                </Form.Text>    
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </div>
    )
}