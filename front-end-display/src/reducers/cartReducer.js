import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ALL_ITEMS } from "../constants/cartConstants";

function cartReducer(state={cartItems:[]}, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const shoe = state.cartItems.find(x=>x.shoe===item.shoe);
            if(shoe){
                return { cartItems: state.cartItems.map(x=>x.shoe===shoe.shoe? item: x)
                };
            }
        return { cartItems: [...state.cartItems, item]};
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x=>x.shoe!==action.payload)}
        case CART_REMOVE_ALL_ITEMS:
            return { cartItems:[]}
        default:
            return state
    }
}
export { cartReducer };