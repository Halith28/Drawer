import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "100%",
      padding: theme.spacing(2),
      cursor: "pointer",
    },
  },
}));

export default function List(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper onClick={(e) => props.onClickAction(e, props)}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid>
            <Typography variant={"h6"} component={"p"}>
              {props.form_name}
            </Typography>
            <Typography variant={"body1"} color={"textSecondary"}>
              Created by {props.created_by} on{" "}
              {moment(props.created_at).format("ll")}
            </Typography>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => props.onClickAction(e, props)}
            >
              {props.category}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
