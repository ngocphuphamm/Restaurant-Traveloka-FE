import axios from "axios";

export default function axiosMethod(endpoint, method , body) {
	return axios({
		method,
		url: `${process.env.REACT_APP_VOUCHER}`,
		data: body
	}).catch(err => {
		console.log(err);
	});
}
