// import "./navbar.scss";
// import { useState } from "react";

// const Navbar = () => {
// const [open, setOpen] = useState(false);

//   return (
//     <nav className="">
//       {/* Left nav */}
//       <div className="left">
//         <a href="/" className="logo">
//           <img src="/logo.png" alt="logo" />
//           <span>Ramos Realty</span>
//         </a>
//         <a href="/">Home</a>
//         <a href="">About</a>
//         <a href="">Contact Us</a>
//       </div>

//       {/* Right nav */}
//       <div className="right">
//         <a href="/">Login</a>
//         <a href="/" className="register">Register</a>
//         <div className="menuIcon">
//           <img src="/menu.png" alt="" onClick={() => setOpen(prev => !prev)}/>
//         </div>

//         {/* mobile menu */}
//         <div className={open ? "mobileMenu active" : "mobileMenu"}>
//           <a href="/">Home</a>
//           <a href="">About</a>
//           <a href="">Contact Us</a>
//           <a href="/">Login</a>
//           <a href="/">Register</a>
//           </div>

//       </div>
//     </nav>
//   )
// }

// export default Navbar

import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav className="">
      {/* Left nav */}
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Ramos Realty</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Right nav */}
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Mikka John</span>
            <Link to="/profile" className="profile">
            <div className="notification">2</div>
            <span>Profiles</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="login">Login</Link>
            <Link to="register" className="register">Register</Link>
          </>
        )}

        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen(prev => !prev)} />
        </div>

        {/* mobile menu */}
        <div className={open ? "mobileMenu active" : "mobileMenu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar