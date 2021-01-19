import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Button, IconButton} from '@material-ui/core';
import PropTypes from "prop-types";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "1px solid #ebebeb",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  layoutLeftIcon: {
    width: "18px",
    height: "14px",
    border: "2px solid",
    borderRadius: "2px",
    borderLeftWidth: "6px"
  },
  layoutRightIcon: {
    width: "18px",
    height: "14px",
    border: "2px solid",
    borderRadius: "2px",
    borderRightWidth: "6px"
  },
  sizeRiplle:{
      padding: "4px",
      borderRadius: 2
  },
  active: {
      backgroundColor: "#3f51b542"
  }
}));

const TopBar = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const goBack = () => {
    history.goBack();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"inherit"} elevation={0}>
        <Toolbar variant="dense">
          {props.goBack && 
          <IconButton color={"default"} aria-label="upload picture" component="span" onClick={()=>goBack()}>
            <ArrowBackRoundedIcon />
          </IconButton>
          }
          <Typography variant="h6" color="inherit">
            {props.title}
          </Typography>
          <div className={classes.grow} />
          <div>
            {props.buttonName && 
              <Button color="primary" onClick={()=> props.onClickButton()}>{props.buttonName}</Button>
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
    title: PropTypes.string,
    buttonName: PropTypes.string,
    onClickButton: PropTypes.func,
    goBack: PropTypes.bool,
}

TopBar.defaultProps = {
    goBack: false,
    buttonName: null,
    onClickButton: () => {},
}
export default TopBar;