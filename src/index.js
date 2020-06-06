import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , combineReducers} from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterreducer from './store/reducers/counter';
import resultreducer from './store/reducers/result';
import {Provider} from 'react-redux';

const rootReducer= combineReducers({
    ctr:counterreducer,
    res:resultreducer
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
