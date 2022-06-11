import {
    Publish,
  } from "@mui/icons-material";
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {Link} from "react-router-dom"
export default function InfoRestaurant({infoRestaurant})
{
    return (
        <>
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
                  {

                    infoRestaurant.imagesRestaurants.map((el, index) => {

                      return (

                        <Link to={`/admin/restaurant/editImage/${el.idImagesRestaurant}`}>
                         <div>
                          <div className="userUpdateUpload mt-2">
                            <img
                              className="userUpdateImg"
                              src={el.urlRestaurant}
                              alt=""
                            /> </div>
                            <span>Hình {index + 1 }</span>
                        </div>
                        </Link>
                       


                      )
                    })}

                </div>
              </div>
            </div>
        </>
    )
}