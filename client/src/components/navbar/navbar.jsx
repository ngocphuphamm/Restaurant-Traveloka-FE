import { Link } from "react-router-dom";
import Search from './search';
import Auth from "../Auth/auth";
import "../../assets/css/home.css";
import { useEffect } from "react";
export default function NavbarApp() {
  const infoLogin = JSON.parse(window.localStorage.getItem('accessToken'));

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link to="/">
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg" alt=""></img>
          </Link>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
             {
               infoLogin?infoLogin.type = "PARTNER" ? 
               <Link to="/admin/dashboard/R01">
                      <li className="nav-item">
                <span className="nav-link">
                     QUẢN LÝ
                </span>
              </li>
               </Link>:
               null : null
             }
              <li className="nav-item">
                <a className="nav-link" href= {`${process.env.REACT_APP_VOUCHERUSER}`}>
                     VOUCHER
                </a>
              </li>
              <Auth></Auth>
            </ul>
          </div>
        </div>
      </nav>
        <Search></Search>
    </div>
  );
}
