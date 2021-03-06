import { Elements } from '@stripe/react-stripe-js';
import {
    loadStripe,
} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import globalStateAndAction from "../../container/global.state";
const stripePromise = loadStripe('pk_test_51L7arnHLRCRxQjdua9tWgmjbIiAciyJaVqeeoj3T8oTiFtN2uktPYyoYdc3uFi5esjauPbjnvrytjhREW3MINfXi009jaFOXCx');


function PageStripe({ cart,DeleteAllCart }) {
    const [clientSecret, setClientSecret] = useState("");

    const navigate = useNavigate();
    const infoUserLocal = JSON.parse(window.localStorage.getItem('infoUserBook'));
    const appearance = {
        theme: "stripe"
    };
   
    const options = { clientSecret, appearance };
    useEffect(() => {
        const getClientSecret = async () => {
            if (infoUserLocal) {
                const amount = await Number(infoUserLocal.amountBill.slice(0,3));
         
                const resData = await axios.post(`${process.env.REACT_APP_API_URL}/bill/paymentStripe`, { "amount": amount*100 })
                await setClientSecret(resData.data);
    
            }
            else {
                navigate("/");
            }
        }
        getClientSecret();

    }, [navigate, clientSecret,infoUserLocal])




    const handleBack = ()=>{
        navigate("/bill/payment")
    }
    return (
        <>
            <div>
                <button type="button" onClick={handleBack} className="btn btn-primary">Quay Trở Lại</button>
            </div>
            <div className="App">

                {clientSecret ? (<Elements stripe={stripePromise} options={options}>
                    <CheckoutForm idRestaurant={cart.idRestaurant} carts={cart.Carts} idMenu={cart.idMenu} numberCart={cart.numberCart} DeleteAllCart={DeleteAllCart} />
                </Elements>) : null}
            </div>
        </>


    )
}
export default globalStateAndAction(PageStripe);
