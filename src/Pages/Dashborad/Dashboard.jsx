import { useContext } from "react";


import { AuthContext } from "../../Providers/AuthProvider";

import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";


const Dashboard = () => {
   
    const navigate=useNavigate()
    
    const {user,logout}=useContext(AuthContext)
    
     const handleSignOut = (e) => {
      e.preventDefault();
      logout().then().catch();
      navigate('/')

    };
 

     
     
    return (
        <div>
            {/* <AddTask></AddTask> */}
            <div className="flex flex-col  md:flex-row">
       
       <div className="md:w-64 bg-sky-800 md:min-h-screen ">
         <ul className="menu flex flex-row md:flex-col text-white items-center">
           <li>
           <Link to={"/"}>
               {" "}
               <span className="cursor-pointer text-3xl text-pink-400   flex">
                 Find Your Tasks
               </span>
             </Link>
           </li>
           
           {user && (
              <>
                <div className="flex-col flex gap-5 font-bold ">
                  <div className="flex items-center space-x-2 flex-col-reverse  ">
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
                    className="block  mx-auto md:btn-lg btn-sm btn text-[#146666] hover:bg-white  font-bold border  hover:border-#c3bd2e "
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                </div>
              </>
            )}
        
          
 
          
           <div className="divider "></div>
         
           <li>
             <NavLink to={"/dashboard/allTasks"} className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-pink-400" : ""
       }>
               {" "}
              All Tasks
             </NavLink>
           </li>
           <li>
             <NavLink to={"/dashboard/addTasks"} className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-pink-400" : ""
       }>
               {" "}
             Add Tasks
             </NavLink>
           </li>
        
         </ul>
       </div>
       {/* dashborad */}
       <div className="flex-1 md:p-8  p-3">
         <Outlet></Outlet>
       </div>
     </div>
        </div>
    );
};

export default Dashboard