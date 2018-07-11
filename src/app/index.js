import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

import App from './components/App.jsx'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    connectRouter(history)(reducers),
    compose(
        applyMiddleware(
            thunk,
            middleware
        )
    )
);



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('app')
)


