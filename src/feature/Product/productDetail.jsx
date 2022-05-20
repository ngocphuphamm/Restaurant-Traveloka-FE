import React from 'react'
import restaurantApi from '../../api/restaurant';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const ProductDetails = () => {

    // const Timer = () => {
        // const {initialMinute = 0,initialSeconds = 0} = props;
        // const [ minutes, setMinutes ] = useState(initialMinute);
        // const [seconds, setSeconds ] =  useState(initialSeconds);
    //     useEffect(()=>{
    //     let myInterval = setInterval(() => {
    //             if (seconds > 0) {
    //                 setSeconds(seconds - 1);
    //             }
    //             if (seconds === 0) {
    //                 if (minutes === 0) {
    //                     clearInterval(myInterval)
    //                 } else {
    //                     setMinutes(minutes - 1);
    //                     setSeconds(59);
    //                 }
    //             } 
    //         }, 1000)
    //         return ()=> {
    //             clearInterval(myInterval);
    //           };
    //     });
    
    //     return (
    //         <div>
    //         { minutes === 0 && seconds === 0
    //             ? null
    //             : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    //         }
    //         </div>
    //     )
    // }


    const today = new Date()
    const [listrender, setlistrender] = useState([]);
    const [listBook, setListBook] = useState([]);
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'))
    const [time, setTime] = useState(0)
    const [name, setName] = useState("")
    const [tel, setTel] = useState(0)
    const {productId} = useParams()

    useEffect(() => {
        getdatarestaurant();
        // getBookReservations();
    }, []);

    const getdatarestaurant = async () =>{
        try{
            const a = await restaurantApi.getRestaurant(`${productId}`);
            setlistrender(a.data);
        }
        catch (error) {
            alert(error)
        }
    }


    // const renderRestaurant = () => {
    //     if(listBook){
    //       return listBook.map((item,index)=>{
    //         return (
    //             <div>{item.nameBook}</div>
    //         )
    //       })
    //     }
    // }




    const addReservations = async () => {
        try {         
            console.log(productId,date,name,tel, time);
            await restaurantApi.postBookRestaurant({
                idRestaurant:productId,
                dateBook: date,
                timeBook: time,
                nameBook: name,
                phoneBook: tel,
          });
          setTime();
          setDate(date);
          setName("");
          setTel(83 `+`);
        } catch (error) {return error;}
    }



    // useEffect(() => {
    //     if (Date.parse(date)+100000000 < today.getTime()) {
    //         alert("Vui lòng chọn lại ngày")
    //     }
    // }, [date])




return (
    <div className="up_top">

        <section className="py-5"> 
            <div className="px-4 px-lg-5 my-5">
                <div className="gx-4 gx-lg-5">

                    <div className="col-md-12 slide-container mb-5 ">  
                                      
                        {listrender?.imagesRestaurants?.length > 0 ?                        
                            <Slide 
                            infinite = {true}
                            slidesToShow={3}
                            slidesToScroll={1}
                            dots={true}
                            transitionDuration={100}
                            >                          
                                    {listrender.imagesRestaurants.map((item,index) => (
                                    <div 
                                    key={index}
                                    >
                                        <img className="mt-10 mb-5 mb-md-0 col-md-12" src={item.urlRestaurant} alt="..." />
                                    </div>                               
                                    )
                                )}           
                            </Slide>                                       
                        : null } 
                    </div>

                    <div className=" row col-md-12">
                        <div className="col-md-9">
                            <div className="small mb-2">SKU: {listrender.idRestaurant}</div>
                            <h1 className="display-2 fw-bolder mb-4 color_blue">{listrender.nameRestaurant}</h1>
                            <div className="fs-5 mb-2 color_text">
                                <span>Địa Chỉ: {listrender.addressRestaurant}</span>                            
                            </div>
                            <div className="fs-5 mb-2 ">                      
                                <span>Giá: ${listrender.priceService}</span>
                            </div>
                            <div className="fs-5 mb-5">                      
                                <span>Giờ mở cửa: {new Date(Date.parse(listrender.startTIme)).toLocaleTimeString()}</span>
                            </div>
                            
                            <p className="lead">{listrender?.descriptionRestaurant}</p>
                            <div className="d-flex">
                                <Link
                                to={`/id/${listrender.idRestaurant}`}
                                >
                                    <button className="btn btn-outline-dark flex-shrink- inputdate mt-5" type="button">
                                        <i className="bi-cart-fill me-1"></i>
                                        Xem menu nhà hàng
                                    </button>                          
                                </Link>
                            </div>
                        </div>

                        <div className='col-md-3 nav'>
                            
                            <div className='box-book'>

                            <div className="fs-3 color_text">                      
                                <span>Thêm đặt chỗ</span>
                            </div>

                                <input 
                                className='inputdate mt-4 col-md-12'
                                type="date" 
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                ></input>   

                                <input 
                                className='inputdate mt-4 col-md-12'
                                type="time" 
                                value={time}
                                onChange={(e)=> setTime(e.target.value)}
                                >
                                </input>   



                                <input 
                                className='inputdate mt-4 col-md-12'
                                placeholder='Họ và tên'
                                type="name"
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                                >

                                </input>


                                <input 
                                type="number" 
                                className="inputdate mt-4 col-md-12"
                                placeholder='Nhập số điện thoại'
                                value={tel}
                                onChange={(e)=> setTel(e.target.value)}
                                ></input>



                                <button 
                                className="btn btn-outline-dark flex-shrink-0 col-md-12 mt-5" 
                                type="button"
                                onClick={addReservations}
                                >
                                    <i className="bi-cart-fill me-1"></i>
                                    Đặt chỗ
                                </button>

                                {/* {renderRestaurant()} */}


                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div> 
    )
}

export default ProductDetails;