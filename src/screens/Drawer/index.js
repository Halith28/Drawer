import { Button, Grid, TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";
import React from "react";
import Report from "../Dashboard/report";
import Screenshots from "../Dashboard/screenshots";
import Table from "../Dashboard/table";
import Todolist from "../Dashboard/todolist";
import DashboardLayout from "../DashboardLayout";

const drawerWidth = 240;

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

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginTop: 50,
  },
  grow: {
    flexGrow: 1,
  },
  todoTopBar : {
    paddingTop: "20px",
  },
  addFloatingButton: {
    position: "absolute",
    right: "26px",
    bottom: "30px",
  },
});

const componentList = [
  { title: "Design Task", id: 1 },
  { title: "Deployment Task", id: 2 },
];
const defaultProps = {
  options: componentList,
  getOptionLabel: (option) => option.title,
};

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color={"inherit"}
          elevation={1}
          className={classes.appBar}
        >
          <Toolbar variant="dense">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Grid item style={{ width: 200 }}>
              <Autocomplete
                {...defaultProps}
                id="clear-on-escape"
                clearOnEscape
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder={"Select Project"}
                    fullWidth
                    margin={"dense"}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <div className={classes.grow} />
            <div>
              <Button color="primary">+Add Project</Button>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden only={"lg"}>
            <Drawer
              //   container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <DashboardLayout />
            </Drawer>
          </Hidden>
          <Hidden mdDown>
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
            >
              <DashboardLayout />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
        <Grid container>
          <Grid item lg={8} md={12}>
            <Grid container>
              <Grid
                item
                lg={12}
                md={6}
                xs={12}
                style={{
                  height: "370px",
                  overflowY: "auto",
                  // padding: "10px"
                }}
                className="border border-light"
              >
                <Table />
              </Grid>
              <Divider />
              <Grid
                item
                lg={12}
                md={6}
                xs={12}
                style={{ height: "360px" }}
                className="border border-light"
              >
                <AppBar position="static" color="inherit" elevation={0} className={classes.todoTopBar}>
                  <Toolbar variant="dense">
                    <Typography variant="h6" style={{fontWeight:"1000"}}>To-Do lists</Typography>
                  </Toolbar>
                </AppBar>
                {data.map((list, index) => {
                  return <Todolist key={index} {...list} />;
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container>
              <Grid
                item
                lg={12}
                md={6}
                xs={10}
                style={{ height: "370px", padding: "20px" }}
                className="border border-light"
              >
                <Report />
              </Grid>
              <Grid
                item
                lg={12}
                md={6}
                xs={10}
                style={{ height: "360px" ,padding: "20px"}}
                className="border border-light"
              >
                <Screenshots />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
