import React, { Component } from "react";
import instance from "../../api/instance";

//components
import Account from "../../components/account";
import Goal from "../../components/goals";
import Applicants from "../../components/applicant";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles from "@material-ui/core/styles/withStyles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NotesIcon from "@material-ui/icons/Notes";
import Avatar from "@material-ui/core/avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";

import { authMiddleWare } from "../../util/auth";
import { CardContent } from "@material-ui/core";
import ThankYou from "../../components/cards/registrationty";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 20,
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  toolbar: theme.mixins.toolbar,
});

class dashboard extends Component {
  state = {
    render: "",
  };

  loadAccountPage = (event) => {
    this.setState({ render: "account" });
  };

  loadGoalPage = (event) => {
    this.setState({ render: "goals" });
  };

  logoutHandler = (event) => {
    localStorage.removeItem("AuthToken");
    this.props.history.push("/login");
  };

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      profilePicture: "",
      profileComplete: "",
      role: "",
      uiLoading: true,
      imageLoading: false,
    };
  }

  componentDidMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    instance.defaults.headers.common = {
      Authorization: `${authToken}`,
    };
    instance
      .get("/user")
      .then((response) => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          username: response.data.username,
          profileComplete: response.data.profileComplete,
          role: response.data.role,
          uiLoading: false,
          profilePicture: response.data.imageUrl,
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          this.props.history.push("/login");
        }
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  };

  render() {
    const { classes } = this.props;
    if (this.state.uiLoading === true) {
      return (
        <div className={classes.root}>
          {this.state.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgress} />
          )}
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                RQR
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.toolbar} />
            <Divider />
            <center>
              <Avatar
                src={this.state.profilePicture}
                className={classes.avatar}
              />
              <p>
                {" "}
                {this.state.firstName} {this.state.lastName}
              </p>
            </center>
            <Divider />
            {this.state.profileComplete !== "true" ? (
              <Alert severity="info">Please Complete Account Information</Alert>
            ) : null}
            <List>
              {this.state.role !== 1 ? (
                <ListItem button key="Goals" onClick={this.loadGoalPage}>
                  <ListItemIcon>
                    {" "}
                    <NotesIcon />{" "}
                  </ListItemIcon>
                  <ListItemText primary="Goals" />
                </ListItem>
              ) : null}
              {this.state.profileComplete === "false" ? (
                <ListItem button key="Account" onClick={this.loadAccountPage}>
                  <ListItemIcon>
                    {" "}
                    <AccountBoxIcon />{" "}
                  </ListItemIcon>
                  <ListItemText primary="Account" />
                </ListItem>
              ) : null}
              <ListItem button key="Logout" onClick={this.logoutHandler}>
                <ListItemIcon>
                  {" "}
                  <ExitToAppIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
          <div>
            {" "}
            {this.state.render === "" ? null : this.state.render ===
              "account" ? (
              <Account />
            ) : this.state.render === "goals" ? (
              <Goal />
            ) : this.state.render === "applicants" ? (
              <Applicants />
            ) : null}
          </div>
          {this.state.profileComplete === "true" ? (
            <ThankYou firstname={this.state.firstName} />
          ) : null}
        </div>
      );
    }
  }
}

export default withStyles(styles)(dashboard);
