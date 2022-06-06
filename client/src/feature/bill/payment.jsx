import "../../assets/css/payment.css";
import { Link, useNavigate } from "react-router-dom";
import globalStateAndAction from "../../container/global.state";
import { useState, useEffect } from "react";
import axiosMethod from '../../api/axiosmethod';
import restaurantApi from "../../api/restaurant";
import axios from "axios";
const Payment = ({ cart, numberCart, DeleteAllCart }) => {
  const navigate = useNavigate();
  const [idStaff, setIdStaff] = useState('');
  const radio = [
    {
      payment: "PM02",
      image: "https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1",
      name: "Thanh toán khi nhận hàng (COD)"
    },
    {
      payment: "PM03",
      image: "https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=1",
      name: "Thanh Toán Stripe",
    },
  ];
  const fetchRestaurant = async () => {

    const res = await restaurantApi.getRestaurant(`${cart.idRestaurant}`);
    await setIdStaff(res.data.idStaff)
  }
  const [infoUserBook, setInfoUserBook] = useState({
    amountBill: 0,
    idStaff: "",
    infoUser: {},
    voucherCode: "",
    payment: ""
  })

  const info = JSON.parse(window.localStorage.getItem('infoUserBook'));

  useEffect(() => {
    setInfoUserBook(info);
    fetchRestaurant();
  }, [])

  const renderFood = (foods = cart.Carts) => {
    return foods.map((el, key) => {

      return (
        <div className="product-item">
          <div className="item-img">
            <img src={el.imageFood} alt="" className="img-product" />
          </div>
          <div className="item-info">
            <div className="info-left">
              <div className="info-name-product">{el.nameFood}</div>
              l<div className="info-size-product">
                <span>{el.quantity}</span>
              </div>
            </div>
            <div className="info-right">
              <div className="item-money">
                {Number(el.quantity) * Number(el.priceFood)},000 VND
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const handePayment = async () => {
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
    })
    if (infoUserBook.payment === "PM02") {
      const infoLogin = JSON.parse(window.localStorage.getItem('accessToken'));
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
            "typeVoucher" : "EATS",
             "orderId" : infoUserBook.orderIdVoucher,
             
          }
           await axios.put(`${process.env.REACT_APP_UPDATESTATUSVOUCHER}`,customRequestVoucher,{
            headers: {
              user_id: `${user_id}`,
              partner_id: `${idStaff}`,
              app_id : "vy01",
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

    }
    else if (infoUserBook.payment === "PM03") {
        navigate("/bill/payment/stripe");
    }
    else {
      alert("VUI LÒNG CHỌN PHƯƠNG THỨC THANH TOÁN")
    }
  }
  const destroyVoucher = (orderId, idStaff) => {
    const infoUser = JSON.parse(window.localStorage.getItem('accessToken'));
    let user_id = null;
    if (infoUser) {
      user_id = infoUser.sub;
    }
    let bodyRequest = {
      "typeVoucher": "EATS",
      orderId
    }
    axios.post(`${process.env.REACT_APP_DESTROYVOUCHER}`, bodyRequest,
      {
        headers: {
          user_id: user_id,
          partner_id: idStaff,
          app_id : "vy01"
        },
      })
  }
  const handleBackBill = async () => {
    const infoUserLocal = JSON.parse(window.localStorage.getItem('infoUserBook'));
    if (infoUserLocal.orderIdVoucher) {
      await destroyVoucher(infoUserLocal.orderIdVoucher, infoUserLocal.idStaff);
      let custom = {
        infoUser: infoUserLocal.infoUser,
        amountBill: 0,
        idStaff: infoUserLocal.idStaff,

      };
      await window.localStorage.setItem('infoUserBook',JSON.stringify(custom));
      navigate("/bill");
    }
    else {
      navigate("/bill");
    }
  }
  return (
    <body>
      <div className="main">
        <div className="grid">
          <div className="checkout">
            <div className="checkout-info">
              <div className="checkout-logo-text checkout-item">
                <Link to="/">
                  {" "}
                  <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"
                    alt=""
                  ></img>
                </Link>
              </div>
              <ul className="checkout-breadcrumb checkout-item">
                <li className="breadcrumb-item">
                  <a href="/cart.html" className="text-link cart">
                    Giỏ hàng{" "}
                  </a>
                  <i className="icon-link bx bx-chevron-right"></i>
                </li>
                <li className="breadcrumb-item">
                  <span className="text-link">Thông tin giao hàng</span>
                  <i className="icon-link bx bx-chevron-right"></i>
                </li>
                <li className="breadcrumb-item">
                  <span href="" className="cart text-link">
                    {" "}
                    Phương thức thanh toán{" "}
                  </span>
                </li>
              </ul>

              <div className="checkout-text checkout-item">
                Phương thức thanh toán
              </div>
              <div className="form-info checkout-item">
                {radio.map((el, index) => {
                  return (
                    <div
                      key={index}
                    >
                      <div className="payment-cus payment-cus-1">
                        <input
                          type="radio"
                          name="payment"
                          checked={
                            infoUserBook.payment === el.payment
                          }
                          onChange={() =>
                            setInfoUserBook({ ...infoUserBook, payment: el.payment })
                          }


                        />
                        <div className="payment-cus-box">
                          <div className="box-payment-cus">
                            <img
                              src={el.image}
                              alt=""
                            />
                            <div className="payment-cus-text">
                              {el.name}
                            </div>
                          </div>

                          <div className="payment-cus-text"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="pay form-item">

                  <button className="btn btn-secondary" onClick={handleBackBill}>
                    Quay lại thông tin giao hàng
                  </button>

                  <button type="butinfoUserBook.amountBill.toLocaleString()},000 VNDton" className="btn btn-info" onClick={handePayment}>
                    Thanh Toán
                  </button>
                </div>
              </div>
            </div>
            <div className="checkout-bill">
              <div className="checkout-product">{renderFood()}</div>
              <div className="payment">
                <div className="payment-total total">
                  <div className="total-text">
                    <h6>Tổng Số Lượng:</h6></div>
                  <div className="total-text total-money"><h6>{cart.numberCart}</h6></div>
                </div>
                <div className="payment-total total">
                  <div className="total-text">
                    <h6>Tổng cộng:</h6></div>
                  <div className="total-text total-money"><h6>{infoUserBook.amountBill.toLocaleString()},000 VND</h6></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default globalStateAndAction(Payment);
