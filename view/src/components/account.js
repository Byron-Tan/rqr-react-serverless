import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Button,
  Grid,
  TextField,
  MenuItem,
} from "@material-ui/core";

import clsx from "clsx";

import axios from "axios";
import { authMiddleWare } from "../util/auth";
import GoogleMaps from "../common/components/googleMaps";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  root: {},
  details: {
    display: "flex",
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  locationText: {
    paddingLeft: "15px",
  },
  buttonProperty: {
    position: "absolute",
    top: "50%",
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  progess: {
    position: "absolute",
  },
  uploadButton: {
    marginLeft: "8px",
    margin: theme.spacing(1),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  submitButton: {
    marginTop: "10px",
  },
});

class account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      username: "",
      profilePicture: "",
      address: "",
      addresses: [],
      educationLevel: "",
      educationInstitution: "",
      educationDate: "",
      employment: [
        {
          date: "",
          employer: "",
          position: "",
          salary: "",
          leaveReason: "",
        },
      ],
      workVisa: "",
      visaType: "",
      visaExpiry: "",
      howDidYouHearAboutUs: "",
      vehicleOwner: "",
      criminalConvictions: "",
      dataAvailable: "",
      communication: "",
      selfConfidence: "",
      teamwork: "",
      achievement: "",
      goals: "",
      interests: "",
      priorities: [],
      professionalReference: {
        fullName: "",
        contactNumber: "",
        email: "",
        relationship: "",
      },
      personalReference: {
        fullName: "",
        contactNumber: "",
        email: "",
        relationship: "",
      },
      declaration: "",
      uiLoading: true,
      buttonLoading: false,
      imageError: "",
    };
  }

  UNSAFE_componentWillMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get("/user")
      .then((response) => {
        this.setState({
          firstName: response.data.userCredentials.firstName,
          lastName: response.data.userCredentials.lastName,
          email: response.data.userCredentials.email,
          phoneNumber: response.data.userCredentials.phoneNumber,
          username: response.data.userCredentials.username,
          uiLoading: false,
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          this.props.history.push("/login");
        }
        console.log(error);
        this.setState({ errorMsg: "Error in retrieving the data" });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleImageChange = (event) => {
    this.setState({
      image: event.target.files[0],
    });
  };

  handleEmploymentChange = (e) => {
    if (["date", "employer", "position"].includes(e.target.className)) {
      let employment = [...this.state.employment];
      employment[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ employment });
      console.log(this.state.employment);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addEmployment = (e) => {
    this.setState((prevState) => ({
      employment: [
        ...prevState.employment,
        {
          date: "",
          employer: "",
          position: "",
          salary: "",
          leaveReason: "",
        },
      ],
    }));
  };

  profilePictureHandler = (event) => {
    event.preventDefault();
    this.setState({
      uiLoading: true,
    });
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    let formData = new FormData();
    formData.append("image", this.state.image);
    formData.append("content", this.state.content);
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .post("/user/image", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 403) {
          this.props.history.push("/login");
        }
        console.log(error);
        this.setState({
          uiLoading: false,
          imageError: "Error in posting the data",
        });
      });
  };

  updateFormValues = (event) => {
    event.preventDefault();
    this.setState({ buttonLoading: true });
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    const formRequest = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
    };
    console.log(formRequest);
    debugger;
    axios
      .post("/user", formRequest)
      .then(() => {
        this.setState({ buttonLoading: false });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          this.props.history.push("/login");
        }
        this.setState({
          buttonLoading: false,
        });
      });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { employment } = this.state.employment;
    if (this.state.uiLoading === true) {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgess} />
          )}
        </main>
      );
    } else {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Card {...rest} className={clsx(classes.root, classes)}>
            <CardContent>
              <div className={classes.details}>
                <div>
                  <Typography
                    className={classes.locationText}
                    gutterBottom
                    variant="h4"
                  >
                    {this.state.firstName} {this.state.lastName}
                  </Typography>
                  <Button
                    color="primary"
                    type="submit"
                    size="small"
                    startIcon={<CloudUploadIcon />}
                    className={classes.uploadButton}
                    onClick={this.profilePictureHandler}
                  >
                    Upload Photo
                  </Button>
                  <input type="file" onChange={this.handleImageChange} />

                  {this.state.imageError ? (
                    <div className={classes.customError}>
                      {" "}
                      Wrong Image Format || Supported Format are PNG and JPG
                    </div>
                  ) : (
                    false
                  )}
                </div>
              </div>
              <div className={classes.progress} />
            </CardContent>
            <Divider />
          </Card>

          <br />
          <Card {...rest} className={clsx(classes.root, classes)}>
            <form autoComplete="off" noValidate>
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="First name"
                      margin="dense"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Last name"
                      margin="dense"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      margin="dense"
                      name="email"
                      disabled={true}
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      margin="dense"
                      name="phone"
                      type="number"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="User Name"
                      margin="dense"
                      name="userHandle"
                      disabled={true}
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      margin="dense"
                      select
                      label="How Did You Hear About Us?"
                      name="howDidYouHearAboutUs"
                      value={this.state.howDidYouHearAboutUs}
                      onChange={this.handleChange}
                    >
                      <MenuItem key="1" value="Word Of Mouth">
                        Word Of Mouth
                      </MenuItem>
                      <MenuItem key="2" value="Online Recruitment Add">
                        Online Recruitment Add
                      </MenuItem>
                      <MenuItem key="3" value="Search Engine">
                        Search Engine
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <GoogleMaps
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      margin="dense"
                      select
                      label="Education Level"
                      name="educationLevel"
                      value={this.state.educationLevel}
                      onChange={this.handleChange}
                    >
                      <MenuItem key="1" value="Certificate">
                        Certificate
                      </MenuItem>
                      <MenuItem key="2" value="Year 12">
                        Year 12
                      </MenuItem>
                      <MenuItem key="3" value="University">
                        University
                      </MenuItem>
                      <MenuItem key="4" value="Other">
                        Other
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextField
                      fullWidth
                      label="Institution"
                      margin="dense"
                      name="educationInstitution"
                      value={this.state.educationInstitution}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextField
                      fullWidth
                      magin="dense"
                      name="educationDate"
                      value={this.state.educationDate}
                      label="Date"
                      type="month"
                      defaultValue="2020-06"
                      onChange={this.handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Divider />
                  <Typography margin="dense" align="center" display="inline">
                    Employment History
                  </Typography>
                  <CardActions />
                </Grid>
              </CardContent>
            </form>
          </Card>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={classes.submitButton}
            onClick={this.updateFormValues}
            disabled={
              this.state.buttonLoading ||
              !this.state.firstName ||
              !this.state.lastName
            }
          >
            Save details
            {this.state.buttonLoading && (
              <CircularProgress size={30} className={classes.progess} />
            )}
          </Button>
        </main>
      );
    }
  }
}

export default withStyles(styles)(account);
