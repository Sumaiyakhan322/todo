import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GithubLogin = () => {
    const {githubSignIn}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const handleGithub=()=>{
      githubSignIn()
      .then(result=>{
        const userInfo={
          email:result?.user?.email ,
          name:result?.user?.displayName,
          image:result?.user?.photoURL,
          job:'Web-developer'
   }
   axiosPublic.post('/users',userInfo)
   .then(()=>{
    
    navigate('/dashboard/allTasks')
   })
      })
      .catch()
    }
    return (
        <div>
               <div>
             <div className="mx-auto my-10 text-center">
       
       
        <button className="btn bg-blue-400 text-black " onClick={handleGithub}>
      <FaGithub></FaGithub>
       Github
      </button>
    
    </div>
        </div>
        </div>
    );
};

export default GithubLogin;