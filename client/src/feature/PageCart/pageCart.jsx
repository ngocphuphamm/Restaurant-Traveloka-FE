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
                        <span href="" class="btn btn-dark btn-round" 
                                       onClick={()=>DeleteCart(key)}>X??a</span>
                    </td>
                </tr>

            )


        })
    }
    const functionShowNameRestaurant = () => {
        if (nameRestaurant) {
            return <h1> ??ang ??? gi??? h??ng c???a nh?? h??ng {nameRestaurant}</h1>

        }
        else {
            return <h1>H??y ??i mua ????? ??n n??o </h1>
        }
    }

    const functionShowClear = () => {
        if (nameRestaurant) {
            return   <button class="btn btn-danger btn-round"
                             onClick={()=>DeleteAllCart()} 
            > X??a T???t C??? S???n Ph???m</button>

        }
        else {
            return 
        }
    }
    renderDetail();
    return (
        <div class="container-fluid mb-5" style={{ marginTop: "200px" }}>
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
                                        <th scope="col">S???n Ph???m</th>
                                        <th scope="col" width="120">S??? L?????ng</th>
                                        <th scope="col" width="120">Gi??</th>
                                        <th scope="col" width="120">Th??nh Ti???n</th>
                                        <th scope="col" class="text-right d-none d-md-block" width="200"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderDetail()}
                                </tbody>


                            </table>
                            {/* T???m th???i gi???i ph??p n??y cho nhanh */}
                          {  functionShowClear()}
                          
                        </div>
                    </div>
                </aside>
                <aside class="col-lg-3">
                   
                    <div class="card">
                        <div class="card-body">
                            <dl class="dlist-align">
                                <dt>T???ng Ti???n:</dt>
                                <dd class="text-right text-dark b ml-3"><strong>{TotalCart.toLocaleString()},000 VND</strong></dd>
                            </dl>
                            {idRestaurant ?  <Link to={`/foodRestaurant/${idRestaurant}`}>  <button  class="btn btn-success btn-square btn-main mt-2" data-abc="true">Ti???p t???c mua h??ng</button></Link> :  <Link to="/">  <button  class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Ti???p t???c mua h??ng</button></Link>}
                           
                            <hr></hr>
                             {!nameRestaurant ? <div></div> : <Link to="/bill">  <button  class="btn btn-primary btn-square btn-main" data-abc="true"> Thanh To??n </button></Link>}
                         
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default globalStateAndAction(PageCart);