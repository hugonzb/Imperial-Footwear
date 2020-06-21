import { SHOE_LIST_REQUEST } from "../constants/shoeConstants";
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
export {shoeListReducer}