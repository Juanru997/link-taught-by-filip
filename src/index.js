import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nihao from './Whatever'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



const links = (
    <Router>
        <Route exact path='/' component={Nihao}/>
        <Route exact path='/ha' component={App}/>
    </Router>
)
ReactDOM.render(links, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
