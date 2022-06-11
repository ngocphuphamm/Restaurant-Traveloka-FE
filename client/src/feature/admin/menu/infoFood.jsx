import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function InfoFood({ infoFood }) {
  return (
    <>
      <div className="userShow">
        <div className="userShowTop">
          <img src={infoFood.urlImage} alt="" className="userShowImg" />
          <div className="userShowTopTitle">
            <h3 className="userShowUsername">{infoFood.nameFood}</h3>
            <span className="userShowUserTitle"></span>
          </div>
        </div>
        <div className="userShowBottom">
          <div className="userShowInfo mt-2">
            <h5>Giá Tiền :</h5>

            <h5 className="userShowInfoTitle">{infoFood.priceFood},000 VND</h5>
          </div>
          <div className="d-flex">
            <div>
              <div className="userUpdateUpload mt-2">
                <img className="userUpdateImg" src={infoFood.urlImage} alt="" />{" "}
              </div>
          
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}
