import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import SocailLogin from "../../Shared/SocailLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { updateProfile } from "firebase/auth";



const Register = () => {
    const axiosPublic=useAxiosPublic()
    const {createUser}=useContext(AuthContext)
    const [error, setError] = useState("");
    
    const navigate=useNavigate()
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const photo = e.target.photo.value;
      const job = e.target.job.value;
    
      setError("");
    
     
        const result = await createUser(email, password);
    
        await updateProfile(result.user, {
          displayName: `${name}`,
          photoURL: `${photo}`,
        });
    
        const userInfo = { name, email, job };
    
        const res = await axiosPublic.post('/users', userInfo);
    
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully registered by email and password",
            showConfirmButton: false,
            timer: 1500,
          });
    
          e.target.reset();
          navigate('/dashboard/allTasks');
        }
      } 
      
   
       
    return (
        <div>
        
      
        <div className="flex justify-center">
        <div className="hero-content text-center text-neutral-content md:w-1/2 w-full">
        
          <div className="card w-full  shadow-2xl  box">
          <h2 className='text-[#193e51] my-10 font-bold md:text-4xl text-2xl'>Please Register  </h2>
            <div>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered text-black" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Photo url</span>
                </label>
                <input type="text" name="photo" placeholder="Your Photo url" className="input input-bordered text-black" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Password</span>
                </label>
                <input type='password' name="password" placeholder="password" className="input input-bordered text-black" required />  
                {error && <p className="text-red-500">{error}</p>}
                
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Your Job</span>
                </label>
                <input type='text' name="job" placeholder="Job" className="input input-bordered text-black" required />  
               
                
              </div>
              
              <div className="form-control mt-6 ">
               <input type="submit" className=' btn bg-gradient-to-r from-[#193e51] to-[#146666]hover:bg-white hover:border hover:border-[#193e51] text-[#fcf540] font-bold'  value={'Register'} />
              </div>
            </form>
            </div>
           <p className='text-black'>have already account <Link to='/login' className=" text-[#c3bd2e] font-bold underline">Log in</Link> </p>
            <SocailLogin></SocailLogin>
          </div>
        </div>
      </div>
        </div>
    );
};
export default Register;