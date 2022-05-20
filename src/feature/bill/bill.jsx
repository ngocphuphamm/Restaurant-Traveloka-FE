import style from './Bill.module.css';

const Bill = () => {
    return (
        <body>
            <div className="main">
                <div className="grid">
                    <div className="checkout">
                        <div className="checkout-info">
                            <div className="checkout-logo-text checkout-item">
                                GonT
                            </div>
                            <ul className="checkout-breadcrumb checkout-item">
                                <li className="breadcrumb-item">
                                    <a href="/cart.html" className="text-link cart">Giỏ hàng </a>
                                    <i className="icon-link bx bx-chevron-right"></i>
                                </li>
                                <li className="breadcrumb-item">
                                    <span className="text-link">Thông tin giao hàng</span>
                                    <i className="icon-link bx bx-chevron-right"></i>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="" className="cart text-link"> Phương thức thanh toán </a>
                                </li>
                            </ul>
                            <div className="checkout-text checkout-item">Thông tin giao hàng</div>
                            <div className="back-login checkout-item">
                                Bạn đã có tài khoản? <a href="/login" className="login">Đăng nhập</a>
                            </div>
                            <form action="" className="form-info checkout-item">
                                <div className=" form-item">
                                    <input placeholder="Họ và tên" id="fullname" type="text" />
                                    <small></small>
                                </div>
                                <div className="form-inline form-item">
                                    <div className=" w-2">
                                        <input placeholder="Email" id="email" type="text" />
                                        <small></small>
                                    </div>
                                    <div className=" w-1">
                                        <input placeholder="Số điện thoại" id="phone" />
                                        <small></small>
                                    </div>
                                </div>
                                <div className=" form-item">
                                    <input placeholder="Địa chỉ" id="address" type="text" />
                                    <small></small>
                                </div>
                                <div className="form-inline form-item">
                                    <div className=" w-1">
                                        <select placeholder="Tỉnh/Thành phố"
                                                id="province"
                                                type="text">
                                            <option value="invalid">Tỉnh/Thành phố</option>
                                            <option value="aa">HCM</option>
                                        </select>
                                        <small></small>
                                    </div>
                                    <div className=" w-1">
                                        <select placeholder="Quận/Huyện" id="district" type="text">
                                            <option value="invalid">Quận/Huyện</option>
                                            
                                        </select>
                                        <small></small>
                                    </div>
                                    <div className=" w-1">
                                        <select placeholder="Phường/Xã" id="village" type="text">
                                            <option value="invalid">Phường/Xã</option>
                                        
                                        </select>
                                        <small></small>
                                    </div>
                                </div>
        
                                <div className="pay form-item">
                                    <a href="/cart.html" className="cart">Giỏ hàng</a>
                                    <button type="submit" className="btnPay">
                                        Tiếp tục đến phương thức thanh toán
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="checkout-bill">
                            <div className="checkout-product">
                                <div className="product-item">
                                    <div className="item-img">
                                        <img src="//product.hstatic.net/200000321771/product/263445825_469370814536560_3844613167228495939_n_445b699a51354dfd8fb19ecc31a9f667_small.jpg"
                                            alt=""
                                            className="img-product" />
                                        <span className="amount">5</span>
                                    </div>
                                    <div className="item-info">
                                        <div className="info-left">
                                            <div className="info-name-product">
                                                ZOMBIE® Striped Sweater In Blue
                                            </div>
                                            <div className="info-size-product">Freesize</div>
                                        </div>
                                        <div className="info-right">
                                            <div className="item-money">1750000₫</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item-img">
                                        <img src="//product.hstatic.net/200000321771/product/upload_1a68c3a0869948f8818daa27c57fb5ba_small.jpg"
                                            alt=""
                                            className="img-product" />
                                        <span className="amount">1</span>
                                    </div>
                                    <div className="item-info">
                                        <div className="info-left">
                                            <div className="info-name-product">#1 Sweater In Red</div>
                                            <div className="info-size-product">M</div>
                                        </div>
                                        <div className="info-right">
                                            <div className="item-money">300000₫</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item-img">
                                        <img src="//product.hstatic.net/200000321771/product/263445825_469370814536560_3844613167228495939_n_445b699a51354dfd8fb19ecc31a9f667_small.jpg"
                                            alt=""
                                            className="img-product" />
                                        <span className="amount">5</span>
                                    </div>
                                    <div className="item-info">
                                        <div className="info-left">
                                            <div className="info-name-product">
                                                ZOMBIE® Striped Sweater In Blue
                                            </div>
                                            <div className="info-size-product">Freesize</div>
                                        </div>
                                        <div className="info-right">
                                            <div className="item-money">1750000₫</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item-img">
                                        <img src="//product.hstatic.net/200000321771/product/upload_1a68c3a0869948f8818daa27c57fb5ba_small.jpg"
                                            alt=""
                                            className="img-product" />
                                        <span className="amount">1</span>
                                    </div>
                                    <div className="item-info">
                                        <div className="info-left">
                                            <div className="info-name-product">#1 Sweater In Red</div>
                                            <div className="info-size-product">M</div>
                                        </div>
                                        <div className="info-right">
                                            <div className="item-money">300000₫</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item-img">
                                        <img src="//product.hstatic.net/200000321771/product/263445825_469370814536560_3844613167228495939_n_445b699a51354dfd8fb19ecc31a9f667_small.jpg"
                                            alt=""
                                            className="img-product" />
                                        <span className="amount">5</span>
                                    </div>
                                    <div className="item-info">
                                        <div className="info-left">
                                            <div className="info-name-product">
                                                ZOMBIE® Striped Sweater In Blue
                                            </div>
                                            <div className="info-size-product">Freesize</div>
                                        </div>
                                        <div className="info-right">
                                            <div className="item-money">1750000₫</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item-img">
                                        <img src="//product.hstatic.net/200000321771/product/upload_1a68c3a0869948f8818daa27c57fb5ba_small.jpg"
                                            alt=""
                                            className="img-product" />
                                        <span className="amount">1</span>
                                    </div>
                                    <div className="item-info">
                                        <div className="info-left">
                                            <div className="info-name-product">#1 Sweater In Red</div>
                                            <div className="info-size-product">M</div>
                                        </div>
                                        <div className="info-right">
                                            <div className="item-money">300000₫</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item-img">
                                        <img src="//product.hstatic.net/200000321771/product/263445825_469370814536560_3844613167228495939_n_445b699a51354dfd8fb19ecc31a9f667_small.jpg"
                                            alt=""
                                            className="img-product" />
                                        <span className="amount">5</span>
                                    </div>
                                    <div className="item-info">
                                        <div className="info-left">
                                            <div className="info-name-product">
                                                ZOMBIE® Striped Sweater In Blue
                                            </div>
                                            <div className="info-size-product">Freesize</div>
                                        </div>
                                        <div className="info-right">
                                            <div className="item-money">1750000₫</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item-img">
                                        <img src="//product.hstatic.net/200000321771/product/upload_1a68c3a0869948f8818daa27c57fb5ba_small.jpg"
                                            alt=""
                                            className="img-product" />
                                        <span className="amount">1</span>
                                    </div>
                                    <div className="item-info">
                                        <div className="info-left">
                                            <div className="info-name-product">#1 Sweater In Red</div>
                                            <div className="info-size-product">M</div>
                                        </div>
                                        <div className="info-right">
                                            <div className="item-money">300000₫</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment">
                                <div className="voucher">
                                    <input type="text" placeholder="Mã giảm giá" />
                                    <button className="btnVoucher">Sử dụng</button>
                                </div>
                                <div className="payment-money">
                                    <div className="total">
                                        <div className="total-text">Tạm tính:</div>
                                        <div className="total-text total-money">700000₫</div>
                                    </div>
                                    <div className="total">
                                        <div className="total-text">Phí vận chuyển:</div>
                                        <div className="total-text total-money">30000₫</div>
                                    </div>
                                </div>
                                <div className="payment-total total">
                                    <div className="total-text">Tổng cộng:</div>
                                    <div className="total-text total-money">730000₫</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
  }
  export default Bill

