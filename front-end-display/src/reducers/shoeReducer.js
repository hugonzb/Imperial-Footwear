import { SHOE_LIST_REQUEST, SHOE_DETAILS_REQUEST, SHOE_DETAILS_SUCCESS, SHOE_DETAILS_FAIL, SHOE_SAVE_REQUEST, SHOE_SAVE_SUCCESS, SHOE_SAVE_FAIL } from "../constants/shoeConstants";
import { SHOE_LIST_SUCCESS } from "../constants/shoeConstants";
import { SHOE_LIST_FAIL } from "../constants/shoeConstants";

function shoeListReducer(state={shoes:[]}, action){
    switch (action.type) {
        case SHOE_LIST_REQUEST:
            return {loading: true};
        case SHOE_LIST_SUCCESS:
            return {loading:false, shoes: action.payload};
        case SHOE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;

        }
}

function shoeDetailsReducer(state={ shoe: {} }, action){
    switch (action.type) {
        case SHOE_DETAILS_REQUEST:
            return {loading: true};
        case SHOE_DETAILS_SUCCESS:
            return {loading:false, shoe: action.payload};
        case SHOE_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
        }
}

function shoeSaveReducer(state={ shoe: {} }, action){
    switch (action.type) {
        case SHOE_SAVE_REQUEST:
            return {loading: true};
        case SHOE_SAVE_SUCCESS:
            return {loading:false, success: true, shoe: action.payload};
        case SHOE_SAVE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
        }
}
export {shoeListReducer, shoeDetailsReducer, shoeSaveReducer }