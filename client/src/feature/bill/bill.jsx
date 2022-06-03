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
                  <a href=""  className="cart text-link">
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
                <SideBarBill></SideBarBill>
          </div>
        </div>
      </div>
    </body>
  );
};
export default globalStateAndAction(Bill);
