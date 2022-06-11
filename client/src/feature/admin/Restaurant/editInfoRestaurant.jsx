import axios from "axios";
import { useState } from "react";
export default function EditInfoRestaurant({ infoRestaurant }) {
  const [editRestaurant, setEditRestaurant] = useState({
    nameRestaurant: infoRestaurant.nameRestaurant,
    addressRestaurant: infoRestaurant.addressRestaurant,
    priceService: infoRestaurant.priceService,
    descriptionRestaurant: infoRestaurant.descriptionRestaurant,
  });
  const handleChangeEditRestaurant = (e) => {
    const value = e.target.value;
    setEditRestaurant({
      ...editRestaurant,
      [e.target.name]: value,
    });
  };
  const handleEditInfoRestaurant = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/restaurant/editRestaurant/${infoRestaurant.idRestaurant}`,
        editRestaurant
      );
      if (data.success === true) {
        alert("Sữa Thông Tin Thành Công");
        window.location.reload();
      } else {
        alert("Sữa Thông Tin Thất Bại");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="userUpdate">
        <span className="userUpdateTitle">Sữa Thông Tin</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Tên Nhà Hàng</label>
              <input
                type="text"
                name="nameRestaurant"
                placeholder={infoRestaurant.nameRestaurant}
                value={editRestaurant.nameRestaurant}
                onChange={handleChangeEditRestaurant}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Địa Chỉ</label>
              <input
                type="text"
                name="addressRestaurant"
                placeholder={infoRestaurant.addressRestaurant}
                value={editRestaurant.addressRestaurant}
                onChange={handleChangeEditRestaurant}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>GIá Giao Động</label>
              <input
                type="number"
                placeholder={infoRestaurant.priceService}
                name="priceService"
                value={editRestaurant.priceService}
                onChange={handleChangeEditRestaurant}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Giới Thiệụ</label>

              <textarea
                name="descriptionRestaurant"
                style={{ width: "500px", height: "200px" }}
                value={editRestaurant.descriptionRestaurant}
                onChange={handleChangeEditRestaurant}
              />
            </div>
            <button
              className="userUpdateButton mt-5"
              type="button"
              onClick={handleEditInfoRestaurant}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
