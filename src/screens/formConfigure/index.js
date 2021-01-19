import React from "react";
import AppBar from "../../components/topBar";
import { withRouter } from "react-router-dom";
import { withStyles, Grid, Typography, Button } from "@material-ui/core";
import From from "./formGenerator";
const styles = (theme) => ({
  root: {
    backgroundColor: "#ebebeb",
    flex: 1,
  },
  gridArea: {
    display: "grid",
    gridGap: "1px",
    height: "calc(100vh - 49px)",
    // },
    // gridContainerFull: {
    gridTemplateAreas: `'menu mainArea'`,
    gridTemplateColumns: "300px 1fr",
  },
  iteam1: {
    gridArea: "menu",
    height: "calc(100vh - 49px)",
    backgroundColor: "#fff",
    padding: theme.spacing(2),
  },
  iteam2: {
    gridArea: "mainArea",
    padding: theme.spacing(2),
    height: "calc(100vh - 49px)",
    overflow: "auto",
  },
  mainArea: {
    width: "calc(100vw - 300px)",
    // width: "1000px",
    padding: theme.spacing(2),
  },
  sidebarArea: {
    width: "300px",
    height: "calc(100vh - 49px)",
    backgroundColor: "#fff",
    padding: theme.spacing(2),
  },
});

class FormConfigure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "You are in profile page.",
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar title={"Full Body Assessment"} goBack />
        <Grid container className={classes.gridArea}>
          <Grid item className={classes.iteam1}>
            sidebar
          </Grid>
          <Grid item className={classes.iteam2}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ marginBottom: "20px" }}
            >
              <Grid>
                <Typography variant={"h6"} component={"p"}>
                  {"Form Builder"}
                </Typography>
              </Grid>
              <Grid>
                <Button color="primary">{"Save"}</Button>
              </Grid>
            </Grid>
            <From />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(FormConfigure));
