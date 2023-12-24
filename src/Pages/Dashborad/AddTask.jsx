import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";


const AddTask = () => {
  const {user}=useContext(AuthContext)
  
  const email=user?.email
   const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const todoTask={...data,email}
          console.log(todoTask);
        
  }
    
 
    return (
        <div>
            <div className="hero min-h-screen w-full ">
  <div className="md:w-1/2 w-full ">
    
    <div className="card shrink-0    shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Name:</span>
          </label>
          <input type="text" placeholder="Task-Name" className="input input-bordered " required name="name" {...register("name")} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task-description</span>
          </label>
          <input type="text" placeholder="Task-description" className="input input-bordered " required  {...register("des")}/>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Deadline</span>
          </label>
          <input type="date" placeholder="deadline" className="input input-bordered " required  {...register("date")}/>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select className=" input-bordered " {...register("priority")}>
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