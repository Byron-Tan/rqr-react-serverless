import instance from "api/instance";
import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
var _ = require("lodash");

const useStyles = makeStyles(styles);
const createData = (uuid, name, dob, car, criminal_record) => {
  return { uuid, name, dob, car, criminal_record };
};

export default function Applicants() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [row, setRow] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState({});
  const handleOpen = (uuid) => {
    console.log(uuid);
  };

  const rowFunction = (data) => {
    let row = [];
    _.forEach(data, function (user) {
      console.log(
        "hello world",
        user.firstName,
        user.lastName,
        user.dateOfBirth,
        user.vehicleOwner,
        user.criminal_record
      );
    });
  };

  useEffect(() => {
    const authToken = localStorage.getItem("AuthToken");
    instance.defaults.headers.common = {
      Authorization: authToken,
    };
    instance
      .get("/allusers")
      .then((res) => {
        setData(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setLoad(true);
        alert("Your Session Has Timed Out Please Relog To Generate New Token");
        console.log(err);
      });
  }, []);

  if (!load) {
    rowFunction(data);
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CircularProgress size={150} className={classes.uiProgess} />
      </main>
    );
  } else {
    return (
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          <TableHead className={classes["primary" + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
              >
                Name
              </TableCell>
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
              >
                Date Of Birth
              </TableCell>
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
              >
                Car
              </TableCell>
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
              >
                Criminal Record
              </TableCell>
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </div>
    );
  }
}
