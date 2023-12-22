import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocailLogin = () => {


    const {googleSignIn}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const handleGoogle=()=>{
      googleSignIn()
      .then(result=>{
        const userInfo={
          email:result?.user?.email ,
          name:result?.user?.displayName,
          role:'member'
   }
   axiosPublic.post('/users',userInfo)
   .then(res=>{
    console.log(res.data);
    navigate('/')
   })
      })
      .catch(err=>console.log(err))
    }
    return (
        <div>
             <div className="mx-auto my-10 text-center">
       
       <div className="divider "></div>
        <button className="btn" onClick={handleGoogle}>
      <FaGoogle></FaGoogle>
Google
      </button>
    
    </div>
        </div>
    );
};

export default SocailLogin;