import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , combineReducers, applyMiddleware, compose } from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterreducer from './store/reducers/counter';
import resultreducer from './store/reducers/result';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

const rootReducer= combineReducers({
    ctr:counterreducer,
    res:resultreducer
})

const logger = store =>{

    return next => {

        return action => {
            console.log('[Middleware] Dispatching',action)
            const result = next(action)
            console.log('[Middleware] next state', store.getState())
            console.log(result)
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
 