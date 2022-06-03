// images
import b2 from "../../assets/img/b2.jfif";
import b3 from "../../assets/img/b3.jfif";
import b4 from "../../assets/img/b4.jfif";
import voucher from "../../assets/img/voucher.jfif";
// react
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import restaurantApi from "../../api/restaurant";
const Product = () => {
  const { id } = useParams();
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
                <a href="#">
                  <img
                    className="img-fluid-chunhat"
                    src={item.imagesRestaurants[0]?.urlRestaurant}
                    alt="..."
                  ></img>
                </a>
                <div className="button-head">
                  <div className="product-action">
                    <a
                      href="/"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                    >
                      <i className="ti-eye"></i>
                      <span>Xem sản phẩm</span>
                    </a>
                    <a title="Wishlist" href="#">
                      <i className=" ti-heart "></i>
                      <span>Số lượt thích: {item.likes}</span>
                    </a>
                  </div>
                  <div className="product-action-2">
                    <a title="Add to cart" href="#">
                      Đặt lịch ngay
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h3>
                  <a href="product-details.html">{item.nameRestaurant}</a>
                </h3>
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
              Chào mừng đến với chúng tôi!
            </div>
            <div className="masthead-heading text-uppercase">
              Traveloka hân hạnh phục vụ
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase"
              href="#services"
            >
              Đặt chỗ ngay
            </a>
          </div>
        </header>

        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Điểm đặt được ưa thích
              </h2>
              <h3 className="section-subheading text-muted line_h3">
                Trải nghiệm ngay khi đặt chỗ nhanh chóng.
              </h3>
            </div>
            <div className="row">{renderRestaurant()}</div>
          </div>
        </section>
      </div>

      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Áp dụng voucher</h2>
            <h3 className="section-subheading text-muted line_h3">
              Áp Dụng Voucher thật Đơn Giản.
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid img-fluid-vuong"
                  src={voucher}
                  alt="..."
                ></img>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Bước 1:</h4>
                  <h4 className="subheading">Nhận voucher</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid img-fluid-vuong"
                  src={b2}
                  alt="..."
                ></img>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Bước 2:</h4>
                  <h4 className="subheading">
                    Nhập voucher vào phiếu thanh toán
                  </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid img-fluid-vuong"
                  src={b3}
                  alt="..."
                ></img>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Bước 3:</h4>
                  <h4 className="subheading">Chờ hệ thống áp dụng voucher</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid img-fluid-vuong"
                  src={b4}
                  alt="..."
                ></img>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Bước 4:</h4>
                  <h4 className="subheading">Tận hưởng dịch vụ tại GonT</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Hen gặp
                  <br></br>
                  lại bạn
                  <br></br>
                  tại GonT
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Product;
