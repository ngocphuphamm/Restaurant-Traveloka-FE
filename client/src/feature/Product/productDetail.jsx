import React from "react";
import restaurantApi from "../../api/restaurant";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const ProductDetails = () => {

  const today = new Date();
  const [listrender, setlistrender] = useState([]);
  const [date, setDate] = useState(today.toLocaleDateString("en-CA"));
  const [bookingSession, setBookingSession] = useState(  );
  const [name, setName] = useState("");
  const [tel, setTel] = useState(0);
  const { productId } = useParams();

  useEffect(() => {
    getdatarestaurant();
  }, []);

  const getdatarestaurant = async () => {
    try {
      const a = await restaurantApi.getRestaurant(`${productId}`);
      setlistrender(a.data);
    } catch (error) {
      alert(error);
    }
  };



  const addReservations = async () => {
   
   
     const res = await restaurantApi.postBookRestaurant({
        idRestaurant: productId,
        dateBook: date,
        bookingSession: bookingSession,
        nameBook: name,
        phoneBook: tel,
      })
      console.log(res.data.success);
      if(res.data.success === false)
      {
     
        alert("Chỗ Đã Đầy ! .Vui Lòng Quý Khách Chọn Khung Giờ Khác . 😢 ")
        setBookingSession("");
        setDate(date);
        setName("");
        setTel("");
      }
      else
      {
   
        alert("Chúc Mừng Quý Khách Đặt Chỗ Thành Công ! 🔥 ")
        setBookingSession("");
        setDate(date);
        setName("");
        setTel("");
      }
            
    };

  useEffect(() => {
    if (Date.parse(date) + 100000000 < today.getTime()) {
      alert("Vui lòng chọn lại ngày");
    }
  }, [date, today]);

  return (
    <div className="up_top">
      <section className="py-5">
        <div className="px-4 px-lg-5 my-5">
          <div className="gx-4 gx-lg-5">
            <div className="col-md-12 slide-container mb-5 ">
              {listrender?.imagesRestaurants?.length > 0 ? (
                <Slide
                  infinite={true}
                  slidesToShow={3}
                  slidesToScroll={1}
                  dots={true}
                >
                  {listrender.imagesRestaurants.map((item, index) => (
                    <div key={index}>
                      <img
                        className="mt-10 mb-5 mb-md-0 col-md-12"
                        src={item.urlRestaurant}
                        alt="..."
                      />
                    </div>
                  ))}
                </Slide>
              ) : null}
            </div>

            <div className=" row col-md-12">
              <div className="col-md-9">
                <div className="small mb-2">SKU: {listrender.idRestaurant}</div>
                <h1 className="display-2 fw-bolder mb-4 color_blue">
                  {listrender.nameRestaurant}
                </h1>
                <div className="fs-5 mb-2 color_text">
                  <span>Địa Chỉ: {listrender.addressRestaurant}</span>
                </div>
                <div className="fs-5 mb-2 ">
                  <span>Giá Khoảng : {listrender.priceService},000 VND</span>
                </div>
                <div className="fs-5 mb-5">
                  <span>
                    Giờ mở cửa:{" "}
                    {new Date(
                      Date.parse(listrender.startTIme)
                    ).toLocaleTimeString()}
                  </span>
                </div>

                <p className="lead">{listrender?.descriptionRestaurant}</p>
                <div className="d-flex">
                  <Link to={`/foodRestaurant/${listrender.idRestaurant}`}>
                    <button
                      className="btn btn-outline-dark flex-shrink- inputdate mt-5"
                      type="button"
                    >
                      <i className="bi-cart-fill me-1"></i>
                      Xem menu nhà hàng
                    </button>
                  </Link>
                </div>
              </div>

              <div className="col-md-3 nav">
                <div className="box-book">
                  <div className="fs-3 color_text">
                    <span>Thêm đặt chỗ</span>
                  </div>

                  <input
                    className="inputdate mt-4 col-md-12"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  ></input>

                  <select
                    className ="form-select mt-2 inputdate mt-4 col-md-12"
                    aria-label="Default select example"
                    onChange={(e)=>{
                        setBookingSession(e.target.value)
                    }}
                  >
                    <option selected>Vui Lòng Chọn Buổi</option>
                    <option value="true">Sáng (6:00-15:00)</option>
                    <option value="false">Tối (15:00-22:00)</option>
                  </select>

                  <input
                    className="inputdate mt-4 col-md-12"
                    placeholder="Họ và tên"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>

                  <input
                    type="number"
                    className="inputdate mt-4 col-md-12"
                    placeholder="Nhập số điện thoại"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
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
  );
};

export default ProductDetails;
