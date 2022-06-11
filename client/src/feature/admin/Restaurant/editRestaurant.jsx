
import "../../../assets/admin/user.css"


import { useEffect, useState } from "react";
import restaurantApi from "../../../api/restaurant";
import { useParams } from "react-router-dom";

import { useLocation } from 'react-router-dom';

import InfoRestaurant from "./infoRestaurant";
import EditInfoRestaurant from "./editInfoRestaurant.jsx";
export default function EditRestaurantAdmin() {

  const [infoRestaurant, setInfoRestaurant] = useState();
  const { idRestaurant } = useParams();
  useEffect(() => {
    const getDetailRestaurant = async () => {
      try {
        const res = await restaurantApi.getRestaurant(idRestaurant);
        await setInfoRestaurant(res.data);
       
      }
      catch (err) {
        console.log(err);
      }
    }
    getDetailRestaurant();

  }, [idRestaurant])


  const renderRestaurant = () => {
    if (infoRestaurant) {
      return (
        <>
          <div className="userContainer">
            <InfoRestaurant infoRestaurant={infoRestaurant}/>
            <EditInfoRestaurant infoRestaurant={infoRestaurant} />
          </div>
        </>
      )
    }

  }
  return (
    <>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Chi Tiết Nhà Hàng</h1>
        </div>
        {renderRestaurant()}
      </div>
    </>


  )
}