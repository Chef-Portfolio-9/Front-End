import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
document.getElementById('root'));


