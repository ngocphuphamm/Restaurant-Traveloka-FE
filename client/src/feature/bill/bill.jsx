import { Link,useNavigate } from "react-router-dom";
import globalStateAndAction from "../../container/global.state";
import SideBarBill from "../bill/sideBarBill";
import { useState,useEffect } from "react"
const Bill = () => {
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState({
    nameBook: "",
    emailBook: "",
    phoneBook: "",
    addressBook: "",
  })

  const handleOnClickSetLocal = () => {
    if (infoUser.nameBook === "" || infoUser.emailBook === "" || infoUser.phoneBook === 0 || infoUser.addressBook === "" ) {
      alert("VUI LÒNG NHẬP THÔNG TIN ĐẦY ĐỦ")
      console.log(infoUser);
    }
    else if ((infoUser.phoneBook).length <= 10)
    {
      alert("VUI LÒNG NHẬP SỐ ĐIỆN THOẠI ĐÚNG");
    }
    else {
      window.localStorage.setItem('infoUserBook', JSON.stringify(infoUser));
      navigate("/bill/payment")

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
  useEffect(()=>{
    const infoUserLocal = JSON.parse(window.localStorage.getItem('infoUserBook'));
    if(infoUserLocal) {
      setInfoUser((infoUser)=>({ 
        ...infoUser,
        nameBook: infoUserLocal.nameBook,
        emailBook : infoUserLocal.emailBook,
        phoneBook: infoUserLocal.phoneBook ,
        addressBook : infoUserLocal.addressBook
      }))

    }
  },[])

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
          <SideBarBill></SideBarBill>
        </div>
      </div>
    </div>

  );
};
export default globalStateAndAction(Bill);
