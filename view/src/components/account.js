import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FieldInputs from "./FieldInputs";
import FieldInputsEmployement from "./FieldInputsEmployement";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import FieldsPreviousEmployement from "./fieldsPreviousEmployement";
import Checkbox from "@material-ui/core/Checkbox";
import Example from "./example";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
import Slider from "@material-ui/core/Slider";
// import { makeStyles } from '@material-ui/core/styles';

import clsx from "clsx";

import instance from "../api/instance";
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
  width100: {
    width: "100% !important",
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  marginTop15px: {
    marginTop: "15px",
  },
  locationText: {
    paddingLeft: "15px",
  },
  padding15px: "15px",
  buttonProperty: {
    position: "absolute",
    top: "50%",
  },
  section2: {
    width: "100%",
    margin: theme.spacing(2),
  },
  section6: {
    width: "100%",
    margin: theme.spacing(2),
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

const marks = [
  { value: 0, label: "0" },
  { value: 100, label: "100" },
];

class account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      declaration: "",
      declaration_date: new Date(),
      phoneNumber: "",
      username: "",
      profilePicture: "",
      address: "",
      educationLevel: "",
      communication: "",
      self_confidence: "",
      teamwork: "",
      leadership: "",
      self_motivation: "",
      educationInstitution: "",
      looking_to_achieve_role: "",
      goals_achieve_from_career: "",
      hobbies: "",
      fields: [{ date: "", college_name: "", certification_gained: "" }],
      fieldsEmployement: [
        {
          date: "",
          employer: "",
          position_of_contractor: "",
          salary: "",
          reason_for_leaving: "",
          notice_required: "",
        },
      ],
      fieldsPreviousEmployement: [
        {
          date: "",
          employer: "",
          position_of_contractor: "",
          salary: "",
          reason_for_leaving: "",
        },
      ],
      educationDate: "",
      cards: [],
      employment: [
        {
          date: "",
          employer: "",
          position: "",
          salary: "",
          leaveReason: "",
        },
      ],
      available_start_date: "",
      australian_resident: "yes",
      highest_education: "cerificate",
      highest_education_value: "cerificate",
      vehicle_owner: "yes",
      current_work_visa: "yes",
      workVisa: "",
      visaType: "",
      visaExpiry: "",
      howDidYouHearAboutUs: "",
      vehicleOwner: "",
      criminalConvictions: "no",
      dataAvailable: "",
      // communication: "",
      selfConfidence: "",
      // teamwork: "",
      achievement: "",
      goals: "",
      interests: "",
      current_work_visa_type: "",
      priorities: [],
      visaExpiryDate: "",
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
    instance.defaults.headers.common = { Authorization: `${authToken}` };
    instance
      .get("/user")
      .then((response) => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          username: response.data.username,
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

  handleChangeDeclaration = (event) => {
    this.setState({
      declaration: event.target.checked,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleChangeAddress = (value) => {
    this.setState({
      address: value,
    });
  };

  handleChangeHighestEducation = (event) => {};

  handleImageChange = (event) => {
    this.setState({
      image: event.target.files[0],
    });
  };

  valuetext = (value) => {
    return `${value}°C`;
  };

  valuetextCommunication = (value) => {
    this.setState({
      communication: value,
    });
    return `${value}°C`;
  };

  handleEmploymentChange = (e) => {
    if (["date", "employer", "position"].includes(e.target.className)) {
      let employment = [...this.state.employment];
      employment[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ employment });
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
    instance.defaults.headers.common = { Authorization: `${authToken}` };
    instance
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
        this.setState({
          uiLoading: false,
          imageError: "Error in posting the data",
        });
      });
  };

  addFields = () => {
    let objArr = [...this.state.fields];
    objArr.push({ date: "", college_name: "", certification_gained: "" });
    this.setState({
      fields: objArr,
    });
  };

  addFieldsEmployement = () => {
    let objArr = [...this.state.fieldsEmployement];
    objArr.push({
      date: "",
      employer: "",
      position_of_contractor: "",
      salary: "",
      reason_for_leaving: "",
      notice_required: "",
    });
    this.setState({
      fieldsEmployement: objArr,
    });
  };

  addFieldsPreviousEmployement = () => {
    let objArr = [...this.state.fieldsPreviousEmployement];
    objArr.push({
      date: "",
      employer: "",
      position_of_contractor: "",
      salary: "",
      reason_for_leaving: "",
    });
    this.setState({
      fieldsPreviousEmployement: objArr,
    });
  };

  removeFields = (index) => {
    let obj = [...this.state.fields];
    obj.splice(index, 1);
    this.setState({
      fields: obj,
    });
  };

  removeFieldsEmployementHistory = (index) => {
    let obj = [...this.state.fieldsPreviousEmployement];
    obj.splice(index, 1);

    this.setState({
      fieldsPreviousEmployement: obj,
    });
  };

  setFieldNameFun = (value, field_name, index) => {
    let obj = [...this.state.fields];
    if (field_name === "date") {
      obj[index].date = value;
    } else if (field_name === "college_name") {
      obj[index].college_name = value;
    } else {
      obj[index].qualification_gained = value;
    }
    this.setState({
      fields: obj,
    });
  };

  setFieldNameEmployementFun = (value, field_name, index) => {
    let obj = [...this.state.fieldsEmployement];
    if (field_name === "date") {
      obj[index].date = value;
    } else if (field_name === "employer") {
      obj[index].employer = value;
    } else if (field_name === "position_of_contractor") {
      obj[index].position_of_contractor = value;
    } else if (field_name === "salary") {
      obj[index].salary = value;
    } else if (field_name === "notice_required") {
      obj[index].notice_required = value;
    } else if (field_name === "reason_for_leaving") {
      obj[index].reason_for_leaving = value;
    } else {
      obj[index].qualification_gained = value;
    }
    this.setState({
      fieldsEmployement: obj,
    });
  };

  setFieldNamePreviousEmployementFun = (value, field_name, index) => {
    let obj = [...this.state.fieldsPreviousEmployement];
    if (field_name === "date") {
      obj[index].date = value;
    } else if (field_name === "employer") {
      obj[index].employer = value;
    } else if (field_name === "position_of_contractor") {
      obj[index].position_of_contractor = value;
    } else if (field_name === "salary") {
      obj[index].salary = value;
    } else if (field_name === "reason_for_leaving") {
      obj[index].reason_for_leaving = value;
    } else {
      obj[index].qualification_gained = value;
    }
    this.setState({
      fieldsPreviousEmployement: obj,
    });
  };

  setCard = (cards) => {
    this.setCardVal(cards);
  };

  setCardVal = (cards) => {
    this.setState({
      priorities: cards,
    });
  };

  handleSliderChange = (event, newValue) => {
    this.setState({
      communication: newValue,
    });
  };

  handleSliderChangeLeaderShip = (event, newValue) => {
    this.setState({
      leadership: newValue,
    });
  };

  handleSliderChangeSelfConfidence = (event, newValue) => {
    this.setState({
      self_confidence: newValue,
    });
  };

  handleSliderChangeSelfMotivation = (event, newValue) => {
    this.setState({
      self_motivation: newValue,
    });
  };

  handleSliderChangeTeamWork = (event, newValue) => {
    this.setState({
      team_work: newValue,
    });
  };

  updateFormValues = (event) => {
    const formRequest = {
      address: this.state.address,
      startDate: this.state.available_start_date,
      funnel: this.state.howDidYouHearAboutUs,
      vehicleOwner: this.state.vehicle_owner,
      resident: this.state.australian_resident,
      currentWorkVisa: this.state.current_work_visa,
      currentVisaType: this.state.current_work_visa_type,
      currentVisaExpiry: this.state.current_work_visa_expiry,
      highest_education: this.state.highest_education,
      education: this.state.fields,
      employment: this.state.fieldsEmployement,
      previous_employment: this.state.fieldsPreviousEmployement,
      communication: this.state.communication,
      leadership: this.state.leadership,
      self_confidence: this.state.self_confidence,
      self_motivation: this.state.self_motivation,
      team_work: this.state.team_work,
      achievement_goals: this.state.looking_to_achieve_role,
      career_goals: this.state.goals_achieve_from_career,
      interest: this.state.hobbies,
      priorities: this.state.priorities,
      profileComplete: "true",
      declaration: this.state.declaration,
      declaration_date: this.state.declaration_date,
      role: 1,
    };
    event.preventDefault();
    this.setState({ buttonLoading: true });
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    instance.defaults.headers.common = { Authorization: `${authToken}` };
    instance
      .post("/user", formRequest)
      .then(() => {
        this.setState({ buttonLoading: false });
        window.location.reload();
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
                      disabled
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      disabled
                      label="Last name"
                      margin="dense"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      required
                      disabled
                      fullWidth
                      name="dateOfBirth"
                      label="Date of Birth"
                      type="date"
                      id="dateOfBirth"
                      onChange={this.handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <GoogleMaps
                      value={this.state.address}
                      onChange={this.handleChangeAddress}
                      setHandler={this.handleChangeAddress}
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
                      label="Contact Number"
                      margin="dense"
                      name="phone"
                      type="number"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="available_start_date"
                      label="Date avalible to start"
                      type="date"
                      id="available_start_date"
                      onChange={this.handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
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
                  <Grid item md={6} xs={12}>
                    <FormLabel component="legend">Vehicle owner</FormLabel>
                    <RadioGroup
                      aria-label="Vehicle owner"
                      name="vehicle_owner"
                      value={this.state.vehicle_owner}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <FormLabel component="legend">
                      Criminal convitions
                    </FormLabel>
                    <RadioGroup
                      aria-label="Vehicle owner"
                      name="criminalConvictions"
                      value={this.state.criminalConvictions}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <FormLabel component="legend">
                      Australian resident
                    </FormLabel>
                    <RadioGroup
                      aria-label="Australian resident"
                      name="australian_resident"
                      value={this.state.australian_resident}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Grid>
                  {this.state.australian_resident === "no" ? (
                    <>
                      <Grid item md={6} xs={12}>
                        <FormLabel component="legend">
                          If no,do you have a current work visa?
                        </FormLabel>
                        <RadioGroup
                          aria-label="Vehicle owner"
                          name="current_work_visa"
                          value={this.state.current_work_visa}
                          onChange={this.handleChange}
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Type"
                          margin="dense"
                          name="current_work_visa_type"
                          value={this.state.current_work_visa_type}
                          onChange={this.handleChange}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="current_work_visa_expiry"
                          label="Date of expiry"
                          type="date"
                          id="current_work_visa_expiry"
                          onChange={this.handleChange}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </>
                  ) : null}
                  <Grid item md={12} xs={12}></Grid>
                  <div md={12} xs={12} className={classes.section2}>
                    <Card className={classes.width100} variant="outlined">
                      <CardContent>
                        <Typography
                          className="padding-12px"
                          margin="dense"
                          align="center"
                          display="inline"
                        >
                          Education{" "}
                          <IconButton
                            className={classes.floatingButton}
                            color="primary"
                            onClick={this.addFields}
                          >
                            <AddCircleIcon style={{ fontSize: 20 }} />
                          </IconButton>
                        </Typography>
                        <Divider />
                        <div className="education-title">
                          <div className="mr-10px">
                            Highest Education achieved:
                          </div>

                          <FormControl component="fieldset">
                            <RadioGroup
                              row
                              name="highest_education"
                              value={this.state.highest_education}
                              defaultValue="certificate"
                              onChange={this.handleChange}
                            >
                              <FormControlLabel
                                value="certificate"
                                control={<Radio color="primary" />}
                                label="Certificate"
                              />
                              <FormControlLabel
                                value="year12"
                                control={<Radio color="primary" />}
                                label="Year 12"
                              />
                              <FormControlLabel
                                value="tafe"
                                control={<Radio color="primary" />}
                                label="TAFE"
                              />
                              <FormControlLabel
                                value="University"
                                control={<Radio color="primary" />}
                                label="University"
                              />
                              <FormControlLabel
                                value="other"
                                control={<Radio color="primary" />}
                                label="Other"
                              />
                            </RadioGroup>
                          </FormControl>
                        </div>
                        <FieldInputs
                          removeFields={this.removeFields}
                          className={classes.section2}
                          addField={this.addFields}
                          setFieldName={this.setFieldNameFun}
                          fields={this.state.fields}
                        />
                      </CardContent>
                    </Card>
                  </div>
                  <div md={12} xs={12} className={classes.section2}>
                    <Card className={classes.width100} variant="outlined">
                      <CardContent>
                        <Typography
                          className="padding-12px"
                          margin="dense"
                          align="center"
                          display="inline"
                        >
                          Employment History
                        </Typography>
                        <Divider />
                        <FieldInputsEmployement
                          className={classes.padding15px}
                          addField={this.addFieldsEmployement}
                          setFieldName={this.setFieldNameEmployementFun}
                          fields={this.state.fieldsEmployement}
                        />
                      </CardContent>
                    </Card>
                  </div>
                  <div md={12} xs={12} className={classes.section2}>
                    <Card className={classes.width100} variant="outlined">
                      <CardContent>
                        <Typography
                          className="padding-12px"
                          margin="dense"
                          align="center"
                          display="inline"
                        >
                          Previous work status{" "}
                          <IconButton
                            className={classes.floatingButton}
                            color="primary"
                            aria-label="Add Goal"
                            onClick={this.addFieldsPreviousEmployement}
                          >
                            <AddCircleIcon style={{ fontSize: 20 }} />
                          </IconButton>
                        </Typography>
                        <Divider />
                        <FieldsPreviousEmployement
                          removeFieldsEmployementHistory={
                            this.removeFieldsEmployementHistory
                          }
                          addField={this.addFieldsPreviousEmployement}
                          setFieldName={this.setFieldNamePreviousEmployementFun}
                          fields={this.state.fieldsPreviousEmployement}
                        />
                      </CardContent>
                    </Card>
                  </div>
                  <Card
                    className={(classes.width100, classes.section6)}
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography
                        className="padding-12px"
                        margin="dense"
                        align="center"
                        display="inline"
                      >
                        Please rate yourself on following skills and
                        characteristics.
                      </Typography>
                      <Divider />
                      <br />
                      <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                          <Typography
                            id="discrete-slider-small-steps"
                            gutterBottom
                          >
                            Communication
                          </Typography>
                          <Slider
                            name="communication"
                            value={
                              typeof this.state.communication === "number"
                                ? this.state.communication
                                : 0
                            }
                            marks={marks}
                            valueLabelDisplay="auto"
                            onChange={this.handleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </Grid>

                        <Grid item md={12} xs={12}>
                          <Typography
                            id="discrete-slider-small-steps"
                            gutterBottom
                          >
                            Self confidence
                          </Typography>
                          <Slider
                            name="self_confidence"
                            value={
                              typeof this.state.self_confidence === "number"
                                ? this.state.self_confidence
                                : 0
                            }
                            marks={marks}
                            valueLabelDisplay="auto"
                            onChange={this.handleSliderChangeSelfConfidence}
                            aria-labelledby="input-slider"
                          />
                        </Grid>
                        <Grid item md={12} xs={12}>
                          <Typography
                            id="discrete-slider-small-steps"
                            gutterBottom
                          >
                            Team work
                          </Typography>
                          <Slider
                            name="team_work"
                            value={
                              typeof this.state.team_work === "number"
                                ? this.state.team_work
                                : 0
                            }
                            marks={marks}
                            valueLabelDisplay="auto"
                            onChange={this.handleSliderChangeTeamWork}
                            aria-labelledby="input-slider"
                          />
                        </Grid>
                        <Grid item md={12} xs={12}>
                          <Typography
                            id="discrete-slider-small-steps"
                            gutterBottom
                          >
                            Leadership
                          </Typography>
                          <Slider
                            name="leadership"
                            value={
                              typeof this.state.leadership === "number"
                                ? this.state.leadership
                                : 0
                            }
                            marks={marks}
                            valueLabelDisplay="auto"
                            onChange={this.handleSliderChangeLeaderShip}
                            aria-labelledby="input-slider"
                          />
                        </Grid>
                        <Grid item md={12} xs={12}>
                          <Typography
                            id="discrete-slider-small-steps"
                            gutterBottom
                          >
                            Self motivation
                          </Typography>
                          <Slider
                            name="self_motivation"
                            value={
                              typeof this.state.self_motivation === "number"
                                ? this.state.self_motivation
                                : 0
                            }
                            marks={marks}
                            valueLabelDisplay="auto"
                            onChange={this.handleSliderChangeSelfMotivation}
                            aria-labelledby="input-slider"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                  <Card
                    className={(classes.width100, classes.section2)}
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography
                        className="padding-12px"
                        margin="dense"
                        align="center"
                        display="inline"
                      >
                        Personal
                      </Typography>
                      <Divider />

                      <Grid container spacing={3}>
                        <Grid item md={8} xs={12}>
                          <TextField
                            fullWidth
                            label="What are you looking to achieve from this role?"
                            margin="dense"
                            name="looking_to_achieve_role"
                            value={this.state.looking_to_achieve_role}
                            onChange={this.handleChange}
                          />
                        </Grid>
                        <Grid item md={8} xs={12}>
                          <TextField
                            fullWidth
                            label="What goals/ambitions do you aim to achieve from your career?"
                            margin="dense"
                            name="goals_achieve_from_career"
                            value={this.state.goals_achieve_from_career}
                            onChange={this.handleChange}
                          />
                        </Grid>
                        <Grid item md={8} xs={12}>
                          <TextField
                            fullWidth
                            label="What are your personal interest and hobbies?"
                            margin="dense"
                            name="hobbies"
                            value={this.state.hobbies}
                            onChange={this.handleChange}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                  <div md={12} xs={12} className={classes.section2}>
                    <Card className={classes.width100} variant="outlined">
                      <CardContent>
                        <Typography
                          className="padding-12px"
                          margin="dense"
                          align="center"
                          display="inline"
                        >
                          What you are looking for in a job?(Number in order of
                          importance - (1) being highest priority)
                        </Typography>
                        <Divider />
                        <div className="margin-top-15px">
                          <DndProvider backend={HTML5Backend}>
                            <Example setCardObj={this.setCard} />
                          </DndProvider>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div md={12} xs={12} className={classes.section2}>
                    <Card className={classes.width100} variant="outlined">
                      <CardContent>
                        <Grid
                          container
                          spacing={3}
                          className="mt-3"
                          className="margin-top-15px"
                        >
                          <Grid item md={6} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.declaration}
                                  onChange={this.handleChangeDeclaration}
                                  name="checkedB"
                                  color="primary"
                                />
                              }
                              label="I certify that information given on this form is correct"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="declaration_date"
                              label="Date"
                              type="date"
                              defaultValue={this.state.declaration_date}
                              onChange={this.handleChange}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </div>
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
              !this.state.lastName ||
              !this.state.declaration
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
