import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// react plugin for creating charts
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const userDetails = useSelector((state) => state.user.user);
  const [user] = useState(userDetails);
  console.log(user);
  const classes = useStyles();
  // TODO : Save THis and implement to new uers edit route
  return (
    <div>
      <GridContainer>
        {user.profileComplete === "false" ? (
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Hi {user.username} !</p>
                <h3 className={classes.cardTitle}>
                  Please complete your user profile!
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        ) : user.profileComplete === "true" ? (
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Hi {user.username} !</p>
                <h3 className={classes.cardTitle}>
                  Your Application Is Being Processed!
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        ) : null}
      </GridContainer>
    </div>
  );
}
