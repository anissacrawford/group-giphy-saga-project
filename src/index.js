import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

//get
function* getFavorite(){
    try { 
        let response = yield axios.get('/api/favorite');
        console.log(response.data);
        //dispatch is put only in index 
        yield put({ type:'SET_FAVORITE', payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

//post
function* addFavorite (action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/favorite', {link: action.payload})
        // GET HERE
    } catch (err) {
        console.log(err);
    }
    
}

//saga middleware
const sagaMiddleware = createSagaMiddleware(); 

//rootSaga
function* rootSaga(){
    yield takeEvery('GET_FAVORITE', getFavorite);
    yield takeEvery('ADD_FAVORITE', addFavorite);
}

//reducer 
const favoriteReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FAVORITE':
        return action.payload
      default:
        return state;
    }
  };
   
//store
const store = createStore(
    combineReducers({
        favoriteReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

//pass rootSaga to middleware 
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
