import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions"

const initialState = {
    cart: [],
    products : [
        {name: 'Product 1', id:'1'},
        {name: 'Product 2', id:'2'},
        {name: 'Product 3', id:'3'},
        {name: 'Product 4', id:'4'},
        {name: 'Product 5', id:'5'},
    ]
}
const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newItem ={
                productID: action.id,
                name: action.name,
                cartID: state.cart.length+1
            }
            return{
                ...state,
                cart:[...state.cart, newItem]
            }
        case REMOVE_FROM_CART:
            const newCart = state.cart.filter(e=> e.cartID !== action.cartID)
            return { ...state, cart: newCart }
        default:
            return state
    }
}

export default cartReducer