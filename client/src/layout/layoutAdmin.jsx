import "../assets/admin/layoutadmin.css"
import { Outlet } from 'react-router-dom';
import NavbarAppAdmin from "../components/navbarAdmin/navbarAdmin";
import Sidebar from "../components/navbarAdmin/sideBarAdmin";
export default function LayoutAdmin() {
    return (
      <>
          <NavbarAppAdmin />
          <div className="respon">
                  <Sidebar />
                  <Outlet/>
          </div>
      </>
    );
  }
  