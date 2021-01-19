import { Button, Grid, TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "1px solid #ebebeb",
  },
  grow: {
    flexGrow: 1,
  },
  layoutLeftIcon: {
    width: "18px",
    height: "14px",
    border: "2px solid",
    borderRadius: "2px",
    borderLeftWidth: "6px",
  },
  layoutRightIcon: {
    width: "18px",
    height: "14px",
    border: "2px solid",
    borderRadius: "2px",
    borderRightWidth: "6px",
  },
  sizeRiplle: {
    padding: "4px",
    borderRadius: 2,
  },
  active: {
    backgroundColor: "#3f51b542",
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
  topbarButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#e9e8f4",
    color: "#382f9c",
    "&:active": {
      backgroundColor: "#382f9c",
      color: "white"
    },
    "&:focus": {
      backgroundColor: "#382f9c",
      color: "white"
    }
  },
}));

const componentList = [
  { title: "Design Task", id: 1 },
  { title: "Deployment Task", id: 2 },
];
const defaultProps = {
  options: componentList,
  getOptionLabel: (option) => option.title,
};

const drawerWidth = 240;

const ApplicationBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"inherit"} elevation={0}>
        <Toolbar variant="dense">
          <Grid item style={{ width: 200 }}>
            <Autocomplete
              {...defaultProps}
              id="clear-on-escape"
              clearOnEscape
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={classes.selectComponentList}
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
            {props.buttonName && (
              <Button variant="contained" className={classes.topbarButton} onClick={() => props.onClickButton()}>
                {props.buttonName}
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ApplicationBar.propTypes = {
  title: PropTypes.string,
  buttonName: PropTypes.string,
  onClickButton: PropTypes.func,
  goBack: PropTypes.bool,
};

ApplicationBar.defaultProps = {
  goBack: false,
  buttonName: null,
  onClickButton: () => {},
};
export default ApplicationBar;
