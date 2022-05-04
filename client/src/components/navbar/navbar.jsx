
import logo from '../../assets/img/3.jpg'
import pthanh from '../../assets/img/pthanh.jpg';
import ttrang from '../../assets/img/ttrang.jpg';
import nphu from '../../assets/img/nphu.jpg';
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import restaurantApi from '../../api/restaurant';
import { useParams } from 'react-router-dom';
import PopupCart from '../cart/popupcart';
export default function NavbarApp()
{   
    // const [c, set] = useState(0);
    // const [listlookfor, setlistlookfor] = useState("thanh");

    // const [getValue, setGetValue] = useState("");

    // const { id } = useParams()
    // const onChageName = (e) => {
    //     setGetValue(e.target.value)
    // }

    // useEffect(() => {
    //     getRestaurantId();
    // }, []);

    // const getRestaurantId = async () => {
    //     try {
    //         const a = await restaurantApi.getRestaurant(`${id}`);
    //         setlistlookfor(a.data)
    //         console.log("da vao");
    //     }
    //     catch {
    //         console.log("loi api Index");
    //     }
    // }
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
                            <Link to={"/cart"}>
                            <li className="nav-item"><a className="nav-link" href="#contact">Cart</a></li>
                         </Link>
                         
                        </ul >
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top header_top" id="mainNav" >
                <div className="col-lg-2 col-md-3 col-12 ">
                    <div className="right-bar">
                        <div className="grid">
                            <div className="header-with-search col-md-12">
                                <div className="header-search">

                                    <div className="header-search-input-wrap">
                                        <input className="header-search-input" type="text" placeholder="Tìm kiếm"
                                            // onClick={getRestaurantId()}
                                            // value={getValue}
                                            // onChange={onChageName}
                                            >
                                                
                                            </input>
                                        <div className="header-search-history">
                                            <h3 className="header-search-history-heading">Ket qua Tim Kiem</h3>
                                            <ul className="header-search-history-list">
                                                <li className="header-search-history-item">
                                                    <a 
                                                    href="">
                                                        {/* {listlookfor.nameRestaurant} */}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div
                                        className="header-search-btn" >
                                        <i className="header-search-btn-icon ti-search"></i>
                                    </div>
                                </div>

                                <PopupCart/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}