//import { act } from "react-dom/test-utils";

export function cartReducer(state={cart:[]},action){
    switch(action.type){
        case 'ADD_TO_CART':
            return {cart:[...state.cart, ...action.payload]}
        default:
            return state;
    }
}