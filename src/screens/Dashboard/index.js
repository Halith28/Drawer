import { Divider, Grid, Typography, withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { withRouter } from "react-router-dom";
import ApplicationBar from "../../components/appBar";
import DashboardLayout from "../DashboardLayout";
import Report from "./report";
import Screenshots from "./screenshots";
import Table from "./table";
import Todolist from "./todolist";

const styles = (theme) => ({
  root: {
    flex: 1,
  },
  gridArea: {
    display: "grid",
    gridGap: "1px",
    height: "100%",
    gridTemplateAreas: `'menu mainArea'`,
    gridTemplateColumns: "250px 1fr",
  },
  iteam1: {
    gridArea: "menu",
    height: "100%",
    backgroundColor: "#382f9c",
    padding: theme.spacing(2),
  },
  iteam2: {
    gridArea: "mainArea",
    // padding: theme.spacing(2),
    height: "100%",
    // overflow: "auto",
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

const data = [
  {
    form_name: "Revamp Instagram App",
    status: "Today",
    created_at: new Date(),
  },
  {
    form_name: "ProtoTyping",
    status: "Upcoming",
    created_at: "01/12/2021",
  },
  {
    form_name: "Collect Reference for new project",
    status: "Upcoming",
    created_at: "01/13/2021",
  },
];

class Dashboard extends React.Component {
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
        <Grid container className={classes.gridArea}>
          {/* <Grid item className={classes.iteam1}>
            <DashboardLayout />
          </Grid> */}
          {window.innerWidth > 1365 ? <DashboardLayout /> : <Table />}
          <Grid item className={classes.iteam2}>
            <ApplicationBar buttonName={"+ ADD PROJECT"} />
            <Grid container>
              <Grid item lg={8} md={12}>
                <Grid container>
                  <Grid item lg={12} style={{ height: "290px" }}>
                    <Table />
                  </Grid>
                  <Divider />
                  <Grid item lg={12} style={{ height: "300px" }}>
                    <AppBar position="static" color="defualt" elevation={0}>
                      <Toolbar variant="dense">
                        <Typography variant="h6" className={classes.title}>
                          To-Do lists
                        </Typography>
                      </Toolbar>
                    </AppBar>
                    {data.map((list, index) => {
                      return (
                        <Todolist
                          key={index}
                          {...list}
                          onClickAction={this.getFromId}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4}>
                <Grid container>
                  <Grid item lg={12} style={{ height: "290px" }}>
                    <Report />
                  </Grid>
                  <Grid item lg={12} style={{ height: "300px" }}>
                    <Screenshots />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Dashboard));
