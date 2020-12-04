import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import {GlobalStyles} from './global-styles'

ReactDOM.render(
    <div>
        <GlobalStyles />
            <App />
    </div>,
         document.getElementById('root')
        );
