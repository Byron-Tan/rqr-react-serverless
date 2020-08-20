import React from "react";
import TextField from "@material-ui/core/TextField";

import RemoveCircle from "@material-ui/icons/RemoveCircle";
import IconButton from "@material-ui/core/IconButton";

import { Grid } from "@material-ui/core";

const CatInputs = (props) => {
  const removeFieldsEmployementHistory = (event, index) => {
    event.preventDefault();
    props.removeFieldsEmployementHistory(index);
  };

  const changeHandlerFieldName = (event, name, inde) => {
    props.setFieldName(event.target.value, name, inde);
  };

  return props.fields.map((val, idx) => {
    let startDateId = `startDate-${idx}`,
      endDateId = `endDate-${idx}`,
      employer = `employer-${idx}`,
      position_of_contractor = `position_of_contractor-${idx}`,
      reason_for_leaving = `reason_for_leaving-${idx}`,
      salary = `salary-${idx}`;
    return (
      // <FuseAnimate animation="transition.expandIn" delay={300}>
      <div key={idx}>
        <br />
        <Grid
          container
          spacing={3}
          className="mt-3"
          className="margin-top-15px"
        >
          <Grid item md={2} xs={12}>
            <TextField
              required
              fullWidth
              name={startDateId}
              data-id={idx}
              label="Date"
              type="date"
              id={startDateId}
              value={val.date}
              onChange={(e) => {
                changeHandlerFieldName(e, "startDate", idx);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <TextField
              required
              fullWidth
              name={endDateId}
              data-id={idx}
              label="Date"
              type="date"
              id={endDateId}
              value={val.date}
              onChange={(e) => {
                changeHandlerFieldName(e, "endDate", idx);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              className="mb-24"
              label="Employer"
              id={employer}
              value={val.employer}
              onChange={(e) => {
                changeHandlerFieldName(e, "employer", idx);
              }}
              name={employer}
              data-id={idx}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              className="mb-24"
              label="Salary"
              id={salary}
              value={val.salary}
              onChange={(e) => {
                changeHandlerFieldName(e, "salary", idx);
              }}
              name={salary}
              data-id={idx}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              className="mb-24"
              label="Job Title"
              id={position_of_contractor}
              value={val.position_of_contractor}
              onChange={(e) => {
                changeHandlerFieldName(e, "position_of_contractor", idx);
              }}
              name={position_of_contractor}
              data-id={idx}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              className="mb-24"
              label="Reason for leaving"
              id={reason_for_leaving}
              value={val.reason_for_leaving}
              onChange={(e) => {
                changeHandlerFieldName(e, "reason_for_leaving", idx);
              }}
              name={reason_for_leaving}
              data-id={idx}
            />
          </Grid>
          {idx !== 0 && (
            <Grid className="p-0px" item md={1} xs={3}>
              <IconButton
                color="primary"
                aria-label="Add Goal"
                onClick={(e) => {
                  removeFieldsEmployementHistory(e, idx);
                }}
              >
                <RemoveCircle style={{ fontSize: 20 }} />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </div>
      // </FuseAnimate >
    );
  });
};
export default CatInputs;
