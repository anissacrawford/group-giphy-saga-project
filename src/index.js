import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

//saga middleware
const sagaMiddleware = createSagaMiddleware(); 

//rootSaga
function* rootSaga(){

}

//reducer
const getGiphy = (state = 0, action) => {
    console.log('testing get');
    return state;
}

//store
const store = createStore(
    combineReducers({
        getGiphy
    }),
    applyMiddleware(sagaMiddleware, logger)
)


//pass rootSaga to middleware 
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
