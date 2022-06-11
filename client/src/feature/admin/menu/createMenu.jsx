import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios"
export default function CreateMenu() {
    const{idRestaurant} =useParams();
    const [infoFood,setInfoFood] = useState({
        nameFood : "",
        priceFood :""
    })
    const [image,setImage] = useState(null);
    const handeChangeInfoFood = (e) =>{
        const value = e.target.value
        setInfoFood({
            ...infoFood,
            [e.target.name] : value
        })
    }
    const handleChangeImage = async (e) => {
        const value = e.target.files[0];
       setImage(
          value
        );
     
   
    }
    const handleCreate = async ()=>{
        if(infoFood.nameFood === "" || infoFood.priceFood === "" || image=== null)
        {
            alert('VUI LÒNG NHẬP THÔNG TIN ĐẦY ĐỦ')
        }
        else
        {
            try{
                const formData = new FormData();
                formData.append('image', image);
                formData.append('nameFood',infoFood.nameFood);
                formData.append('priceFood',infoFood.priceFood);
                const {data} = await  axios.post(`${process.env.REACT_APP_API_URL}/admin/menu/create/${idRestaurant}`,formData)
      
                if(data.success === true)
                {
                    alert('Tạo Món Ăn Thành Công !')
                    window.history.back()
                }
                else
                {
                    alert('Tạo Món Ăn Thất Bại');
                }
            }
            catch(err)
            {
                console.log(err)
            }
        }
    }
    return(
        <>
        <div className="newUser">
          <h1 className="newUserTitle">Tạo Món Ăn</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Tên Món Ăn</label>
              <input type="text" placeholder="VD : Tên Món Ăn" name="nameFood" 
                      defaultValue={infoFood.nameFood}
                      onChange={handeChangeInfoFood}/>
            </div>
            <div className="newUserItem">
              <label>Giá Giao Động</label>
              <input type="number" placeholder="VD :  600" name="priceFood"
                      defaultValue={infoFood.priceFood}
                      onChange={handeChangeInfoFood} />
            </div>
            <div className="newUserItem">
              <div class="form-group">
                <label for="exampleFormControlFile1">Hình Ảnh</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  name="image"
                  defaultValue={image}
                  onChange= {handleChangeImage}
                ></input>
              </div>
            </div>
  
            <button type="button" className="newUserButton text-center" onClick={handleCreate}>
              Create
            </button>
          </form>
        </div>
      </>
    )
   
  
}
