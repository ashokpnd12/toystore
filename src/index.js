import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Link,NavLink,BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './components/Context';

ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
            <Link exact to='/'>Home</Link>
            <br/>
            <NavLink activeClassName="text-bright" to="/cart">Back</NavLink>
        </Router>
    </ProductProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
