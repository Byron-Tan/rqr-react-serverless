/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Account from "views/Account";
import Applicants from "views/Applicants";

//core components/view for User Layout
import Timesheet from "views/User_Functions/Timesheets";
import LOA from "views/User_Functions/LOA_Tracker";
import Goals from "views/User_Functions/Goals";

// TODO Turn this into an array of arrays containing user dashboard and admin dashboard
const applicantRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/users",
  },
  {
    path: "/user_profile",
    name: "User Profile",
    icon: Person,
    component: Account,
    layout: "/users",
  },
];

const userRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/users",
  },
  {
    path: "/loa",
    name: "LOA Tracker",
    icon: Dashboard,
    component: LOA,
    layout: "/users",
  },
  {
    path: "/user_roster",
    name: "Timesheets",
    icon: Dashboard,
    component: Timesheet,
    layout: "/users",
  },
  {
    path: "/goals",
    name: "Goals",
    icon: Dashboard,
    component: Goals,
    layout: "/users",
  },
  {
    path: "/user_profile",
    name: "User Profile",
    icon: Person,
    component: Account,
    layout: "/users",
  },
];

const adminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/users",
  },
  {
    path: "/applicants",
    name: "Applicants",
    icon: GroupAddIcon,
    component: Applicants,
    layout: "/users",
  },
  {
    path: "/user_profile",
    name: "User Profile",
    icon: Person,
    component: Account,
    layout: "/users",
  },
];

export { applicantRoutes, userRoutes, adminRoutes };
