
import logo from '../../assets/img/3.jpg'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import restaurantApi from '../../api/restaurant';
import food from '../../api/food';
import axios from 'axios';
import PopupCart from '../cart/popupcart';

export default function NavbarApp()
{   

    const [rearchRestautant, setRearchRestautant] = useState();
    const [listlookfor, setlistlookfor] = useState([]);
    const [getValue, setGetValue] = useState("");

    const onChageName = (e) => {
        setGetValue(e.target.value)
    }


    const seacrhAll = async () => {
        try {
            const a = await food.search(`${getValue}`);
            setlistlookfor(a.data)
            const b = await restaurantApi.searchRestaurant(`${getValue}`);
            setRearchRestautant(b.data)
        }
        catch (error){
            console.log(error);
        }
    }


    // useEffect(() => {console.log("call Api")}, [getValue])
    // debounce

    const searchRes = () => {
        if(rearchRestautant){
            return rearchRestautant.map((item,index)=>{
              return (
                <Link 
                to={"/id"} >
                    <li 
                    key={index}
                    className="header-search-history-item"
                    >
                        <a>                            
                            <div className='an'>{item.nameRestaurant}</div>
                        </a>
                    </li>
                </Link>
              )
            })
        }
    }


    const search = () => {
        if(listlookfor){
            return listlookfor.map((item,index)=>{
              return (
                <Link 
                to={"/id"} >
                    <li 
                    key={index}
                    className="header-search-history-item"
                    >
                        <a>
                            <div className='an'>{item.nameFood}</div>
                        </a>
                    </li>
                </Link>
              )
            })
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
                                            value={getValue}
                                            onChange={onChageName}
                                            // onKeyUp={seacrhFood}
                                            onKeyUp={seacrhAll}
                                            >                                              
                                            </input>
                                        <div className="header-search-history box-search header__cart-list auto_box">
                                            <h3 className="header-search-history-heading">Kết Quả Tìm Kiếm</h3>
                                            Nhà hàng
                                            <ul className="header-search-history-list">                                    
                                                {searchRes()}                                                                 
                                            </ul>
                                            Món ăn
                                            <ul className="header-search-history-list">                                    
                                                {search()}                                                                 
                                            </ul>
                                        </div>
                                    </div>
                                    
                                
                                    <div
                                        onClick={seacrhAll}
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