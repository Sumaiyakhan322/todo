import { useContext } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AddTask from "./AddTask";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";


const Dashboard = () => {
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate()
    
    const {user,logout}=useContext(AuthContext)
     const userEmail=user?.email;
     const handleSignOut = (e) => {
      e.preventDefault();
      logout().then().catch();
      navigate('/')

    };
 
    const {data,isPending} =useQuery({
         queryKey:[user?.email,'users'],
        //  enabled:!loading,
         queryFn:async ()=>{
            const res=await axiosPublic.get(`/users`)
             return res.data;
         }
     })
     if(isPending) return <Loading></Loading>
     const loginUser=data?.find(user=>user?.email===userEmail)
     console.log(loginUser);
     
    return (
        <div>
            {/* <AddTask></AddTask> */}
            <div className="flex flex-col md:flex-row">
       
       <div className="md:w-64 bg-[#193e51] md:min-h-screen ">
         <ul className="menu flex flex-row md:flex-col text-white">
           <li>
           <Link to={"/"}>
               {" "}
               <span className="cursor-pointer text-3xl text-yellow-300 flex">
                 Find Your Tasks
               </span>
             </Link>
           </li>
           <li >
           {user && (
              <>
                <div className="flex-col flex gap-5 ">
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
                    className="block md:btn-lg btn-sm btn text-[#146666] hover:bg-white  font-bold border  hover:border-#c3bd2e "
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                </div>
              </>
            )}
           </li>
          
 
           {/* common links */}
           <div className="divider"></div>
           <li>
             <NavLink to={"/dashboard/addTasks"} className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-yellow-300" : ""
       }>
               {" "}
             Add Tasks
             </NavLink>
           </li>
           <li>
             <NavLink to={"/classes"} className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-yellow-300" : ""
       }>
               {" "}
              Classes
             </NavLink>
           </li>
           <li>
             <NavLink to={"/trainer"} className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-yellow-300" : ""
       }>
               {" "}
             Trainer
             </NavLink>
           </li>
         </ul>
       </div>
       {/* dashborad */}
       <div className="flex-1 p-8 ">
         <Outlet></Outlet>
       </div>
     </div>
        </div>
    );
};

export default Dashboard