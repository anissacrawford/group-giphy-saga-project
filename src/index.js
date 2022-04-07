import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';


//get favorites
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

//post new favorite
function* addFavorite (action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/favorite', {link: action.payload})
        yield put({type: 'GET_FAVORITE'})
    } catch (err) {
        console.log(err);
    }
    
}

//post user search query
function* setSearchQuery (action) {
    try {
       let response = yield axios.post('/api/giphy', {searchQuery: action.payload})
        console.log(response.data.data);
        yield put({type: 'SET_GIPHY', payload: response.data.data})
    } catch (err) {
        console.log(err);
    }
}

function* getGiphy () {
    try {
       let response = yield axios.get('/api/giphy')
        yield put({type: 'SET_GIPHY', payload: response.data.data})
    } catch (err) {
        console.log(err);
    }
}

//saga middleware
const sagaMiddleware = createSagaMiddleware(); 

//rootSaga
function* rootSaga(){
    yield takeEvery('GET_GIPHY', getGiphy);
    yield takeEvery('GET_FAVORITE', getFavorite);
    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery('SET_SEARCH', setSearchQuery);
}

// new favorite reducer 
const favoriteReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FAVORITE':
        return action.payload
      default:
        return state;
    }
  };

  //giphy reducer
  const giphyReducer = (state = [], action) => {
      switch(action.type) {
          case 'SET_GIPHY':
              state = action.payload;
              return state;
        default:
            return state
      }
  }
   
//store
const store = createStore(
    combineReducers({
        favoriteReducer,
        giphyReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

//pass rootSaga to middleware 
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
