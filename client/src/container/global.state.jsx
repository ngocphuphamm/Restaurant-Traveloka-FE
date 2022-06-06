import { connect } from "react-redux";

import { DeleteAllCart,GetNumberCart, SetMsg,IncreaseQuantity,DecreaseQuantity,DeleteCart } from "../redux/Cart/cart-action";

export default function globalStateAndAction(name) {
	const mapStateToProps = (state) => {
		return {
            cart:state.cart,
            idRestaurant : state.cart.idRestaurant,
		};
	};

	const mapActionToProps = (dispatch) => ({
		
        numberCart : ()=> dispatch(GetNumberCart()),
		SetMsg : ()=>dispatch(SetMsg()),
		IncreaseQuantity : (key) => dispatch(IncreaseQuantity(key)),
		DecreaseQuantity : (key) => dispatch(DecreaseQuantity(key)),
		DeleteCart : (key) => dispatch(DeleteCart(key)),
		DeleteAllCart : () => dispatch(DeleteAllCart()),
	});
	return connect(mapStateToProps, mapActionToProps)(name);
}
