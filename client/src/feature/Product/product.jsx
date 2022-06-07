
import "../../assets/css/shop.css";

import "../../assets/css/style.css";
import "../../assets/css/styles.css";

// react
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import restaurantApi from "../../api/restaurant";
const Product = () => {
  const [listrender, setlistrender] = useState([]);

  useEffect(() => {
    getdatarestaurant();
  }, []);

  const getdatarestaurant = async () => {
    try {
      const a = await restaurantApi.getAllRestarant();

      setlistrender(a.data);
    } catch {
      console.log(process.env.REACT_APP_API_URL);
      alert("Error");
    }
  };

  const renderRestaurant = () => {
    if (listrender) {
      return listrender.map((item, index) => {
        return (
          <Link
            key={index}
            className="col-xl-3 col-lg-4 col-md-4 col-12"
            to={`/restaurant/${item.idRestaurant}`}
          >
            <div className="single-product">
              <div className="product-img">
            
                  <img
                    className="img-fluid-chunhat"
                    src={item.imagesRestaurants[0]?.urlRestaurant}
                    alt="..."
                  ></img>
           
                <div className="button-head">
                  <div className="product-action">
                  
                    <span title="Wishlist">
                      <i className=" ti-heart "></i>
                      <span> Số lượt thích: {item.likes}</span>
                    </span>
                  </div>
                 
                </div>
              </div>
              <div className="product-content">
                <h4>
                  <span>{item.nameRestaurant}</span>
                </h4>
                <div className="product-price">
                  <span>{item.priceService},000 VND</span>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
  };
  return (
    <div>
      <div className="product-area section">
        <header className="masthead" style={{ color: "black" }}>
          <div className="container">
            <div className="masthead-subheading">
       
            </div>
            <div className="masthead-heading text-uppercase">
    
            </div>
           
          </div>
        </header>

        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                DANH SÁCH NHÀ HÀNG TRAVELOKA
              </h2>
              <h3 className="section-subheading text-muted line_h3">
                Trải nghiệm ngay khi đặt chỗ nhanh chóng.
              </h3>
            </div>
            <div className="row">{renderRestaurant()}</div>
          </div>
        </section>
      </div>

    
    </div>
  );
};

export default Product;
