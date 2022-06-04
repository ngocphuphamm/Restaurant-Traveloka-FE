import { useEffect, useState } from "react";
import axios from "axios";
import globalStateAndAction from "../../container/global.state"
function SideBarBill({cart})
{
    const [voucher, setVoucher] = useState([]);
    const [amountSale, setAmountSale] = useState('');
    const [voucherCode, setVoucherCode] = useState('');
    let amount = 0;
    useEffect(() => {
        // axios
        //     .get(`${process.env.REACT_APP_VOUCHER}`, {
        //         headers: {
        //             user_id: `ngocphu`,
        //             partner_id: `92e07c79-20b1-4dfa-8a36-46fd1783aa42`,
        //         },
        //     })
        //     .then(function (response) {
        //         setVoucher(response.data.data.vouchers);

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }, []);

    const renderFood = (foods = cart.Carts) => {
        return foods.map((el, key) => {
            amount += Number(el.quantity) * Number(el.priceFood)

            return (
                <div className="product-item">
                    <div className="item-img">
                        <img src={el.imageFood} alt="" className="img-product" />
                    </div>
                    <div className="item-info">
                        <div className="info-left">
                            <div className="info-name-product">{el.nameFood}</div>
                            <div className="info-size-product">
                                <span>{el.quantity}</span>
                            </div>
                        </div>
                        <div className="info-right">
                            <div className="item-money">
                                {Number(el.quantity) * Number(el.priceFood)},000 VND
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };
    const changeCode = (newCode) => {

        setVoucherCode(newCode);
        axios
            .get(`http://128.199.241.206:8080/api/v1/user/voucher/check-condition?amount=${amount}&code=${newCode}&typeVoucher=nha-hang`, {
                headers: {
                    user_id: `ngocphu`,
                    partner_id: `92e07c79-20b1-4dfa-8a36-46fd1783aa42`,
                },
            })
            .then(function (response) {

                setAmountSale(response.data.data.amount);
            })
            .catch(function (error) {
                alert("SỐ TIỀN MUA KHÔNG ĐỦ ÁP DỤNG VOUCHER");
            });
    }
    return (
        <div className="checkout-bill">
            <div className="checkout-product">{renderFood()}</div>
            <div className="payment">
                <select className="form-select" aria-label="Default select example"
                    onChange={(event) => changeCode(event.target.value)}
                    value={voucherCode} >
                    <option selected >Chọn Voucher</option>
                    {
                        voucher.map((el, index) => {


                            return (
                                <>
                                    <option key={index} value={el.voucherCode} >{
                                        el.title
                                    }</option>
                                </>
                            )

                        })
                    }

                </select>
                <div className="payment-money">
                    <div className="total">
                        <div className="total-text">Phí vận chuyển:</div>
                        <div className="total-text total-money">50,000 VND</div>
                    </div>
                </div>
                <div className="payment-total total">
                    <div className="total-text">Tổng cộng:</div>
                    <div className="total-text total-money">{amount ? (amount + 50).toLocaleString() + ",000 VND" : 0}</div>
                </div>
            </div>
        </div>
    )
}

export default globalStateAndAction(SideBarBill);