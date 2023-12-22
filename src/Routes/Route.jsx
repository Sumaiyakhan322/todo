import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashborad/Dashboard";
import Landing from "../Pages/Landing.jsx/Landing";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


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
    },
  ]);

  export default router;