import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { shoeListReducer, shoeDetailsReducer } from './reducers/shoeReducer';
import { userSigninReducer } from './reducers/userReducer';

const initialState = {};
const reducer = combineReducers({
    shoeList: shoeListReducer,
    shoeDetails: shoeDetailsReducer,
    userSignin: userSigninReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;