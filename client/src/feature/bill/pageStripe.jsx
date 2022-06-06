import { Elements } from '@stripe/react-stripe-js';
import {
    loadStripe,
} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51L7arnHLRCRxQjdua9tWgmjbIiAciyJaVqeeoj3T8oTiFtN2uktPYyoYdc3uFi5esjauPbjnvrytjhREW3MINfXi009jaFOXCx');

function PageStripe() {
    const [clientSecret, setClientSecret] = useState();

    const navigate = useNavigate();
    const infoUserLocal = JSON.parse(window.localStorage.getItem('infoUserBook'));
    const getClientSecret = async () => {
        if (infoUserLocal) {
            const resData = await axios.post(`${process.env.REACT_APP_API_URL}/bill/paymentStripe`, { "amount": infoUserLocal.amountBill })
            await setClientSecret(resData.data);
        }
        else {
            navigate("/");
        }


    }
    useEffect(() => {
        getClientSecret();

    }, [])

    const appearance = {
        theme: 'stripe'
    };

    const options = { clientSecret, appearance };


    return (
        <div className="App">
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>

        </div>

    )
}
export default PageStripe;