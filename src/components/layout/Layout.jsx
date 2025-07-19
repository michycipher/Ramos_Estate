import "./layout.scss";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>

    </div>
  )
}

export default Layout