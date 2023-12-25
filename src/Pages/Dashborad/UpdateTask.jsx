import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const UpdateTask = () => {
    const { register, handleSubmit,  } = useForm();
    const navigate=useNavigate()
    const {id}=useParams()
    const axiosPublic = useAxiosPublic();
    const {user}=useContext(AuthContext)
    const email=user?.email
    const { data, isPending } = useQuery({
      queryKey: ["todo-update", id],
      queryFn: async () => {
        const res = await axiosPublic.get(`/toDoList/${id}`);
        return res.data;
      },
    });
  
    if (isPending) return <Loading></Loading>;
    console.log(data);
   

    const onSubmit = (formData) => {
      const todoTask = {...formData,todo:'todo',email};
      axiosPublic.patch(`/toDoListUpdated/${id}`, todoTask).then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully updated the tasks`,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            
            
          });

         navigate('/dashboard/allTasks') 
        }
      });
    };

    return (
        <div>
            <div>
      <div className="hero min-h-screen w-full ">
        <div className="md:w-1/2 w-full ">
          <div className="card shrink-0    shadow-2xl bg-base-200">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-blue-500 font-bold">
                    Task Name:
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={data.name}
                  className="input input-bordered "
                  required 
                  name="name"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Task-description
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={data.des}
                  className="input input-bordered "
                  required
                  {...register("des")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Deadline
                  </span>
                </label>
                <input
                  type="date"
                  defaultValue={data.date}
                  className="input input-bordered "
                  required
                  {...register("date")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Priority
                  </span>
                </label>
                <select
                  className="select-bordered select "
                  {...register("priority")} defaultValue={data.priority}
                >
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500">Update Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default UpdateTask;