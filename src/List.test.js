import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { isTSAnyKeyword } from '@babel/types';

isTSAnyKeyword('renders wihtout crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});