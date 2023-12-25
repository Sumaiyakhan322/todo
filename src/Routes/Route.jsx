import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashborad/Dashboard";
import Landing from "../Pages/Landing.jsx/Landing";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Private from "../Private/Private";
import AddTask from "../Pages/Dashborad/AddTask";
import AllTask from "../Pages/Dashborad/AllTask";
import UpdateTask from "../Pages/Dashborad/UpdateTask";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Landing></Landing>
        },{
            path:'/login',
            element:<Login></Login>
        },{
            path:'/register',
            element:<Register></Register>
        }
    
    ]
    },{
      path:'dashboard',
      element:<Private><Dashboard></Dashboard></Private>,
      children:[{
        path:'addTasks',
        element:<AddTask></AddTask>,

      },{
        path:'allTasks',
        element:<AllTask></AllTask>
      },{
        path:'update/:id',
        element:<UpdateTask></UpdateTask>
      }
    ]
    }
  ]);

  export default router;