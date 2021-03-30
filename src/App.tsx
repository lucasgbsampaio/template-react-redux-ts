import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App(): ReactElement {
    return <Provider store={store}>Example</Provider>;
}
