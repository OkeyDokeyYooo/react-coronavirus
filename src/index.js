import React, {Suspense}from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://3ac5a0ed45644ce3ad46fd4001125b12@sentry.io/5188903"});


ReactDOM.render(
                <Suspense fallback={null}>
                    <Router>
                        <App />
                    </Router>
                </Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
