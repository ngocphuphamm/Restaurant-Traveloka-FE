import "../../../assets/admin/newUser.css"
import { useState, useEffect } from 'react';
import axios from "axios";
export default function CreateRestaurant() {
  const infoLogin = JSON.parse(window.localStorage.getItem('accessToken'));
  const [infoRestaurant, setInfoRestaurant] = useState({
    nameRestaurant: "",
    addressRestaurant: "",
    descriptionRestaurant: "",
    idStaff: infoLogin.sub,
    priceService: 0,
  })
  const [image, setImage] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: ""
  })

  const handleChangeInfoRestaurant = (e) => {
    const value = e.target.value;
    setInfoRestaurant({
      ...infoRestaurant,
      [e.target.name]: value,

    });
  }
  const handleChangeImage = (e) => {
    const value = e.target.files[0];
    setImage({
      ...image,
      [e.target.name]: value,

    });
  }
  useEffect(() => {
  })

  const handleClickCreate = async () => {
    try {
      if (infoRestaurant.addressRestaurant === "" || infoRestaurant.nameRestaurant === "" ||
        infoRestaurant.descriptionRestaurant === "" || infoRestaurant.priceService === "" ||
        image.image1 === "" || image.image2 === "" || image.image3 === "") {
        alert("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");
      }
      else {
        const formData = new FormData();
        formData.append('image', image.image1);
        formData.append('image', image.image2);
        formData.append('image', image.image3);
        formData.append('image', image.image4);
        formData.append('nameRestaurant',infoRestaurant.nameRestaurant);
        formData.append('addressRestaurant',infoRestaurant.addressRestaurant);
        formData.append('priceService',infoRestaurant.priceService);
        formData.append('descriptionRestaurant',infoRestaurant.descriptionRestaurant);
        formData.append('idStaff',infoRestaurant.idStaff,)
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/admin/restaurant/createRestaurant`, formData);
        if(data.success) {
          alert('Tạo Nhà Hàng Thành Công ');
       
           window.location.replace(`/admin/restaurant/edit/${data.idRestaurant}`)
        }
        else
        {
          alert('Tạo Nhà Hàng Thât Bại')
        }
      }
    }
    catch (err) {
      console.log(err);
    }


  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Tạo Nhà Hàng</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Tên Nhà Hàng</label>
          <input type="text"
            placeholder="VD : LOTTE FOOD"
            name="nameRestaurant"
            defaultValue={infoRestaurant.nameRestaurant}
            onChange={handleChangeInfoRestaurant} />
        </div>
        <div className="newUserItem">
          <label>Địa Chỉ</label>
          <input type="text" placeholder="VD :  22/2 Nguyen Thi Minh Khai"
            name="addressRestaurant"
            defaultValue={infoRestaurant.addressRestaurant}
            onChange={handleChangeInfoRestaurant} />
        </div>
        <div className="newUserItem">
          <label>Giá Giao Động</label>
          <input type="number" placeholder="VD :  600"
            name="priceService"
            defaultValue={infoRestaurant.priceService}
            onChange={handleChangeInfoRestaurant} />
        </div>
        <div className="newUserItem">
          <label>Giới Thiệu</label>
          <textarea name="descriptionRestaurant"
            defaultValue={infoRestaurant.descriptionRestaurant}
            onChange={handleChangeInfoRestaurant} />
        </div>
        <div className="newUserItem">
          <div class="form-group">
            <label for="exampleFormControlFile1">Hình 1</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"
              name="image1"
              defaultValue={image.image1}
              onChange={handleChangeImage}></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Hình 2</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"
              name="image2"
              defaultValue={image.image2}
              onChange={handleChangeImage}></input>
          </div>
        </div>

        <div className="newUserItem">
          <div class="form-group">
            <label for="exampleFormControlFile1">Hình 3</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"
              name="image3"
              defaultValue={image.image3}
              onChange={handleChangeImage}></input>
          </div>

          <div class="form-group">
            <label for="exampleFormControlFile1">Hình 4</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"
              name="image4"
              defaultValue={image.image4}
              onChange={handleChangeImage}></input>
          </div>
        </div>


        <button type="button" className="newUserButton" onClick={handleClickCreate}>Create</button>
      </form>
    </div>
  );

}