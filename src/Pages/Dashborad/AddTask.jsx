import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const todo = "todo";
  const navigate=useNavigate()
  

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const todoTask = { ...data, email, todo };
    axiosPublic.post("/toDoList", todoTask).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully add the tasks`,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          reset();
navigate('/dashboard/allTasks')
        });
      }
    });
  };

  return (
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
                  placeholder="Task-Name"
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
                  placeholder="Task-description"
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
                  placeholder="deadline"
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
                  {...register("priority")}
                >
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
