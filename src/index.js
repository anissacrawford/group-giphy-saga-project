import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';

//saga middleware
const sagaMiddleware = createSagaMiddleware(); 

//rootSaga
function* rootSaga(){
    yield takeEvery('ADD_FAVORITE', addFavorite)
}

//reducer


function* addFavorite (action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/favorite', {link: action.payload})
        // GET HERE
    } catch (err) {
        console.log(err);
    }
    
}

//store
const store = createStore(
    combineReducers({
        
    }),
    applyMiddleware(sagaMiddleware, logger)
)


//pass rootSaga to middleware 
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
