
import { GET_ALL_FOOD_REDUX, GET_NUMBER_CART, ADD_TO_CART,UPDATE_CART,DELETE_CART,INCREASE_QUANTITY,DECREASE_QUANTITY,SET_MSG} from './cart-type';

export function SetMsg() {
    return {
        type : SET_MSG
    } 
}

export function GetAllFoodRedux(payload){
    return {
        type : GET_ALL_FOOD_REDUX,
        payload
    }
}

export function GetNumberCart(){
    return{
        type : GET_NUMBER_CART
    }
}

export function AddToCart(payload)
{
    return {
        type : ADD_TO_CART,
        payload
    }
}

export function UpdateCart(payload)
{
    return {
        type: UPDATE_CART
    }
}

export function DeleteCart(payload)
{
    return {
        type : DELETE_CART,
        payload
    }
}

export function IncreaseQuantity(payload){
    return{
        type: INCREASE_QUANTITY,
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type:DECREASE_QUANTITY,
        payload
    }
}
