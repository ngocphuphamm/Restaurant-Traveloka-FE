import React from 'react'
import foodtApi from "../../api/food"
import{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import { addPost, addTodo, getListTodo, sortPost } from "./CartSlide";




function Menu() {

    const {abc} = useParams() 
    // const dispatch = useDispatch();
    const [menu, setMenu] = useState([]);
    // const dataPost = useSelector((state) => state?.cartSlide?.data);

    useEffect(() => {
        getDataMenu();
    }, []);

     const getDataMenu =  async () => {       
        try {
          const a = await foodtApi.getMenuFood(`${abc}`);
          setMenu(a.data)
        } catch {
          alert("loi API")
        }
    };  

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
                                        ${item.priceFood}
                                    </div>
                                </div>
                        
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a 
                                        className="btn btn-outline-dark mt-auto" 
                                        href="#"
                                        >
                                            Thêm vào giỏ
                                        </a>
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

export default Menu