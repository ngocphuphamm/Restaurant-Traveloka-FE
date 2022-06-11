import { useEffect, useState } from 'react';
import "../../../assets/admin/user.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function EditImageRestaurant() {
    const [imagesRestaurant, setImageRestaurant] = useState({});

    const { idImage } = useParams()
    const [image,setImage] = useState(null)
    useEffect(() => {
        try {
            const getImage = async () => {
                try {
                    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/admin/getImage/${idImage}`);
                    setImageRestaurant(data.image);
                }
                catch (err) {
                    console.log(err);
                }

            }
            getImage()
        }
        catch (err) {

        }
    },[])
    const handleChangeImage = async (e) => {
        const value = e.target.files[0];
       setImage(
          value
        );
     
   
    }
    const handleClickUpdateImage = async() =>{
       
        try
        {
            const formData = new FormData();
            formData.append('image',image);
            const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/admin/editImageRestaurant/${idImage}`,formData);
            if(data.success) {
                alert("Sữa Thành Công")
                window.history.back()
            }
        }
        catch(err)
        {

        }
    }
    const renderInfoImage = () => {
        if (imagesRestaurant !== {}) {

            return (
                <div>
                    <div className="userTitleContainer">
                        <h1 className="userTitle">Sữa Hình Ảnh</h1>

                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowTop">

                                <div className="userShowTopTitle">
                                    <img
                                        src={imagesRestaurant.urlRestaurant}
                                        alt=""
                                        width="300px;"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm">

                                <div className="userUpdateRight">
                                    <div className="userUpdateUpload">
                                        <img
                                            className="userUpdateImg"
                                            src={imagesRestaurant.urlRestaurant}
                                            alt=""
                                        />

                                        <div class="form-group">
                                            <input type="file" class="form-control-file" id="exampleFormControlFile1"
                                                name="image"
                                                defaultValue={image}
                                                onChange={handleChangeImage}></input>
                                        </div>
                                    </div>
                                    <button className="userUpdateButton mt-2" onClick={handleClickUpdateImage} type="button">Cập Nhật</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <>

            </>
        }
    }
    return (
        <>
            <div className="user">
                {renderInfoImage()}
            </div>
        </>
    )
}