import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App(1)';
import FirstPage from './First';
import Third from './Third';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Thank from './Thank'



const links = (
    <Router>
        <Route exact path='/' component={FirstPage}/>
        <Route exact path='/second-page' component={App}/>
        <Route exact path='/third-page' component={Third}/>
        <Route exaxt path='/thank-you-for-your-feedback' component={Thank}/>
    </Router>
)
ReactDOM.render(links, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
