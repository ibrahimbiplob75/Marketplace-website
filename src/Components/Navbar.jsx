import { Link } from "react-router-dom";
import slider4 from "../../src/assets/img-7.jpg";
import { useContext } from "react";
import { ContextProvider } from "../AuthContext/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(ContextProvider);

  const logoutHandle=()=>{
      logout();
       window.location.reload();
  }
    const list = (
      <>
        <li>
          <Link className="text-xl font-semibold font-sans" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-xl font-semibold font-sans" to="/Product">
            Add Product
          </Link>
        </li>
        <li>
          <Link className="text-xl font-semibold font-sans" to="/mycart">
            My Cart
          </Link>
        </li>
        <li>
          <Link className="text-xl font-semibold font-sans" to="/Contact">
            Contact Us
          </Link>
        </li>
      </>
    );
    return (
      <div>
        <div className="navbar bg-base-100 flex justify-around shadow-xl">
          <div className="navbar-start lg:hidden ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {list}
              </ul>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{list}</ul>
          </div>
          <div className="flex justify-between">
            {
              user ? 
            
            <div className="ml-4 dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={slider4} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link onClick={logoutHandle}>Logout</Link>
                </li>
              </ul>
            </div>

            :

            <div className="navbar-end">
              <Link to="/login" className="btn">
                LogIn
              </Link>
            </div>

            }
          </div>
        </div>
      </div>
    );
};

export default Navbar;