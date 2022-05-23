import style from "./Bill.module.css";
import { Link } from "react-router-dom";
import globalStateAndAction from "../../container/global.state";
import { useEffect, useState } from "react";
import axios from "axios";
const Bill = ({ cart }) => {
  const [voucher, setVoucher] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_VOUCHER}`, {
        headers: {
          user_id: `ngocphu`,
          partner_id: `7c9572f2-9b23-48fd-9c01-d43427ee2775`,
        },
      })
      .then(function (response) {
        
        setVoucher(response.data.data.vouchers);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [voucher]);

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
  return (
    <body>
      <div className="main">
        <div className="grid">
          <div className="checkout">
            <div className="checkout-info">
              <div className="checkout-logo-text checkout-item">
                <Link to="/">
                  {" "}
                  <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"></img>
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
                  <a href="" className="cart text-link">
                    {" "}
                    Phương thức thanh toán{" "}
                  </a>
                </li>
              </ul>
              <div className="checkout-text checkout-item">
                Thông tin giao hàng
              </div>
              <div className="back-login checkout-item">
                Bạn đã có tài khoản?{" "}
                <a href="/login" className="login">
                  Đăng nhập
                </a>
              </div>
              <form action="" className="form-info checkout-item">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Họ Và Tên"
                  ></input>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>

                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Địa chỉ"
                ></input>
                <small></small>

                <div className="pay form-item">
                  <a href="/cart.html" className="cart">
                    Giỏ hàng
                  </a>
                  <button type="submit" className="btnPay">
                    Tiếp tục đến phương thức thanh toán
                  </button>
                </div>
              </form>
            </div>
            <div className="checkout-bill">
              <div className="checkout-product">{renderFood()}</div>
              <div className="payment">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Chọn Voucher</option>
                  {
                    voucher.map((el)=>{
                      const percent = el.limitUse / 1000000
                     
                      return(
                        <>
                           <option value={el.voucherCode}> Giảm {
                             percent
                           } %</option>
                        </>
                      )
                   
                    })
                  }
                  
                </select>
                <div className="payment-money">
                  <div className="total">
                    <div className="total-text">Tạm tính:</div>
                    <div className="total-text total-money">700000₫</div>
                  </div>
                  <div className="total">
                    <div className="total-text">Phí vận chuyển:</div>
                    <div className="total-text total-money">30000₫</div>
                  </div>
                </div>
                <div className="payment-total total">
                  <div className="total-text">Tổng cộng:</div>
                  <div className="total-text total-money">730000₫</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default globalStateAndAction(Bill);
