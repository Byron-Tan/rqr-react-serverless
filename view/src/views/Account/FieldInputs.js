import React from "react";
// import DialogContent from '@material-ui/core/DialogContent';
import TextField from "@material-ui/core/TextField";
// import FuseAnimate from '@fuse/core/FuseAnimate';
// import Icon from '@material-ui/core/Icon';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core/styles";
// import withStyles from "@material-ui/core/styles/withStyles";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import IconButton from "@material-ui/core/IconButton";

import { Grid } from "@material-ui/core";

const CatInputs = (props) => {
  const styles = makeStyles({
    addButton: {
      position: "absolute",
      right: 12,
      bottom: 12,
      zIndex: 99,
    },
    marginTop15px: {
      marginTop: "15px",
    },
  });
  const classes = styles();

  const removeFields = (event, index) => {
    event.preventDefault();
    console.log(index);
    props.removeFields(index);
  };

  const changeHandlerFieldName = (event, field_name, inde) => {
    props.setFieldName(event.target.value, field_name, inde);
  };

  return props.fields.map((val, idx) => {
    let dateId = `date-${idx}`,
      collegeNameId = `college-Name-${idx}`,
      qualificationId = `qualification-${idx}`;
    return (
      <div key={idx}>
        <Grid
          container
          spacing={3}
          className="margin-top-15px align-item-center"
        >
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              className="mb-24"
              label="College Name"
              id={collegeNameId}
              value={val.college_name}
              onChange={(e) => {
                changeHandlerFieldName(e, "college_name", idx);
              }}
              name={collegeNameId}
              data-id={idx}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              className="mb-24"
              label="Qualification gained"
              id={qualificationId}
              value={val.qualification_gained}
              onChange={(e) => {
                changeHandlerFieldName(e, "qualification_gained", idx);
              }}
              name={qualificationId}
              data-id={idx}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              required
              fullWidth
              name={dateId}
              data-id={idx}
              label="Date"
              type="date"
              id={dateId}
              value={val.date}
              onChange={(e) => {
                changeHandlerFieldName(e, "date", idx);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          {idx !== 0 && (
            <Grid className="p-0px" item md={1} xs={3}>
              <IconButton
                className={classes.floatingButton}
                color="primary"
                aria-label="Add Goal"
                onClick={(e) => {
                  removeFields(e, idx);
                }}
              >
                <RemoveCircle style={{ fontSize: 20 }} />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </div>
    );
  });
};

export default CatInputs;
