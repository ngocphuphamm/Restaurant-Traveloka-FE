import {productData} from "../../dummyData";
import "../../../assets/admin/user.css"
import {
    Publish,
  } from "@mui/icons-material";
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
  import { Link } from 'react-router-dom';
import { useEffect,useState } from "react";
import restaurantApi from "../../../api/restaurant";
import { useParams } from "react-router-dom";
export default function EditRestaurantAdmin()
{
    const [editRestaurant,setEditRestaurant] = useState(
        {
            nameRestaurant : "",
            addressRestaurant : "",
            priceService : 0,
            descriptionRestaurant : "",
        }
    );
    const [imagesRestaurants,setImagesRestaurant] = useState([]);
    const [infoRestaurant,setInfoRestaurant ] = useState();
    const {idRestaurant} = useParams();
    useEffect(()=>{
        const getDetailRestaurant = async () =>{
            try{
                const res = await restaurantApi.getRestaurant(idRestaurant);
                setInfoRestaurant(res.data);
            }
            catch(err)
            {
                console.log(err);
            }
        }
        getDetailRestaurant();
    },[idRestaurant])
   
    const handleChange= () =>{
        
    }
    const renderRestaurant = ()=>{
        if(infoRestaurant)
        {
            return (
                <>
                    <div className="userContainer">
              <div className="userShow">
                <div className="userShowTop">
                  <img
                    src={infoRestaurant.imagesRestaurants[0].urlRestaurant}
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <h3 className="userShowUsername">{infoRestaurant.nameRestaurant}</h3>
                    <span className="userShowUserTitle">{infoRestaurant.addressRestaurant}</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Thông Tin</span>
                  <div className="userShowInfo">
                    <MonetizationOnIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">{infoRestaurant.priceService},000 VND</span>
                  </div>
                  <div className="userShowInfo">
                    <FavoriteIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">{infoRestaurant.likes}</span>
                  </div>
                  <span className="userShowTitle">Giới Thiệu</span>
                  <div className="userShowInfo mt-2">
                    <span className="userShowInfoTitle">{infoRestaurant.descriptionRestaurant}</span>
                  </div>
                  <div className="d-flex">
                  {infoRestaurant.imagesRestaurants.map((el)=>{
                      return(
                        <div className="userUpdateUpload mt-2">
                        <img
                            className="userUpdateImg"
                            src={el.urlRestaurant}
                            alt=""
                          />
                         
                                
                        </div>
                      ) 
                  })}

                  </div>
                </div>
              </div>


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
                        className="userUpdateInput"
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>GIá Giao Động</label>
                      <input
                        type="text"
                        placeholder={infoRestaurant.priceService}
                        name="priceService"
                        value={editRestaurant.priceService}
                        className="userUpdateInput"
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Giới Thiệụ</label>
                    
                      <textarea
                        name="descriptionRestaurant"
                        value={editRestaurant.descriptionRestaurant}

                      />
                    </div>
                  </div>
                  <div className="userUpdateRight">
                  {infoRestaurant.imagesRestaurants.map((el)=>{
                      return(
                        <div className="userUpdateUpload mt-2">
                        <img
                            className="userUpdateImg"
                            src={el.urlRestaurant}
                            alt=""
                          />
                          <label htmlFor="file">
                            <Publish className="userUpdateIcon" />
                          </label>
                          
                          <input type="file" id="file" style={{ display: "none" }} />        
                                
                        </div>
                      ) 
                  })}
                    
                    <button className="userUpdateButton mt-5">Update</button>
                  </div>
                </form>
              </div>
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
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        {renderRestaurant()}
      </div>
    </>
       

    )
}