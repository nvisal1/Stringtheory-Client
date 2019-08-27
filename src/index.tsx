import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducers from './reducers';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);
