import { Link, useNavigate } from "react-router-dom";
import globalStateAndAction from "../../container/global.state";
import { useState, useEffect } from "react"
import restaurantApi from "../../api/restaurant";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const Bill = ({ cart, idRestaurant,numberCart }) => {
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState({
    nameBook: "",
    emailBook: "",
    phoneBook: "",
    addressBook: "",
  })
  const [voucher, setVoucher] = useState([]);
  const [amountSale, setAmountSale] = useState();
  const [voucherCode, setVoucherCode] = useState('');
  const [idStaff, setIdStaff] = useState('');
  let amount = 0;
  const handleOnClickSetLocal = async () => {
    if (infoUser.nameBook === "" || infoUser.emailBook === "" || infoUser.phoneBook === 0 || infoUser.addressBook === "") {
      alert("VUI LÒNG NHẬP THÔNG TIN ĐẦY ĐỦ");

    }
    else if ((infoUser.phoneBook).length > 10) {
      alert("VUI LÒNG NHẬP SỐ ĐIỆN THOẠI ĐÚNG");
    }
    else {
  
      if(voucherCode !== "")
      {
        const idTS = uuidv4();
        let bodyVoucherApply = {
          code : voucherCode,
          typeVoucher : "EATS",
          transactionId : idTS ,
          amount : amount
        }
        const infoUserLocal = JSON.parse(window.localStorage.getItem('accessToken'));
        let user_id = null;
        if(infoUserLocal)
        {
          user_id =  infoUserLocal.sub;
        }
        try{
          const resVoucher = await axios.post(`${process.env.REACT_APP_APPLYVOUCHER}`,bodyVoucherApply,{
            headers: {
              user_id: `${user_id}`,
              partner_id: `${idStaff}`,
              app_id : "vy01"
            },
          })
          let customData =  {
            infoUser,
            voucherCode,
            idStaff,
            orderIdVoucher : `${resVoucher.data.data.orderId}`,
            transactionIdVoucher : idTS,
            amountBill : amountSale ? (amountSale + 50) : (amount + 50)        
          }
          window.localStorage.setItem('infoUserBook', JSON.stringify(customData));
          navigate("/bill/payment")
        }
        catch(err)
        {
          alert("Voucher Đang Được Áp Dụng Một Giao Dịch Khác")
        }
   
       
  
      }
      else
      {
        let customData =  {
          infoUser,
          idStaff,
          amountBill : amountSale ? (amountSale + 50) : (amount + 50)        
        }
        window.localStorage.setItem('infoUserBook', JSON.stringify(customData));
        navigate("/bill/payment")
      }
     

    }
  }

  const handleChangeInfoBook = (e) => {
    const value = e.target.value;
    setInfoUser({
      ...infoUser,
      [e.target.name]: value
    });
  }
  const renderSuggestLogin = () => {
    const info = JSON.parse(window.localStorage.getItem('accessToken'));
    if (!info) {
      return (
        <div className="back-login checkout-item">
          Bạn đã có tài khoản?{" "}
          <a href={`${process.env.REACT_APP_PROFILE}`} className="login">
            Đăng nhập
          </a>
        </div>
      )
    }
    else {
      return (
        <div className="back-login checkout-item">
                
        </div>
      )
    }
  }
  useEffect(() => {
    const infoUserLocal = JSON.parse(window.localStorage.getItem('infoUserBook'));
    if (infoUserLocal) {
      setInfoUser((infoUser) => ({
        ...infoUser,
        nameBook: infoUserLocal.infoUser.nameBook,
        emailBook: infoUserLocal.infoUser.emailBook,
        phoneBook: infoUserLocal.infoUser.phoneBook,
        addressBook: infoUserLocal.infoUser.addressBook
      }))

    }
  }, [])





  useEffect( () => {
    const handleRenderVoucher = async () =>{
      const infoUser = JSON.parse(window.localStorage.getItem('accessToken'));
      let user_id = null;
      if(infoUser)
      {
        user_id =  infoUser.sub;
      }
      const res = await restaurantApi.getRestaurant(`${idRestaurant}`);
      await setIdStaff(res.data.idStaff)
      await axios
        .get(`${process.env.REACT_APP_VOUCHER}`, {
          headers: {
            user_id: `${user_id}`,
            partner_id: `${res.data.idStaff}`,
            app_id : "vy01"
          },
        })
        .then(function (response) {
          setVoucher(response.data.data.vouchers);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    handleRenderVoucher()
  }, [idRestaurant]);

  const renderFood = (foods = cart.Carts) => {
    return foods.map((el, key) => {
      amount += Number(el.quantity) * Number(el.priceFood)

      return (
        <div className="product-item">
          <div className="item-img">
            <img src={el.imageFood} alt="" className="img-product" />
          </div>
          <div className="item-info">
            <div className="info-left">
              <div className="info-name-product">{el.nameFood}</div>
              <div className="info-size-product">
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
  const changeCode = async (newCode) => {
    if (newCode !== "DEFAULT") {
      await setVoucherCode(newCode);
      const infoUser = JSON.parse(window.localStorage.getItem('accessToken'));
      let user_id = null;
      if(infoUser)
      {
        user_id =  infoUser.sub;
      }

      await axios
        .get(`${process.env.REACT_APP_CHECKVOUCHER}?amount=${amount}&code=${newCode}&typeVoucher=eats`, {
          headers: {
            user_id: user_id,
            partner_id: idStaff,
            app_id : "vy01"
          },
        })
        .then(function (response) {

          setAmountSale(response.data.data.amount);

        })
        .catch(function (error) {
          alert("SỐ TIỀN MUA KHÔNG ĐỦ ÁP DỤNG VOUCHER");
        });
    }
    else {
      await setAmountSale(amount);
    }

  }
  const renderVoucher = ()=>{
    const infoUser = JSON.parse(window.localStorage.getItem('accessToken'));
    if(infoUser)
    {
      return(
        <select className="form-select" aria-label="Default select example"
        onChange={(event) => changeCode(event.target.value)}
        defaultValue={'DEFAULT'} >
        <option value="DEFAULT"  >Chọn Voucher</option>
        {
          voucher.map((el, index) => {
            return (
              <>
                <option key={index} value={el.voucherCode} >{
                  el.title
                }</option>
              </>
            )
          })
        }
  
      </select>
      )
   
    }
    else
    {
       return(<div></div>) 
    }
  }
  return (

    <div className="main">
      <div className="grid">
        <div className="checkout">
          <div className="checkout-info">
            <div className="checkout-logo-text checkout-item">
              <Link to="/">
                {" "}
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg" alt=""></img>
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
              Thông tin giao hàng
            </div>

            {renderSuggestLogin()}
            <form action="" className="form-info checkout-item">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Họ Và Tên"
                  name="nameBook"
                  defaultValue={infoUser.nameBook}
                  onChange={handleChangeInfoBook}
                ></input>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    name="emailBook"
                    defaultValue={infoUser.emailBook}
                    onChange={handleChangeInfoBook}
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Số Điện Thoại"
                    name="phoneBook"
                    defaultValue={infoUser.phoneBook}
                    onChange={handleChangeInfoBook}
                  ></input>
                </div>
              </div>

              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Địa chỉ"
                name="addressBook"
                defaultValue={infoUser.addressBook}
                onChange={handleChangeInfoBook}
              ></input>
              <small></small>

              <div className="pay form-item">
                <a href="/cart.html" className="cart">
                  Giỏ hàng
                </a>

                <button className="btnPay" type="button" onClick={handleOnClickSetLocal}>
                  Tiếp tục đến phương thức thanh toán
                </button>

              </div>
            </form>
          </div>
          <div className="checkout-bill">
            <div className="checkout-product">{renderFood()}
            </div>
            <div className="payment">
              {renderVoucher()}
              
              <div className="payment-money">
                <div className="total">
                  <div className="total-text">Tổng Số Lượng:</div>
                  <div className="total-text total-money">{cart.numberCart}</div>
                </div>
              </div>
              <div className="payment-money">
                <div className="total">
                  <div className="total-text">Tổng Tiền:</div>
                  <div className="total-text total-money">{amount.toLocaleString()},000 VND</div>
                </div>
              </div>
              <div className="payment-money">
                <div className="total">
                  <div className="total-text">Phí vận chuyển:</div>
                  <div className="total-text total-money">50,000 VND</div>
                </div>
              </div>
              <div className="payment-total total">
                <div className="total-text">Tổng cộng:</div>
                <div className="total-text total-money">{amountSale ? (amountSale + 50).toLocaleString() + ",000 VND" : (amount + 50).toLocaleString() + ",000 VND"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default globalStateAndAction(Bill);
