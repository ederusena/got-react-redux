//importe o método applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
//importe o redux-thunk
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

// Redux Devtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//aplique o middleware
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
