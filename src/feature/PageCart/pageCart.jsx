import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import globalStateAndAction from '../../container/global.state';


function PageCart({ cart, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
    let ListCart = [];
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
                            <div class="aside"><img src={item.imageFood} class="img-sm"></img></div>
                            <figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">{item.nameFood}</a>
                                <p class="small text-muted">{item.idFood} <br></br> {item.nameRestaurant}</p>
                            </figcaption>
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
                        <div class="price-wrap"> <var class="price">{item.priceFood}</var></div>
                    </td>
                    <td>
                        <div class="price-wrap"> <var class="price">{TotalPrice(item.priceFood,item.quantity)}</var></div>
                    </td>
                    <td class="text-right d-none d-md-block">
                        <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip" data-abc="true">
                            <i class="fa fa-heart"></i></a>
                        <span href="" class="btn btn-light btn-round" 
                                       onClick={()=>DeleteCart(key)}> Remove</span>
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
            return   <a href="" class="btn btn-danger btn-round" 
            > Clear</a>

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
                                        <th scope="col">Product</th>
                                        <th scope="col" width="120">Quantity</th>
                                        <th scope="col" width="120">Price</th>
                                        <th scope="col" width="120">TotalPrice</th>
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
                                <dt>Total price:</dt>
                                <dd class="text-right text-danger ml-3">Chưa áp dụng</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Discount:</dt>
                                <dd class="text-right text-danger ml-3">Chưa áp dụng</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Total:</dt>
                                <dd class="text-right text-dark b ml-3"><strong>{TotalCart}</strong></dd>
                            </dl>
                            <hr></hr> <a href="#" class="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a> <a href="#" class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default globalStateAndAction(PageCart);