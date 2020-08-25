import React from "react";
import TextField from "@material-ui/core/TextField";

import { Grid } from "@material-ui/core";

const CatInputs = (props) => {
  const changeHandlerFieldName = (event, name, inde) => {
    props.setFieldName(event.target.value, name, inde);
  };

  return props.fields.map((val, idx) => {
    let startDateId = `startDate-${idx}`,
      endDateId = `endDate-${idx}`,
      employer = `employer-${idx}`,
      position_of_contractor = `position_of_contractor-${idx}`,
      reason_for_leaving = `reason_for_leaving-${idx}`,
      notice_required = `notice_required-${idx}`,
      salary = `salary-${idx}`;
    return (
      // <FuseAnimate animation="transition.expandIn" delay={300}>
      <Grid container spacing={3} className="mt-3" className="margin-top-15px">
        <Grid item md={4} xs={12}>
          <TextField
            required
            fullWidth
            name={startDateId}
            data-id={idx}
            label="Start Date"
            type="date"
            id={startDateId}
            onChange={(e) => {
              changeHandlerFieldName(e, "startDate", idx);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            required
            fullWidth
            name={endDateId}
            data-id={idx}
            label="End Date"
            type="date"
            id={endDateId}
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
            onChange={(e) => {
              changeHandlerFieldName(e, "reason_for_leaving", idx);
            }}
            name={reason_for_leaving}
            data-id={idx}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            fullWidth
            className="mb-24"
            label="Notice Required"
            id={notice_required}
            onChange={(e) => {
              changeHandlerFieldName(e, "notice_required", idx);
            }}
            name={notice_required}
            data-id={idx}
          />
        </Grid>
      </Grid>
      // </FuseAnimate >
    );
  });
};
export default CatInputs;
