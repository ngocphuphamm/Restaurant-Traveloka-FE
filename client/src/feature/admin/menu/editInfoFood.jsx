import { useState } from "react";
import axios from "axios"
export default function EditInfoFood({ infoFood, idFood }) {
  const [editInfoFood, setEditInfoFood] = useState({
    nameFood: infoFood.nameFood,
    priceFood: infoFood.priceFood
  });
  const [image, setImage] = useState(null);

  const handeChangeEditInfoFood = (e) => {
    const value = e.target.value;
    setEditInfoFood({
      ...editInfoFood,
      [e.target.name]: value
    })
  }
  const handleChangeImage = (e) => {
    const value = e.target.files[0];
    setImage(
      value
    );
  }
  const handleClickEdit = async () => {
    try {
  
      if (infoFood.nameFood === undefined|| infoFood.priceFood === undefined) {
        alert("Vui Lòng Nhập Đầy Đủ !")
      }
      else {
        if (image === null) {
          const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/admin/menu/updateFood/${idFood}`, editInfoFood)
          if (data.success) {
            alert("Sữa Thông Tin Thành Công");
            window.history.back();
          }
          else {
            alert("Sữa Thông Tin Thất Bại");
            
          }

        }
        else {
          const formData =  new FormData();
          formData.append('image', image);
          formData.append('nameFood',editInfoFood.nameFood);
          formData.append('priceFood',editInfoFood.priceFood);
          const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/admin/menu/updateFoodImage/${idFood}`, formData)
          if (data.success) {
            alert("Sữa Thông Tin Thành Công");
            window.history.back();
          }
          else {
            alert("Sữa Thông Tin Thất Bại")
          }
        }
      }


    }
    catch (err) {

    }

  }
  return (
    <>
      <div className="userUpdate">
        <span className="userUpdateTitle">Sữa Thông Tin</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Tên Món Ăn</label>
              <input type="text" name="nameFood"
                defaultValue={editInfoFood.nameFood}
                onChange={handeChangeEditInfoFood} />
            </div>
            <div className="userUpdateItem">
              <label>Giá Tiền</label>
              <input type="number" name="priceFood"
                defaultValue={editInfoFood.nameFood}
                onChange={handeChangeEditInfoFood} />
            </div>
            <div class="form-group mt-2">
              <label for="exampleFormControlFile1">Nếu không sữa bạn có thể bỏ trống</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                name="image"
                defaultValue={image}
                onChange={handleChangeImage}
              />
            </div>
            <button className="userUpdateButton mt-5" type="button" onClick={handleClickEdit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
