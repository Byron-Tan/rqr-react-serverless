import React from "react";

export default function LogOut() {
  // localStorage.removeItem("AuthToken");
  this.props.path("/login");
}

// if (prop.path === "/logout") {
//   activePro = classes.activePro + " ";
//   listItemClasses = classNames({
//     [" " + classes[color]]: true,
//   });
// }

// {
// path: "/logout",
// name: "Log Out",
// icon: ExitToApp,
// component: LogOut,
// layout: "/admin",
// },

// const whiteFontClasses = classNames({
//   [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
// });
