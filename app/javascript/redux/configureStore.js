import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers/index';

const middleWares = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : undefined;

const configureStore = () => createStore(mainReducer, middleWares);

export default configureStore;
