import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    marginTop: 100,
    marginLeft: 50,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <main className={classes.content}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            From RQR
          </Typography>
          <Typography variant="h5" component="h2">
            Thank{bull}You!
          </Typography>
          <Typography
            className={classes.pos}
            color="textSecondary"
          ></Typography>
          <Typography variant="body2" component="p">
            We'll be in touch if you've been short-listed!
            <br />
            <br />
            {"Good Luck!"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" hred="www.rqr.com.au">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </main>
  );
}
