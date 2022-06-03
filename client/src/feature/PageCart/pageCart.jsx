import React from 'react'
import globalStateAndAction from '../../container/global.state';
import { Link } from 'react-router-dom';

function PageCart({ idRestaurant,cart, IncreaseQuantity, DecreaseQuantity, DeleteCart,DeleteAllCart }) {
    let TotalCart=0;



    Object.keys(cart.Carts).forEach(function(item,n){
 
        TotalCart += cart.Carts[item].quantity * cart.Carts[item].priceFood;

    });
    function TotalPrice(price,soluong){
        const result = price * soluong;
        return result;
    }
     

    let nameRestaurant;
    const renderDetail = () => {
        return cart.Carts.map((item, key) => {
            nameRestaurant = item.nameRestaurant;
            return (

                <tr key={key}>
                    <td>
                        <figure class="itemside align-items-center">
                            <div class="aside"><img alt="" src={item.imageFood} class="img-sm"></img></div>
                            <div class="info"> <span href="#" class="title text-dark" data-abc="true">{item.nameFood}</span>
                                <p class="small text-muted">{item.idFood} <br></br> {item.nameRestaurant}</p>
                            </div>
                        </figure>
                    </td>
                    <td> <span className="btn btn-primary" style={{ margin: '-3px' }}
                        onClick={() => DecreaseQuantity(key)} >
                            {/* {item.quantity > 1 ? DecreaseQuantity(key) : 5} */}
                            -
                            </span>
                        <span className="btn btn-info">{item.quantity}</span>
                        <span className="btn btn-primary" style={{ margin: '-3px' }}
                            onClick={() => IncreaseQuantity(key)}     >+</span> </td>
                    <td>
                        <div class="price-wrap"> <var class="price">{item.priceFood},000 VND</var></div>
                    </td>
                    <td>
                        <div class="price-wrap"> <var class="price">{TotalPrice(item.priceFood,item.quantity).toLocaleString()},000 VND</var></div>
                    </td>
                    <td class="text-right d-none d-md-block">
                        <span href="" class="btn btn-light btn-round" 
                                       onClick={()=>DeleteCart(key)}>Xóa</span>
                    </td>
                </tr>

            )


        })
    }
    const functionShowNameRestaurant = () => {
        if (nameRestaurant) {
            return <h1> Đang ở giỏ hàng của nhà hàng {nameRestaurant}</h1>

        }
        else {
            return <h1>Hãy đi mua đồ ăn nào </h1>
        }
    }

    const functionShowClear = () => {
        if (nameRestaurant) {
            return   <button class="btn btn-danger btn-round"
                             onClick={()=>DeleteAllCart()} 
            > Xóa Tất Cả Sản Phẩm</button>

        }
        else {
            return 
        }
    }
    renderDetail();
    return (
        <div class="container-fluid" style={{ marginTop: "200px" }}>
            <div class="row">
                <aside class="col-lg-9">
                    <div class="card">
                        <div class="table-responsive">
                            <div class="d-flex justify-content-center">
                                {functionShowNameRestaurant()}

                            </div>
                            <hr></hr>
                            <table class="table table-borderless table-shopping-cart">
                                <thead class="text-muted">
                                    <tr class="small text-uppercase">
                                        <th scope="col">Sản Phẩm</th>
                                        <th scope="col" width="120">Số Lượng</th>
                                        <th scope="col" width="120">Giá</th>
                                        <th scope="col" width="120">Thành Tiền</th>
                                        <th scope="col" class="text-right d-none d-md-block" width="200"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderDetail()}
                                </tbody>


                            </table>
                            {/* Tạm thời giải pháp này cho nhanh */}
                          {  functionShowClear()}
                          
                        </div>
                    </div>
                </aside>
                <aside class="col-lg-3">
                    <div class="card mb-3">
                        <div class="card-body">
                            <form>
                                <div class="form-group"> <label>Have coupon?</label>
                                    <div class="input-group"> <input type="text" class="form-control coupon" name="" placeholder="Coupon code"></input> <span class="input-group-append"> <button class="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <dl class="dlist-align">
                                <dt>Tổng Tiền : </dt>
                                <dd class="text-right text-danger ml-3">Chưa áp dụng</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Giảm Giá:</dt>
                                <dd class="text-right text-danger ml-3">Chưa áp dụng</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Tổng Tiền:</dt>
                                <dd class="text-right text-dark b ml-3"><strong>{TotalCart.toLocaleString()},000 VND</strong></dd>
                            </dl>
                            {idRestaurant ?  <Link to={`/foodRestaurant/${idRestaurant}`}>  <button  class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Tiếp tục mua hàng</button></Link> :  <Link to="/">  <button  class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Tiếp tục mua hàng</button></Link>}
                           
                            <hr></hr>
                             {!nameRestaurant ? <div></div> : <Link to="/bill">  <button  class="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Thanh Toán </button></Link>}
                         
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default globalStateAndAction(PageCart);