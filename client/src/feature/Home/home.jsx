
import logo from '../../assets/img/3.jpg'
import pthanh from '../../assets/img/pthanh.jpg';
import ttrang from '../../assets/img/ttrang.jpg';
import nphu from '../../assets/img/nphu.jpg';
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import restaurantApi from '../../api/restaurant';
import { useParams } from 'react-router-dom';

export default function Home() {
    const { id } = useParams()

    const [listlookfor, setlistlookfor] = useState("thanh");

    const [getValue, setGetValue] = useState("");


    const onChageName = (e) => {
        setGetValue(e.target.value)
    }

    useEffect(() => {
        getRestaurantId();
    }, []);

    const getRestaurantId = async () => {
        try {
            const a = await restaurantApi.getRestaurant(`${id}`);
            setlistlookfor(a.data)
        }
        catch {
            console.log("loi api Index");
        }
    }
    return (
        <div id="page-top">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link to={"/"}>
                        <a className="navbar-brand" href="#page-top"><img src={logo} alt="..." ></img></a>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul >
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top header_top" id="mainNav">
                <div className="col-lg-2 col-md-3 col-12 ">
                    <div className="right-bar">
                        <div className="grid">
                            <div className="header-with-search col-md-12">
                                <div className="header-search">

                                    <div className="header-search-input-wrap">
                                        <input className="header-search-input" type="text" placeholder="Tìm kiếm"
                                            onClick={getRestaurantId()}
                                            value={getValue}
                                            onChange={onChageName}></input>
                                        <div className="header-search-history">
                                            <h3 className="header-search-history-heading">Ket qua Tim Kiem</h3>
                                            <ul className="header-search-history-list">
                                                <li className="header-search-history-item">
                                                    <a href="">{listlookfor.nameRestaurant}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div
                                        className="header-search-btn" >
                                        <i className="header-search-btn-icon ti-search"></i>
                                    </div>
                                </div>

                                <div className="header-cart">

                                    <div className="header-cart-wrap">
                                        <i className="header__cart-icon ti-shopping-cart"></i>
                                        <span className="header__cart-notice">3</span>

                                        <div className="header__cart-list">
                                            <img src="playstore.jpg" alt="" className="header__cart-no-cart-img"></img>
                                            <span className="header__cart-list-no-cart-msg">Chua co san Phan</span>

                                            <h4 className="header__cart-heading">San pham da them</h4>
                                            <ul className="header__cart-list-item">

                                                <li className="header__cart-item">
                                                    <img className="header__cart-img" src="https://cf.shopee.vn/file/0ea3a585736537879fbc6b48f5b724b9_tn"></img>
                                                    <div className="header__cart-item-info">
                                                        <div className="header__cart-item-head">
                                                            <h5 className="header__cart-item-name">Dong Ho RolexTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 thángTay cầm gimbal DJI Osmo Mobile 4 Combo chống rung điện thoại - Hàng chính hãng - Bảo hành 12 tháng</h5>
                                                            <div className="cach">
                                                                <span className="header__cart-item-price">2.000.000</span>
                                                                <span className="header__cart-item-multiply">x</span>
                                                                <span className="header__cart-item-qnt">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-item-body">
                                                            <span className="header__cart-item-description">
                                                                Phan Loai: Bac
                                                            </span>
                                                            <span className="header__cart-item-remove">Xoa</span>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>

                                            <button className="header__cart-view-cart btn btn--primary pading">Xem Gio Hang</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />

            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Nhân Vật Tiêu Biểu</h2>
                        <h3 className="section-subheading text-muted line_h3">Với Tâm Huyết Và Làm Việc Nhiều Năm Tại Paris, ấp ủ niềm đam mê ẩm thực và rèn giũa kỹ năng nấu nướng tại các nhà hàng nổi tiếng trong khu vực.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={ttrang} alt="..." ></img>
                                <h4>Trang</h4>
                                <p className="text-muted">Nguyễn Thị Thùy Trang</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={pthanh} alt="..." ></img>
                                <h4>Thanh</h4>
                                <p className="text-muted">Nguyễn Phúc Thanh</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={nphu} alt="..." ></img>
                                <h4>Phú</h4>
                                <p className="text-muted">Trần Ngọc Phú</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted"> Trước khi gia nhập GonT, các thành viên đã góp phần tạo nên thành công cho đội ngũ ẩm thực của hai khách sạn danh giá Armani Hotel Dubai và Grand Hyatt Dubai.</p></div>
                    </div>
                </div>
            </section>

            <div className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="btn_link btn-outline-light col-md-3 col-sm-2-4 my-3 text-center">
                            <a href="#!"><i className="fab fa-facebook-f"></i></a>
                        </div>
                        <div className="btn_link btn-outline-light col-md-3 col-sm-2-4 my-3 text-center ">
                            <a href="#!"><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className="btn_link btn-outline-light col-md-3 col-sm-2-4 my-3 text-center ">
                            <a href="#!"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="btn_link btn-outline-light col-md-3 col-sm-2-4 my-3 text-center color_youtube">
                            <a href="#!"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted line_h3">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">

                                    <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" ></input>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-group">

                                    <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" ></input>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-group mb-md-0">

                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" ></input>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">

                                    <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br ></br>
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>

                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>

                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                    </form>
                </div>
            </section>

            <footer className="footer">

                <div className="footer-top section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12">
                                <div className="single-footer about">
                                    <div className="logo">
                                        <a href="index.html"><img className="img_logo" src={logo} alt="..." ></img></a>
                                    </div>
                                    <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                    <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+0123 456 789</a></span></p>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6 col-12">

                                <div className="single-footer links">
                                    <h4>Information</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Faq</a></li>
                                        <li><a href="#">Terms vs Conditions</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6 col-12">

                                <div className="single-footer links">
                                    <h4>Customer Service</h4>
                                    <ul>
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="single-footer social">
                                    <h4>Get In Tuch</h4>

                                    <div className="contact">
                                        <ul>
                                            <li>144A - Chi Lăng.</li>
                                            <li>Thành Phố Vũng Tàu.</li>
                                            <li>gont@gmail.com</li>
                                            <li>+033 8091 5390</li>
                                        </ul>
                                    </div>

                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-flickr"></i></a></li>
                                        <li><a href="#"><i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="left">
                                        <p>Copyright © 2020 <a href="http://www.wpthemesgrid.com" target="_blank">GonT</a>  -  All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="right">
                                        <img className="img_logo_1" src={logo} alt="..."></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



            <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" ></img></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." ></img>
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                Threads
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Illustration
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" ></img></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." ></img>
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                Explore
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Graphic Design
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" ></img></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." ></img>
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                Finish
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Identity
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" ></img></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." ></img>
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                Lines
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Branding
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" ></img></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img src="images/logo2.png" alt="#"></img>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." ></img>
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                Southwest
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Website Design
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" ></img></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">Project Name</h2>
                                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." ></img>
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                Window
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Photography
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}