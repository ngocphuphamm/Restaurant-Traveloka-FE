import { useEffect, useState } from "react";
import axios from "axios";
import globalStateAndAction from "../../container/global.state"
import restaurantApi from "../../api/restaurant";
function SideBarBill({cart,idRestaurant})
{
    const [voucher, setVoucher] = useState([]);
    const [amountSale, setAmountSale] = useState();
    const [voucherCode, setVoucherCode] = useState('');
    const [idStaff, setIdStaff] = useState('');
    let amount = 0;
    const fetchRestaurant = async () => {
        
        const res = await restaurantApi.getRestaurant(`${idRestaurant}`);
        await setIdStaff(res.data.idStaff)
    }
    useEffect(() => {
        fetchRestaurant()
        const infoUser = JSON.parse(window.localStorage.getItem('accessToken'));
        const user_id = infoUser.sub;
        axios
            .get(`${process.env.REACT_APP_VOUCHER}`, {
                headers: {
                    // user_id: user_id,
                    // partner_id: idStaff,
                    user_id: "ngocphu",
                    partner_id: "082BE41E-5C2E-4A7E-BD55-0D73F8422654",
                },
            })
            .then(function (response) {
                setVoucher(response.data.data.vouchers);
            })
            .catch(function (error) {
                console.log(error);
            });
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
    const changeCode = async(newCode) => {
        if(newCode!=="DEFAULT")
        {
           await setVoucherCode(newCode);
            await axios
                .get(`${process.env.REACT_APP_CHECKVOUCHER}?amount=${amount}&code=${newCode}&typeVoucher=eats`, {
                    headers: {
                        user_id: `ngocphu`,
                        partner_id: `082BE41E-5C2E-4A7E-BD55-0D73F8422654`,
                    },
                })
                .then( function (response) {
    
                      setAmountSale(response.data.data.amount);
                      
                })
                .catch(function (error) {
                    alert("SỐ TIỀN MUA KHÔNG ĐỦ ÁP DỤNG VOUCHER");
                });
        }
        else
        {
            await setAmountSale(amount);
        }
      
    }
    return (
        <div className="checkout-bill">
            <div className="checkout-product">{renderFood()}</div>
            <div className="payment">
                <select className="form-select" aria-label="Default select example"
                    onChange={(event) => changeCode(event.target.value)}
                    defaultValue={'DEFAULT'} >
                    <option value="DEFAULT"  >Chọn Voucher</option>
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
                        <div className="total-text">Tổng Tiền:</div>
                        <div className="total-text total-money">{amount.toLocaleString()},000 VND</div>
                    </div>
                </div>
                <div className="payment-money">
                    <div className="total">
                        <div className="total-text">Phí vận chuyển:</div>
                        <div className="total-text total-money">50,000 VND</div>
                    </div>
                </div>
                <div className="payment-total total">
                    <div className="total-text">Tổng cộng:</div>
                    <div className="total-text total-money">{amountSale ? (amountSale + 50).toLocaleString() + ",000 VND" : (amount +50).toLocaleString() + ",000 VND"}</div>
                </div>
            </div>
        </div>
    )
}

export default globalStateAndAction(SideBarBill);