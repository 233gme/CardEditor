import React from 'react';
import { render } from 'react-dom';
import App from './Containers/App';
import store from './Store/store';
import { Provider } from 'react-redux';

render(<Provider store={store}><App /></Provider>, document.getElementById('root'))