import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Loading";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const OurUsers = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: true, // Only animate once
        });
      }, []);
    const axiosPublic = useAxiosPublic();
    
  const { data, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  if (isPending) return <Loading></Loading>;
    return (
        <div>
           
            <section className="my-32 text-center">
  <h2 className="mb-12 md:text-5xl font-bold text-blue-400 text-3xl" data-aos="fade-up" >Our benefited users</h2>
  <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 gap-20">
    {
        data.map(users=>(
<div key={users._id} className="mb-12 md:mb-0">
      <div className="mb-6 flex justify-center">
        <img
          src={users.image}
          className="w-32 rounded-full shadow-lg dark:shadow-black/20"
        />
      </div>
      <h5 className="mb-2 text-lg font-bold">{users?.name}</h5>
      <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
       {users?.job}
      </h6>
      <p>{users?.description}</p>
  
      <ul className="mb-0 flex justify-center">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-5 text-warning"
          >
            <path
              fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-5 text-warning"
          >
            <path
              fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-5 text-warning"
          >
            <path
              fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-5 text-warning"
          >
            <path
              fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-5 text-warning"
          >
            <path
              fill="currentColor"
              d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            />
          </svg>
        </li>
      </ul>
    </div>
        ))
    }
    
  
  </div>
</section>

        </div>
    );
};

export default OurUsers;