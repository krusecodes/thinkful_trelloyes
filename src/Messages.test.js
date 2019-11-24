import React from 'react';
import ReactDOM from 'react-dom';
import messages from './Messages';
import { isTSAnyKeyword } from '@babel/types';
import renderer from 'react-test-renderer';

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });