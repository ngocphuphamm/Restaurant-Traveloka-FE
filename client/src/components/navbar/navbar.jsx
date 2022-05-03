
import logo from '../../assets/img/3.jpg'
import pthanh from '../../assets/img/pthanh.jpg';
import ttrang from '../../assets/img/ttrang.jpg';
import nphu from '../../assets/img/nphu.jpg';
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import restaurantApi from '../../api/restaurant';
import { useParams } from 'react-router-dom';
export default function NavbarApp()
{   
    const [c, set] = useState(0);
    const [listlookfor, setlistlookfor] = useState("thanh");

    const [getValue, setGetValue] = useState("");

    const { id } = useParams()
    const onChageName = (e) => {
        setGetValue(e.target.value)
    }

    useEffect(() => {
        getRestaurantId();
    }, []);

    const getRestaurantId = async () => {
        try {
            const a = await restaurantApi.getRestaurant(`${id}`);
            setlistlookfor(a.data)
            console.log("da vao");
        }
        catch {
            console.log("loi api Index");
        }
    }
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link to={"/"}>
                        <a className="navbar-brand" href="#page-top"><img src={logo} alt="..." ></img></a>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul >
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top header_top" id="mainNav">
                <div className="col-lg-2 col-md-3 col-12 ">
                    <div className="right-bar">
                        <div className="grid">
                            <div className="header-with-search col-md-12">
                                <div className="header-search">

                                    <div className="header-search-input-wrap">
                                        <input className="header-search-input" type="text" placeholder="Tìm kiếm"
                                            onClick={getRestaurantId()}
                                            value={getValue}
                                            onChange={onChageName}></input>
                                        <div className="header-search-history">
                                            <h3 className="header-search-history-heading">Ket qua Tim Kiem</h3>
                                            <ul className="header-search-history-list">
                                                <li className="header-search-history-item">
                                                    <a href="">{listlookfor.nameRestaurant}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div
                                        className="header-search-btn" >
                                        <i className="header-search-btn-icon ti-search"></i>
                                    </div>
                                </div>

                                <div className="header-cart">

                                    <div className="header-cart-wrap">
                                        <i className="header__cart-icon ti-shopping-cart"></i>
                                        <span className="header__cart-notice">3</span>

                                        <div className="header__cart-list">
                                            <img src="playstore.jpg" alt="" className="header__cart-no-cart-img"></img>
                                            <span className="header__cart-list-no-cart-msg">Chua co san Phan</span>

                                            <h4 className="header__cart-heading">San pham da them</h4>
                                            <ul className="header__cart-list-item">

                                                <li className="header__cart-item">
                                                    <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                                    <div className="header__cart-item-info">
                                                        <div className="header__cart-item-head">
                                                            <h5 className="header__cart-item-name">Dong Ho RolexTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 tháng</h5>
                                                            <div className="cach">
                                                                <span className="header__cart-item-price">2.000.000</span>
                                                                <span className="header__cart-item-multiply">x</span>
                                                                <span className="header__cart-item-qnt">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-item-body">
                                                            <span className="header__cart-item-description">
                                                                Phan Loai: Bac
                                                            </span>
                                                            <span className="header__cart-item-remove">Xoa</span>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>

                                            <button className="header__cart-view-cart btn btn--primary pading">Xem Gio Hang</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}