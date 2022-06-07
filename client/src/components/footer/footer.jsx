import logo from "../../assets/img/3.jpg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
 
      <footer className="footer">
        <div className="footer-top section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <div className="single-footer about">
                  <div className="logo">
                    <Link to="/">
                      <img alt="" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"></img>
                    </Link>{" "}
                  </div>
                  <p className="text">
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                    luctus, metus.
                  </p>
                  <p className="call">
                    Got Question? Call us 24/7
                    <span>
                      <a href="tel:123456789">+0123 456 789</a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer links">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <span >About U  </span>
                    </li>
                    <li>
                      <span >Fa </span>
                    </li>
                    <li>
                      <span >Terms vs Condition </span>
                    </li>
                    <li>
                      <span >Contact U </span>
                    </li>
                    <li>
                      <span >Help </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer links">
                  <h4>Customer Service</h4>
                  <ul>
                    <li>
                      <a href="#">Payment Methods</a>
                    </li>
                    <li>
                      <a href="#">Money-back</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
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
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-flickr"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
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
                    <p>
                      Copyright © 2020{" "}
                      <span  target="_blank">
                        Traveloka
                      </span>{" "}
                      - All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="right">
                  <img alt="" className="img_logo_1" src="https://cdn-contents.anymindgroup.com/corporate/wp-uploads/2019/12/traveloka-logo.jpg"></img>

                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal"></img>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/1.jpg"
                      alt="..."
                    ></img>
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
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
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
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

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal"></img>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/2.jpg"
                      alt="..."
                    ></img>
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
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
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
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

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal"></img>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/3.jpg"
                      alt="..."
                    ></img>
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
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
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
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

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal4"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal"></img>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/4.jpg"
                      alt="..."
                    ></img>
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
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
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
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

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal"></img>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img src="images/logo2.png" alt="#"></img>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/5.jpg"
                      alt="..."
                    ></img>
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
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
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
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

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal6"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal"></img>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/6.jpg"
                      alt="..."
                    ></img>
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
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
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
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
  );
}
