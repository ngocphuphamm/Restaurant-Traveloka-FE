
import "../../assets/admin/narbaradmin.css";
import Auth from '../Auth/auth';

export default function NavbarAppAdmin() {
 
	return (
        <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo"><div id="center-logo" className="mt-4">
					<img
						id="logo"
						src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"
						alt=""
						className="logo-Img"
					></img>
				</div></span>
          </div>
          <div className="topRight">
                <Auth/>

          </div>
        </div>
      </div>
    )
}
