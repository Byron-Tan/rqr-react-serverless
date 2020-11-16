import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//redux tools
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import { userRoutes, adminRoutes, applicantRoutes } from "routes.js";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/final-logo.svg";

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // Redux Logic
  const userDetails = useSelector((state) => state.user.user);
  const [user] = useState(userDetails);

  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image] = React.useState(bgImage);
  const [color] = React.useState("blue");
  // const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/users/maps";
  };
  // const resizeFunction = () => {
  //   if (window.innerWidth >= 960) {
  //     setMobileOpen(false);
  //   }
  // };
  // // initialize and destroy the PerfectScrollbar plugin
  // React.useEffect(() => {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps = new PerfectScrollbar(mainPanel.current, {
  //       suppressScrollX: true,
  //       suppressScrollY: false,
  //     });
  //     document.body.style.overflow = "hidden";
  //   }
  //   window.addEventListener("resize", resizeFunction);
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //     }
  //     window.removeEventListener("resize", resizeFunction);
  //   };
  // }, [mainPanel]);

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    var routes;
    user.role === 0
      ? (routes = adminRoutes)
      : user.role === 1
      ? (routes = applicantRoutes)
      : user.role === 2
      ? (routes = userRoutes)
      : push("/login");

    const switchRoutes = (
      <Switch>
        {routes.map((prop, key) => {
          if (prop.layout === "/users") {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          }
          return null;
        })}
        <Redirect from="/admin" to="/admin/dashboard" />
      </Switch>
    );
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={
            user.role === 0
              ? (routes = adminRoutes)
              : user.role === 1
              ? (routes = applicantRoutes)
              : user.role === 2
              ? (routes = userRoutes)
              : null
          }
          logoText={"RQR - Sales OS"}
          logo={logo}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
        <div className={classes.mainPanel} ref={mainPanel}>
          <Navbar
            routes={routes}
            handleDrawerToggle={handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}
