
  import "../../assets/admin/sidebar.css"

  import { Link } from "react-router-dom";
  
  export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">THỐNG KÊ</h3>
            <ul className="sidebarList">
              <Link to="/admin/dashboard/R01" className="link">
            
              <li className="sidebarListItem active">
                {/* <LineStyle className="sidebarIcon" /> */}
                Thống Kê Nhà Hàng
              </li>
              </Link>
        
            
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">QUẢN LÝ</h3>
            <ul className="sidebarList">
              <Link to="/admin/restaurant" className="link">
                <li className="sidebarListItem">
           
                  Nhà Hàng
                </li>
              </Link>
              <Link to="/admin/menurestaurant" className="link">
                <li className="sidebarListItem">
                  {/* <Storefront className="sidebarIcon" /> */}
                  Menu Nhà Hàng
                </li>
              </Link>
              <Link to="/admin/bill" className="link">
              <li className="sidebarListItem">
                {/* <AttachMoney className="sidebarIcon" /> */}
                Hóa Đơn
              </li>
              </Link>
            
            </ul>
          </div>
      
    
        </div>
      </div>
    );
  }
  