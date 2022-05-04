import React from 'react'

import globalStateAndAction from '../../container/global.state';


function PopupCart({cart}) {
    const number = cart.numberCart;

    return (
        <div className="header-cart">

            <div className="header-cart-wrap">
                
                <i className="header__cart-icon ti-shopping-cart"></i>
                <span className="header__cart-notice">{number}</span>

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
    )
}
export default globalStateAndAction(PopupCart);


