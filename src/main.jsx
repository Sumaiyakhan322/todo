import React from 'react'
import ReactDOM from 'react-dom/client'
import {
 
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import AuthProvider from './Providers/AuthProvider';
import router from './Routes/Route';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className="lg:max-w-screen-xl mx-auto ">
    <RouterProvider router={router} />
    </div>
    
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
