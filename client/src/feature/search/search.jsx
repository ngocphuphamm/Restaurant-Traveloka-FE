// Phú PLAY CODE
import { useState , useEffect} from 'react';
import { Link, Outlet, useSearchParams } from "react-router-dom";
import  restaurantApi from "../../api/restaurant";
import  axios  from 'axios';

function Search() { 
    const [listRestaurants,setListRestaurants] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect( () => {
        
            const queryParamater = searchParams.get("q");
            axios.get(`http://localhost:3003/api/restaurant/search?q=${queryParamater}`)
            .then((res)=>{
                console.log(res.data)
                setListRestaurants(res.data);
            })
           
       
    },[])
    const renderRestaurant = () => {
        if(listRestaurants){
          return listRestaurants.map((item,index)=>{
            return (
                <Link 
                key={index} 
                className="col-xl-3 col-lg-4 col-md-4 col-12"
                to={`/${item.idRestaurant}`}
                >
                    <div className="single-product">
                        <div className="product-img">
                            <a href="#">
                            <img className="img-fluid-chunhat" src={item.imagesRestaurants[0]?.urlRestaurant} alt="..." ></img>                
                            </a>
                            <div className="button-head">
                            <div className="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="ti-eye"></i><span>Xem sản phẩm</span></a>
                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Số lượt thích: {item.likes}</span></a>
                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                            </div>
                            <div className="product-action-2">
                                <a title="Add to cart" href="#">Đặt lịch ngay</a>
                            </div>
                            </div>
                        </div>
                        <div className="product-content">
                            <h3><a href="product-details.html">{item.nameRestaurant}</a></h3>
                            <div className="product-price">
                            <span>{item.priceService},000 VND</span>
                            </div>
                        </div>
                    </div>
                </Link>
            )
          })
        }
    }
  return (
    <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Nhà hàng tiêu biểu</h2>
                            <h1 className="section-subheading text-muted line_h3">Nhà Hàng Tìm Kiếm</h1>
                        </div>
                        <div className="row">{renderRestaurant()}</div>
                    </div>
                </section>
  );
}

export default Search;
