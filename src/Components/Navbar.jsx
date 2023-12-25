import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { MdOutlineTask } from "react-icons/md";

const Navbar = () => {
    const { user } = useContext(AuthContext);
   
    
    const navLinks = (
      <>
        <li className="hover:bg-[#aac7c7]  rounded-lg nav ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-pink-600" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="hover:bg-[#aac7c7]  rounded-lg nav">
          <NavLink
            to="/blogs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-pink-600" : ""
            }
          >
           Blogs
          </NavLink>
        </li>
        <li className="hover:bg-[#aac7c7] rounded-lg nav">
          <NavLink
            to={`/aboutUs`}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-pink-600" : ""
            }
          >
           About us
          </NavLink>
        </li>
        <li className="hover:bg-[#aac7c7] rounded-lg nav">
          <NavLink
            to={`/contact`}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-pink-600" : ""
            }
          >
           Features
          </NavLink>
        </li>
       
        <li  className="hover:bg-[#aac7c7] rounded-lg nav">
        {user ?  (
          <NavLink to={"/dashboard/allTasks"}  className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "" : ""
        }>
           Let’s Explore
          </NavLink>
          
        ):<NavLink to={'/login'} >Let’s Explore</NavLink> }
       
        </li>
      </>
    );
    return (
        <div>
      <div>
        <div className="navbar p-4 sticky inset-0  z-10  flex flex-col gap-5 md:flex-row justify-between  bg-gradient-to-r from-emerald-200 to-sky-200 text-black ">
          <div className=" flex flex-col-reverse md:flex-row lg:navbar-start">
            <div className="dropdown  ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 font-bold text-base space-x-2  bg-[#478686]   "
              >
                {navLinks}
              </ul>
            </div>
            <Link to={"/"}>
              {" "} 
              <span className="cursor-pointer text-4xl  flex items-center ">
             <span className="ml-2"></span> <MdOutlineTask></MdOutlineTask> <span> TaskCrafted</span> 
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-base space-x-2   ">
              {navLinks}
            </ul>
          </div>
          <div className="md:navbar-end mx-auto">
            {/* {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2 flex-col-reverse">
                    <p className="font-bold text-lg  ">
                      {user?.displayName}
                    </p>
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="md:h-20 md:w-20 h-10 w-10 rounded-full"
                    />
                  </div>
                  <button
                    className="btn text-[#146666] hover:bg-white  font-bold border  hover:border-#c3bd2e "
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="btn text-[#146666] border   border-[#c3bd2e]   hover:bg-white hover: font-bold">
                  Login
                </button>
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;