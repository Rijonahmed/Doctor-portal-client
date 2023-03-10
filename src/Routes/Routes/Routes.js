import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctor/ManageDoctors";

import MyAppointment from "../../Pages/Dashboard/My-Appointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home />

        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/appointment',
          element: <Appointment></Appointment>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <MyAppointment></MyAppointment>
        },
        {
          path: '/dashboard/alluser',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path: '/dashboard/adddoctor',
          element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
        },
        {
          path: '/dashboard/managedoctors',
          element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
        },
      ]
    }
  ]
)
export default router