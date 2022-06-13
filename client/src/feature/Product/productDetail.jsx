import React from "react";
import restaurantApi from "../../api/restaurant";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import Select from "react-select";
const options = [
  { value: "1", label: "Sáng (6:00-15:00)" },
  { value: "0", label: "Tối (15:00-22:00)" },
];
const ProductDetails = () => {
  const infoUser = JSON.parse(window.localStorage.getItem("accessToken"));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const today = new Date();
  const [listrender, setlistrender] = useState([]);
  const [date, setDate] = useState(today.toLocaleDateString("en-CA"));
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState(infoUser ? infoUser.name : "");
  const [tel, setTel] = useState("");
  const { id } = useParams();
  const [numberSlot, setSlot] = useState(0);

  useEffect(() => {
    const getdatarestaurant = async () => {
      try {
        const a = await restaurantApi.getRestaurant(`${id}`);
        setlistrender(a.data);
      } catch (error) {
        alert(error);
      }
    };

    getdatarestaurant();
  }, [id]);

  const addReservations = async () => {
    const infoUser = JSON.parse(window.localStorage.getItem("accessToken"));
    if (
      selectedOption === null ||
      name === " " ||
      tel === "" ||
      tel.length < 10
    ) {
      alert("Vui Lòng Nhập Thông Tin Đầy Đủ");
    } else {

      if (infoUser) {
        try {
          const customDataProfile = {
    
            reward: 1,
            details: [
              {
              
                link: `${process.env.REACT_APP_FRONTEND}restaurant/${id}`,
                productName: `Đặt Lịch Tại Nhà Hàng ${listrender.nameRestaurant}`,
                quantity: 1,
                thumbnail: `https://console.kr-asia.com/wp-content/uploads/2021/03/Traveloka-1.png`,
                partnerId: `${listrender.idStaff}`,
                price: 250000,
              },
            ],

            userId: `${infoUser.sub}`,
            partnerId: `${listrender.idStaff}`,
          };
          await axios.post(
            `${process.env.REACT_APP_PROFILE}api/orders`,
            customDataProfile, {
              headers: {
                service_code : "EATS"
              },
          });
          const res = await restaurantApi.postBookRestaurant({
            idRestaurant: id,
            dateBook: date,
            idCustomer: infoUser ? infoUser.sub : null,
            bookingSession: Number(selectedOption.value),
            nameBook: name,
            phoneBook: tel,
          });
          if (res.data.success === false) {
            alert("Chỗ Đã Đầy ! .Vui Lòng Quý Khách Chọn Khung Giờ Khác . 😢 ");
            window.location.reload();
          } else {
            alert("Chúc Mừng Quý Khách Đặt Chỗ Thành Công ! 🔥 ");
            setSelectedOption(null);
            setDate(date);
            setName(infoUser ? infoUser.name : "");
            setTel("");
          }
        }
        catch (err) {
          console.log(err)
          // window.location.reload();
        }

      } else {
        try {
          const res = await restaurantApi.postBookRestaurant({
            idRestaurant: id,
            dateBook: date,
            idCustomer: infoUser ? infoUser.sub : null,
            bookingSession: Number(selectedOption.value),
            nameBook: name,
            phoneBook: tel,
          });
          if (res.data.success === false) {
            alert("Chỗ Đã Đầy ! .Vui Lòng Quý Khách Chọn Khung Giờ Khác . 😢 ");
            window.location.reload();
          } else {
            alert("Chúc Mừng Quý Khách Đặt Chỗ Thành Công ! 🔥 ");
            setSelectedOption(null);
            setDate(date);
            setName(infoUser ? infoUser.name : "");
            setTel("");
          }
        }
        catch (err) {
          console.log(err);
          window.location.reload();

        }

      }

    }
  };

  useEffect(() => {
    if (Date.parse(date) + 100000000 < today.getTime()) {
      alert("Vui lòng chọn lại ngày");
      window.location.reload();
    }
  }, [date, today]);

  const handleClick = async () => {
    if (selectedOption !== null) {
      try {
        const numberSlot = {
          idRestaurant: id,
          bookingSession: Number(selectedOption.value),
          dateBook: date,
        };

        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/bookrestaurant/getNumberSlotBook`,
          numberSlot
        );

        if (data.success === true) {
          setSlot(data.qtyBook);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
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

                  <div
                    style={{ width: "300px" }}
                    className="form-select mt-2 inputdate mt-4 col-md-12"
                  >
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      onClick={handleClick()}
                    />
                  </div>

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
                    onChange={(e) =>
                      e.target.value.length <= 10
                        ? setTel(e.target.value)
                        : alert("VUI LÒNG NHẬP ĐÚNG SỐ ĐIÊN THOẠI 🤥 ")
                    }
                  ></input>
                  <div className="mt-3">
                    <span className="mt-2">Số Chỗ : {numberSlot} /5</span>
                  </div>

                  <button
                    className="btn btn-outline-dark flex-shrink-0 col-md-12 mt-3"
                    type="button"
                    onClick={addReservations}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Đặt chỗ
                  </button>
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
