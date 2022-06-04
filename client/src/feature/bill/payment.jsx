import "../../assets/css/payment.css";
import { Link } from "react-router-dom";
import globalStateAndAction from "../../container/global.state";
import SideBarBill from "../bill/sideBarBill";
const Bill = ({ cart }) => {
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
                  <a href="" className="cart text-link">
                    {" "}
                    Phương thức thanh toán{" "}
                  </a>
                </li>
              </ul>
          
              <div className="checkout-text checkout-item">
                Phương thức thanh toán
              </div>
              <form action="" className="form-info checkout-item">
                <div className="payment-cus payment-cus-1">
                  <input type="radio" checked name="pm1" />
                  <div className="payment-cus-box">
                    <div className="box-payment-cus">
                      <img
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                        alt=""
                      />
                      <div className="payment-cus-text">
                        Thanh toán khi nhận hàng (COD)
                      </div>
                    </div>

                    <div className="payment-cus-text"></div>
                  </div>
                </div>
                <div className="form-item">
                  <div className="payment-cus payment-cus-1">
                    <input type="radio" name="pm1" />
                    <div className="payment-cus-box">
                      <div className="box-payment-cus">
                        <img
                          src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=1"
                          alt=""
                        />
                        <div className="payment-cus-text">
                          Chuyển khoản qua ngân hàng
                        </div>
                      </div>

                      <div className="payment-cus-text"></div>
                    </div>
                  </div>
                </div>
                <div className="pay form-item">
                  <Link to="/bill">
                  <button   className="btn btn-secondary">
                    Quay lại thông tin giao hàng
                  </button>
                  </Link>
                  <button type="submit" className="btn btn-info">
                      Thanh Toán
                  </button>
                </div>
              </form>
            </div>
            <SideBarBill></SideBarBill>
          </div>
        </div>
      </div>
    </body>
  );
};
export default globalStateAndAction(Bill);
