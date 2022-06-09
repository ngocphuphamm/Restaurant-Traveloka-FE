import "../../../assets/admin/featuredInfo.css"
import { useEffect, useState } from 'react';
import restaurant from "../../../api/restaurant";
import { Link } from 'react-router-dom';

export default function FeaturedInfo({dataStatistical}) {
  const [listRestaurant, setListRestaurant] = useState([]);
  const infoLogin = JSON.parse(window.localStorage.getItem('accessToken'));
  useEffect(() => {
    const fetchRestaurant = async () => {
      const res = await restaurant.getAllRestarant();
      const listData = res.data.filter((el) => {
        return el.idStaff === infoLogin.sub
      })
      setListRestaurant(listData);
    }
    fetchRestaurant();
  }, [infoLogin.sub])
  const renderNameRestaurant = () => {
    return listRestaurant.map((el)=>{
        return(
          <>

          <li className="nav-item">
            <Link to = {`/admin/dashboard/${el.idRestaurant}`}>
            <button  className="nav-link" >{el.nameRestaurant}</button>
            </Link>
          </li>
         
        </>
        )
      })
  }
  return (
    <div >
      <ul className="nav nav-pills mb-3">
            {renderNameRestaurant()}
      </ul>
      <div className="featured mt-3">
        <div className="featuredItem">
          <span className="featuredTitle">Tổng Món Ăn</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{dataStatistical.sumFood}</span>
          </div>
          <span className="featuredSub">Món Ăn</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Tổng Hóa Đơn Tháng</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{dataStatistical.sumBill}</span>
          </div>
          <span className="featuredSub">VND</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Doanh Thu</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{dataStatistical.sumMoney}</span>
          </div>
          <span className="featuredSub">VND</span>
        </div>
      </div>
    

    </div>

  );
}
