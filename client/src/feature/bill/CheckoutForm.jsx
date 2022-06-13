import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import {  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import restaurantApi from "../../api/restaurant";

const CheckoutForm = ({ idRestaurant, carts, idMenu, numberCart, DeleteAllCart }) => {
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
  const [nameRestaurant,setNameRestaurant] = useState();

  const infoUserBookLocal = JSON.parse(window.localStorage.getItem('infoUserBook'));
  
  useEffect(() => {
    const getdatarestaurant = async () => {
      try {
        const a = await restaurantApi.getRestaurant(`${idRestaurant}`);
        setNameRestaurant(a.data.nameRestaurant);
      } catch (error) {
        alert(error);
      }
    };

    getdatarestaurant();
  }, [idRestaurant]);
  useEffect(() => {
    const fetchRestaurant = async () => {

      const res = await restaurantApi.getRestaurant(`${idRestaurant}`);
      await setIdStaff(res.data.idStaff)
    }
    if (!infoUserBookLocal) {
      navigate("/bill");
    }
    fetchRestaurant();
    setInfoUserBook(infoUserBookLocal);
  }, [idStaff])


  const postBill = async () => {
    let detailTransaction = [];
    carts.map(async (el) => {
      let customData = {
        idFood: el.idFood,
        qty: el.quantity,
        intoMoney: (Number(el.priceFood) * Number(el.quantity)),
        idMenu: idMenu,
        idRestaurant: idRestaurant,
      }
      detailTransaction.push(customData);
    })
    const infoLogin = JSON.parse(window.localStorage.getItem('accessToken'));
    if (infoLogin) {
      if (infoUserBook.voucherCode) {
        let customData = {
          nameBook: infoUserBook.infoUser.nameBook,
          addressBook: infoUserBook.infoUser.addressBook,
          emailBook: infoUserBook.infoUser.emailBook,
          phoneBook: infoUserBook.infoUser.phoneBook,
          status: 0,
          shipping: 50,
          sumQty: numberCart,
          totalMoney: infoUserBook.amountBill,
          idPayment: "PM03",
          idCustomer: infoLogin.sub,
          detailTransaction
        }
        try{

          await axios.post(`${process.env.REACT_APP_API_URL}/bill`, customData);
          
    
          const infoUser = JSON.parse(window.localStorage.getItem('accessToken'));
          let user_id = infoUser.sub;

          let customRequestVoucher = {
            "typeVoucher": "EATS",
            "orderId": infoUserBookLocal.orderIdVoucher,

          }
          await axios.put(`${process.env.REACT_APP_UPDATESTATUSVOUCHER}`, customRequestVoucher, {
            headers: {
              user_id: `${user_id}`,
              partner_id: `${idStaff}`,
              app_id: "vy01",
            },
          })

          const customDataProfile = {

            reward: 1,
            details: [
              {

                link: `${process.env.REACT_APP_FRONTEND}restaurant/${idRestaurant}`,
                productName: `Hóa Đơn Thanh Toán ${nameRestaurant}`,
                quantity: 1,
                thumbnail: `https://console.kr-asia.com/wp-content/uploads/2021/03/Traveloka-1.png`,
                partnerId: `${idStaff}`,
                price: Number(infoUserBook.amountBill.slice(0, 3)) * 1000,
              },
            ],

            userId: `${infoLogin.sub}`,
            partnerId: `${idStaff}`,
          };
          await axios.post(
            `${process.env.REACT_APP_PROFILE}api/orders`,
            customDataProfile, {
            headers: {
              service_code: "EATS"
            },
          });
          DeleteAllCart()
          window.localStorage.removeItem('infoUserBook');
       
          alert("THANH TOÁN THÀNH CÔNG !")
        }
        catch (err)
        {
          console.log(err)
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
          sumQty: numberCart,
          totalMoney: infoUserBook.amountBill,
          idPayment: "PM03",
          idCustomer: infoLogin.sub,
          detailTransaction
        }
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/bill`, customData);
        if (res.data.success === true) {
          const customDataProfile = {

            reward: 1,
            details: [
              {

                link: `${process.env.REACT_APP_FRONTEND}restaurant/${idRestaurant}`,
                productName: `Hóa Đơn Thanh Toán ${nameRestaurant}`,
                quantity: 1,
                thumbnail: `https://console.kr-asia.com/wp-content/uploads/2021/03/Traveloka-1.png`,
                partnerId: `${idStaff}`,
                price: Number(infoUserBook.amountBill.slice(0, 3)) * 1000,
              },
            ],

            userId: `${infoLogin.sub}`,
            partnerId: `${idStaff}`,
          };
          await axios.post(
            `${process.env.REACT_APP_PROFILE}api/orders`,
            customDataProfile, {
            headers: {
              service_code: "EATS"
            },
          });
          DeleteAllCart()
          window.localStorage.removeItem('infoUserBook');
       
          alert("THANH TOÁN THÀNH CÔNG !")
     
        }
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
        sumQty: numberCart,
        totalMoney: infoUserBook.amountBill,
        idPayment: infoUserBook.payment,
        idCustomer: null,
        detailTransaction
      }
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/bill`, customData);
      if (res.data.success === true) {

        DeleteAllCart()
        window.localStorage.removeItem('infoUserBook');
     
        alert("THANH TOÁN THÀNH CÔNG !")
 
      }
    }
  }






  const handleSubmit = async (event) => {

    postBill()
    
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
        // return_url: `http://${window.location.host}/bill/payment/success`,
        return_url: `http://${window.location.host}/`,
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
export default CheckoutForm;