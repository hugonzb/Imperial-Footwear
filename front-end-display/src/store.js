import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { shoeListReducer, shoeDetailsReducer } from './reducers/shoeReducer';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducer';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {userSignin: {userInfo}};
const reducer = combineReducers({
    shoeList: shoeListReducer,
    shoeDetails: shoeDetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;