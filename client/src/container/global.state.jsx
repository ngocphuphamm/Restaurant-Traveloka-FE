import { connect } from "react-redux";

import { GetNumberCart, SetMsg } from "../redux/Cart/cart-action";

export default function globalStateAndAction(name) {
	const mapStateToProps = (state) => {
		return {
            cart:state.cart,
            
		};
	};

	const mapActionToProps = (dispatch) => ({
	
        numberCart : ()=> dispatch(GetNumberCart()),
	
	});
	return connect(mapStateToProps, mapActionToProps)(name);
}
