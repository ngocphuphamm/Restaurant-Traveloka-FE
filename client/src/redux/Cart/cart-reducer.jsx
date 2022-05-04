import { ADD_TO_CART, GET_ALL_FOOD_REDUX, GET_NUMBER_CART, SET_MSG, INCREASE_QUANTITY, DECREASE_QUANTITY,DELETE_CART } from "./cart-type";


/* * numberCart: dùng lưu số lượng sản phẩm đã mua có trong giỏ hàng(Carts)
* Carts:[] : tạo mảng giỏ hàng đầu tiền là rỗng
* _products:[] dùng chứa tất cả sản phầm lấy được từ API */

let INTIAL_STATE = {
    numberCart: 0,
    Carts: [],
    foods: [],
    idRestaurant: "",
    msg: false
}

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_FOOD_REDUX:
            console.log(action.payload);
            return {
                ...state,
                foods: action.payload
            }
        case GET_NUMBER_CART:
            return {
                ...state,
            }
        case ADD_TO_CART:
            if (state.numberCart == 0) {
                let cart = {
                    idFood: action.payload.idFood,
                    idRestaurant: action.payload.idRestaurant,
                    quantity: 1,
                    nameFood: action.payload.nameFood,
                    imageFood: action.payload.urlImage,
                    priceFood: action.payload.priceFood,
                    nameRestaurant: action.payload.nameRestaurant
                };
                state.idRestaurant = action.payload.idRestaurant;

                state.Carts.push(cart);
                console.log(state.Carts);
                state.numberCart += 1;
            }
            else {
                if (state.idRestaurant !== action.payload.idRestaurant) {

                    state.msg = true;
                    return {
                        ...state,

                    }
                }
                else {

                    let check = false;
                    state.Carts.map((item, key) => {
                        if (item.idFood == action.payload.idFood) {
                            state.Carts[key].quantity++;
                            check = true;
                        }

                    });

                    if (!check) {
                        let cart = {
                            idFood: action.payload.idFood,
                            idRestaurant: action.payload.idRestaurant,
                            quantity: 1,
                            nameFood: action.payload.nameFood,
                            imageFood: action.payload.urlImage,
                            priceFood: action.payload.priceFood,
                            nameRestaurant: action.payload.nameRestaurant
                        };
                        state.Carts.push(cart);

                    }
                }

                state.numberCart = state.numberCart + 1

            }

            return {
                ...state,
            }
        // check true false de gui thong bao
        case SET_MSG:
            console.log("set message");
            state.msg = false;
            return {
                ...state,
            }
        //Kiểm tra action.type==INCREASE_QUANTITY: tăng quantity++ của sản phẩm được chọn
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;
            return {
                ...state
            }
        //Kiểm tra action.type==DECREASE_QUANTITY: giảm quantity-- của sản phẩm được chọn
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
            return {
                ...state
            }
        // Kiểm tra action.type==DELETE_CART: xóa sản phẩm được chọn
        case DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter(item => {
                    return item.idFood != state.Carts[action.payload].idFood
                })

            }
          

        default:
            return state;

    }
}

export default cartReducer;

