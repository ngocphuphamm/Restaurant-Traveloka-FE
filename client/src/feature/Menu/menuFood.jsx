import React from 'react'
import foodtApi from "../../api/food"
import{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddToCart } from '../../redux/Cart/cart-action';
import globalStateAndAction from '../../container/global.state';

function Menu({cart,SetMsg}) {

    const {id} = useParams() 
    const dispatch = useDispatch();
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getDataMenu =  async () => {       
            try {
              const res= await foodtApi.getMenuFood(`${id}`);
              setMenu(res.data)
            } catch(err) {
                console.log(err)
            }
        };  
        getDataMenu();
    }, [id]);

  
    


    useEffect(() =>{
        if(cart.msg === true)
        {
            SetMsg();
            alert("Vui lòng thêm giỏ hàng đúng với nhà hàng ");
            window.location.replace(`/foodRestaurant/${cart.idRestaurant}`)
        }
    },[SetMsg, cart.msg,cart.idRestaurant])


    
    const handleClicKAddToCart = (payload)=>{
        dispatch(AddToCart(payload));
    }
    const renderMenu = () => {
        if(menu){
            return menu.map((item,index)=>{
                return (
                    <div
                    key={index}
                    >
                        <div className="col mb-5">
                            <div className="card h-100">
                        
                                <img className="card-img-top" src={item.urlImage} alt="..." ></img>
                        
                                <div className="card-body p-4">
                                    <div className="text-center">
                                
                                        <h5 className="fw-bolder">{item.nameFood}</h5>
                                        {item.priceFood},000 VND
                                    </div>
                                </div>
                        
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <button 
                                        className="btn btn-outline-dark mt-auto" 
                                        href="#"
                                        onClick = {()=>{handleClicKAddToCart(item)}}
                                        >
                                            Thêm vào giỏ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
  return (
    <section className="py-5 bg-light up_top">
        <div className="container px-4 px-lg-5 mt-5">
            <h2 className="fw-bolder mb-4">Menu nhà hàng: </h2>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {renderMenu()}
            </div> 
        </div> 
    </section>
)
}

export default   globalStateAndAction(Menu);