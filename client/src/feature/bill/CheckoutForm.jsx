import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';
import globalStateAndAction from '../../components/cart/popupcart';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import restaurantApi from "../../api/restaurant";
import axios from "axios";
const CheckoutForm = ({ cart, numberCart, DeleteAllCart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [idStaff, setIdStaff] = useState('');
  const [infoUserBook, setInfoUserBook] = useState({
    amountBill: 0,
    idStaff: "",
    infoUser: {},
    voucherCode: "",
    payment: ""
  })
  const info = JSON.parse(window.localStorage.getItem('infoUserBook'));

  useEffect(() => {
    if (!info) {
      navigate("/bill");
   
    }
    fetchRestaurant();
    setInfoUserBook(info);
  }, [])

  // get staff
  const fetchRestaurant = async () => {

    const res = await restaurantApi.getRestaurant(`${cart.idRestaurant}`);
    await setIdStaff(res.data.idStaff)
  }

  const postBill = () => {
    let detailTransaction = [];
    cart.Carts.map(async (el) => {
      let customData = {
        idFood: el.idFood,
        qty: el.quantity,
        intoMoney: (Number(el.priceFood) * Number(el.quantity)),
        idMenu: cart.idMenu,
        idRestaurant: cart.idRestaurant,
      }
      detailTransaction.push(customData);

      const infoLogin = JSON.parse(window.localStorage.getItem('accessToken'));
      // axios post cho vinh phan con thieu 
      if (infoLogin) {
        let customData = {
          nameBook: infoUserBook.infoUser.nameBook,
          addressBook: infoUserBook.infoUser.addressBook,
          emailBook: infoUserBook.infoUser.emailBook,
          phoneBook: infoUserBook.infoUser.phoneBook,
          status: 0,
          shipping: 50,
          sumQty: cart.numberCart,
          totalMoney: infoUserBook.amountBill,
          idPayment: infoUserBook.payment,
          idCustomer: infoLogin.sub,
          detailTransaction
        }
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/bill`, customData);

        if (res.data.success === true) {
          const infoUser = JSON.parse(window.localStorage.getItem('accessToken'));
          let user_id = infoUser.sub;
          const infoUserBook = JSON.parse(window.localStorage.getItem('infoUserBook'));

          let customRequestVoucher = {
            "typeVoucher": "EATS",
            "orderId": infoUserBook.orderIdVoucher,

          }
          await axios.put(`${process.env.REACT_APP_UPDATESTATUSVOUCHER}`, customRequestVoucher, {
            headers: {
              user_id: `${user_id}`,
              partner_id: `${idStaff}`,
              app_id: "vy01",
            },
          })
          window.localStorage.removeItem('infoUserBook');

          DeleteAllCart()
          alert("THANH TOÁN THÀNH CÔNG !")
          navigate("/")
        }
      }
      else {
        let customData = {
          nameBook: infoUserBook.infoUser.nameBook,
          addressBook: infoUserBook.infoUser.addressBook,
          emailBook: infoUserBook.infoUser.emailBook,
          phoneBook: infoUserBook.infoUser.phoneBook,
          status: 0,
          shipping: 50,
          sumQty: cart.numberCart,
          totalMoney: infoUserBook.amountBill,
          idPayment: infoUserBook.payment,
          idCustomer: null,
          detailTransaction
        }
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/bill`, customData);
        if (res.data.success === true) {



          DeleteAllCart()
          alert("THANH TOÁN THÀNH CÔNG !")
          navigate("/")
        }
      }
    })
  }
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `http://${window.location.host}/bill/payment/success`,
      },
    });




    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (

    <form
      id="payment-form"
      className="container mt-5"
      onSubmit={handleSubmit}
    >
      <PaymentElement />
      <button
        className="btn btn-dark mt-5"
        id="submit"
        disabled={!stripe}>Submit</button>
    </form>

  )
};
export default globalStateAndAction(CheckoutForm);