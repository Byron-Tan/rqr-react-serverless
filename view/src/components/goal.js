import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardContent from "@material-ui/core/CardContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";

import instance from "../api/instance";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { authMiddleWare } from "../util/auth";

const styles = (theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  submitButton: {
    display: "block",
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: 14,
    right: 10,
  },
  floatingButton: {
    position: "fixed",
    bottom: 0,
    right: 0,
  },
  form: {
    width: "98%",
    marginLeft: 13,
    marginTop: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  root: {
    minWidth: 470,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  dialogeStyle: {
    maxWidth: "50%",
  },
  viewRoot: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class goal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: "",
      goalId: "",
      weekStarting: "",
      weeklyGoal: "",
      objective1: "",
      objective2: "",
      objective3: "",
      weeklyReward: "",
      errors: [],
      open: false,
      uiLoading: true,
      buttonType: "",
      viewOpen: false,
    };

    this.deleteGoalHandler = this.deleteGoalHandler.bind(this);
    this.handleEditClickOpen = this.handleEditClickOpen.bind(this);
    this.handleViewOpen = this.handleViewOpen.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  UNSAFE_componentWillMount = () => {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    instance.defaults.headers.common = {
      Authorization: `${authToken}`,
    };
    instance
      .get("/goals")
      .then((response) => {
        this.setState({
          goals: response.data,
          uiLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteGoalHandler(data) {
    authMiddleWare(this.props.history);
    const authToken = localStorage.getItem("AuthToken");
    instance.defaults.headers.common = { Authorization: `${authToken}` };
    let goalId = data.goal.goalId;
    instance
      .delete(`/goal/${goalId}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleEditClickOpen(data) {
    this.setState({
      objective1: data.goal.weeklyObjectives.objective1,
      objective2: data.goal.weeklyObjectives.objective2,
      objective3: data.goal.weeklyObjectives.objective3,
      weeklyReward: data.goal.weeklyReward,
      weekStarting: data.goal.weekStarting,
      goalId: data.goal.goalId,
      buttonType: "Edit",
      open: true,
    });
  }

  handleViewOpen(data) {
    this.setState({
      weekStarting: data.goal.weekStarting,
      weeklyGoal: data.goal.weeklyGoal,
      objective1: data.goal.weeklyObjectives.objective1,
      objective2: data.goal.weeklyObjectives.objective2,
      objective3: data.goal.weeklyObjectives.objective3,
      weeklyReward: data.goal.weeklyReward,
      viewOpen: true,
    });
  }

  render() {
    const DialogTitle = withStyles(styles)((props) => {
      const { children, classes, onClose, ...other } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      );
    });

    const DialogContent = withStyles((theme) => ({
      viewRoot: {
        padding: theme.spacing(2),
      },
    }))(MuiDialogContent);

    dayjs.extend(relativeTime);
    const { classes } = this.props;
    const { open, errors, viewOpen } = this.state;

    const handleClickOpen = () => {
      this.setState({
        goalId: "",
        weekStarting: "",
        objective1: "",
        objective2: "",
        objective3: "",
        weeklyReward: "",
        buttonType: "",
        open: true,
      });
    };

    const handleSubmit = (event) => {
      authMiddleWare(this.props.history);
      event.preventDefault();
      const userGoal = {
        weekStarting: this.state.weekStarting,
        weeklyObjectives: {
          objective1: this.state.objective1,
          objective2: this.state.objective2,
          objective3: this.state.objective3,
        },
        weeklyReward: this.state.weeklyReward,
      };
      let options = {};
      if (this.state.buttonType === "Edit") {
        options = {
          url: `/goal/${this.state.goalId}`,
          method: "put",
          data: userGoal,
        };
      } else {
        options = {
          url: "/goal",
          method: "post",
          data: userGoal,
        };
      }
      const authToken = localStorage.getItem("AuthToken");
      instance.defaults.headers.common = { Authorization: `${authToken}` };
      instance(options)
        .then(() => {
          this.setState({ open: false });
          window.location.reload();
        })
        .catch((error) => {
          this.setState({ open: true, errors: error.response.data });
          console.log(error);
        });
    };

    const handleViewClose = () => {
      this.setState({ viewOpen: false });
    };

    const handleClose = (event) => {
      this.setState({ open: false });
    };

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

          <IconButton
            className={classes.floatingButton}
            color="primary"
            aria-label="Add Goal"
            onClick={handleClickOpen}
          >
            <AddCircleIcon style={{ fontSize: 20 }} />
          </IconButton>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.weekStarting}>
                  {this.state.buttonType === "Edit"
                    ? "Edit Goal"
                    : "Create a new Goal"}
                </Typography>
                <Button
                  autoFocus
                  color="inherit"
                  onClick={handleSubmit}
                  className={classes.submitButton}
                >
                  {this.state.buttonType === "Edit" ? "Save" : "Submit"}
                </Button>
              </Toolbar>
            </AppBar>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="weeklyReward"
                    label="Todo Title"
                    name="weeklyReward"
                    autoComplete="weeklyReward"
                    helperText={errors.weeklyReward}
                    value={this.state.weeklyReward}
                    error={errors.title ? true : false}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="objective1"
                    label="Objective One"
                    name="objective1"
                    autoComplete="objective1"
                    multiline
                    helperText={errors.body}
                    error={errors.body ? true : false}
                    onChange={this.handleChange}
                    value={this.state.body}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="objective2"
                    label="Objective Two"
                    name="objective2"
                    autoComplete="objective2"
                    multiline
                    helperText={errors.body}
                    error={errors.body ? true : false}
                    onChange={this.handleChange}
                    value={this.state.body}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="objective3"
                    label="Objective Three"
                    name="objective3"
                    autoComplete="objective3"
                    multiline
                    helperText={errors.body}
                    error={errors.body ? true : false}
                    onChange={this.handleChange}
                    value={this.state.body}
                  />
                </Grid>
              </Grid>
            </form>
          </Dialog>

          <Grid container spacing={2}>
            {this.state.goals.map((goal) => (
              <Grid item xs={12} sm={6} key={goal.goalId}>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {goal.weeklyReward}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {dayjs(goal.createdAt).fromNow()}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {`${goal.weekStarting.substring(0, 65)}`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.handleViewOpen({ goal })}
                    >
                      {" "}
                      View{" "}
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.handleEditClickOpen({ goal })}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.deleteGoalHandler({ goal })}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Dialog
            onClose={handleViewClose}
            aria-labelledby="customized-dialog-title"
            open={viewOpen}
            fullWidth
            classes={{ paperFullWidth: classes.dialogeStyle }}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleViewClose}>
              {this.state.weeklyReward}
              <Typography variant="body2" component="p">
                {this.state.weekStarting}
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              Weekly Goal:
              <TextField
                fullWidth
                id="weeklyGoal"
                name="weeklyGoal"
                multiline
                readOnly
                value={this.state.weeklyGoal}
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <Typography variant="body2" component="p">
                Objective One:
              </Typography>
              <TextField
                fullWidth
                id="objective1"
                name="objective1"
                multiline
                readOnly
                rows={1}
                rowsMax={25}
                value={this.state.objective1}
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <Typography variant="body2" component="p">
                Objective Two:
              </Typography>
              <TextField
                fullWidth
                id="objective2"
                name="objective2"
                multiline
                readOnly
                rows={1}
                rowsMax={25}
                value={this.state.objective2}
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <Typography variant="body2" component="p">
                Objective Three:
              </Typography>
              <TextField
                fullWidth
                id="objective3"
                name="objective3"
                multiline
                readOnly
                rows={1}
                rowsMax={25}
                value={this.state.objective3}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </DialogContent>
          </Dialog>
        </main>
      );
    }
  }
}
export default withStyles(styles)(goal);
