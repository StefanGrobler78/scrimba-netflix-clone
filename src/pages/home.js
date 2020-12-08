import React from 'react';
import { OptForm } from '../components';
import { Feature } from '../components'
import { FaqsContainer } from '../containers/faqs';
import { JumbotronContainer } from '../containers/JumbotronContainer';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Home() {
    return (
        <div>
            <HeaderContainer>
                <Feature>
                        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart
                        your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </div>
    )
}