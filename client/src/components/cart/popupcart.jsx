import React from 'react'
import { Link } from 'react-router-dom';
import globalStateAndAction from '../../container/global.state';


function PopupCart({cart,DeleteCart}) {
    const number = cart.numberCart;

    

    const cartMini = () => {
        if(cart.Carts){
            return cart.Carts.map((item,index)=>{
              return (
                <li 
                key={index}
                className="header__cart-item">
                    <img className="header__cart-img" alt="" src={item.imageFood}></img>
                    <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                            <h5 className="header__cart-item-name">{item.nameFood}</h5>
                            <div className="cach">
                                <span className="header__cart-item-price">{item.priceFood}</span>
                                <span className="header__cart-item-multiply"> x </span>
                                <span className="header__cart-item-qnt">{item.quantity}</span>
                            </div>
                        </div>
                        <div className="header__cart-item-body">
                            <span className="header__cart-item-description">
                                Mã món: {item.idFood}
                            </span>
                            <span 
                                onClick={() => DeleteCart(index)}
                                className="header__cart-item-remove">

                                    Xóa
                            </span>
                        </div>
                    </div>
                </li>
              )
            })
        }
        else
        {
            <h1 className="header__cart-list-no-cart-msg">Chưa có sản phẩm</h1>

        }
    }

    return (
        <div className="header-cart">

            <div className="header-cart-wrap">
            <Link
                    to={"/cart"}
                    >    
                <i className="header__cart-icon ti-shopping-cart"></i>
                <span className="header__cart-notice">{number}</span>
                </Link>
                <div className="header__cart-list">
                    <img src="playstore.jpg" alt="" className="header__cart-no-cart-img "></img>
                
                    <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                    <ul className="header__cart-list-item">

                        {cartMini()}

                    </ul>
             
                 
                </div>
            </div>

        </div>
    )
}
export default globalStateAndAction(PopupCart);


