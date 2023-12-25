import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";

const AllTask = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data, isPending, refetch } = useQuery({
    queryKey: ["todo-list", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get("/toDoList");
      return res.data;
    },
  });

  if (isPending) return <Loading></Loading>;
  const loginUserTodo = data?.filter(
    (todo) => todo?.email === user?.email && todo.todo === "todo"
  );
  const loginUserOnGoing = data?.filter(
    (todo) => todo?.email === user?.email && todo.todo === "onGoing"
  );
  const loginUserComplete = data?.filter(
    (todo) => todo?.email === user?.email && todo.todo === "complete"
  );
 

  const handleOngoing = async (_id) => {
    const onGoing = { todo: "onGoing" };
    console.log(onGoing);
    console.log(_id);
    const updatedToDo = await axiosPublic.patch(`/toDoList/${_id}`, onGoing);
    console.log(updatedToDo);
    if (updatedToDo.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Successfully added to on-going the tasks`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  const handleComplete = async (_id) => {
    const onGoing = { todo: "complete" };

    console.log(_id);
    const updatedToDo = await axiosPublic.patch(`/toDoList/${_id}`, onGoing);
    console.log(updatedToDo);
    if (updatedToDo.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Successfully added to complete the tasks`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  const handelDelete=async(id)=>{
    console.log(id);
    const deleted=await axiosPublic.delete(`/toDoList/${id}`)
    if(deleted.data.deletedCount>0){
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully added to complete the tasks`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch() 
    }


  }

  return (
    <>
      {" "}
      <div className="flex flex-col md:flex-row gap-10">
        <div className=" md:w-1/3 w-full border border-blue-600 rounded-lg p-6" >
          <h1 className="text-blue-500 font-bold text-center mb-10">
            To-do-lists
          </h1>
          <div className="space-y-8">
            {loginUserTodo.map((todo) => (
              <div
                key={todo._id}
                className="card  shadow-2xl bg-blue-100 text-black"
              >
                <div className="card-body items-center text-center">
                    <div className="flex text-2xl text-blue-600  ml-auto">
                        <button onClick={()=>handelDelete(todo._id)}><MdDelete></MdDelete></button>
                        <Link to={`/dashboard/update/${todo._id}`}><MdUpdate></MdUpdate></Link>
                    </div>
                    <h2 className=" ">
                   <span className="font-bold">Task-name:</span> 
                    {todo.name}
                  </h2>
                  <p className="">
                    <span className="font-bold">Task-description:</span>
                    {todo.des}
                  </p>
                  <p>
                    <span className="font-bold">Deadline:</span>
                    {todo.date}
                  </p>
                  <p>
                    <span className="font-bold">Priority:</span>
                    {todo.priority}
                  </p>
                  <div className="card-actions mx-auto  ">
                    <button
                      className="btn bg-blue-500 mx-auto"
                      onClick={() => handleOngoing(todo._id)}
                    >
                      On-going
                    </button>
                    <button
                      className="btn bg-blue-500 mx-auto"
                      onClick={() => handleComplete(todo._id)}
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" md:w-1/3 w-full border border-blue-600 rounded-lg p-6 ">
          <h2 className="text-blue-500 font-bold text-center mb-10">
            On-going-lists
          </h2>
          <div className="space-y-8">
            {loginUserOnGoing.map((todo) => (
              <div
                key={todo._id}
                className="card   shadow-2xl bg-blue-100 text-black"
              >
                <div className="card-body items-center text-center  ">
                  <h2 className=" ">
                   <span className="font-bold">Task-name:</span> 
                    {todo.name}
                  </h2>
                  <p>
                    <span className="font-bold">Task-description:</span>
                    {todo.des}
                  </p>
                  <p>
                    <span className="font-bold">Deadline:</span>
                    {todo.date}
                  </p>
                  <p>
                    <span className="font-bold">Priority:</span>
                    {todo.priority}
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn bg-blue-500"
                      onClick={() => handleComplete(todo._id)}
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" md:w-1/3 w-full border border-blue-600 rounded-lg p-6 ">
          <h2 className="text-blue-500 font-bold text-center mb-10">
            Complete list
          </h2>
          <div className="space-y-8">
            {loginUserComplete.map((todo) => (
              <div
                key={todo._id}
                className="card   shadow-2xl bg-blue-100 text-black"
              >
                <div className="card-body items-center text-center">
                  <h2 className="">
                    <span className="font-bold">Task-name:</span>
                    {todo.name}
                  </h2>
                  <p>
                    <span className="font-bold">Task-description:</span>
                    {todo.des}
                  </p>
                  <p>
                    <span className="font-bold">Deadline:</span>
                    {todo.date}
                  </p>
                  <p>
                    <span className="font-bold">Priority:</span>
                    {todo.priority}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to={'/dashboard/addTasks'}>
      <button
        className="btn bg-blue-500 block mx-auto my-10"
        
      >
        Add Tasks
      </button></Link>
      
    </>
  );
};

export default AllTask;
