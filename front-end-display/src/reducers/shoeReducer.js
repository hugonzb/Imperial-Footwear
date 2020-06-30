import { SHOE_LIST_REQUEST, SHOE_DETAILS_REQUEST, SHOE_DETAILS_SUCCESS, SHOE_DETAILS_FAIL, SHOE_SAVE_REQUEST, SHOE_SAVE_SUCCESS, SHOE_SAVE_FAIL, SHOE_REVIEW_SAVE_REQUEST, SHOE_REVIEW_SAVE_RESET, SHOE_REVIEW_SAVE_FAIL, SHOE_REVIEW_SAVE_SUCCESS } from "../constants/shoeConstants";
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

function shoeDetailsReducer(state={ shoe: { reviews: [] } }, action){
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

function shoeReviewSaveReducer(state = {}, action){
    switch(action.type){
        case SHOE_REVIEW_SAVE_REQUEST:
            return { loading: true };
        case SHOE_REVIEW_SAVE_SUCCESS:
            return { loading: false, review: action.payload, success: true };
        case SHOE_REVIEW_SAVE_FAIL:
            return { loading: false, error: action.payload };
        case SHOE_REVIEW_SAVE_RESET:
            return {};
        default:
            return state;
    }
}
export { 
        shoeListReducer, 
        shoeDetailsReducer, 
        shoeSaveReducer, 
        shoeReviewSaveReducer,
    };