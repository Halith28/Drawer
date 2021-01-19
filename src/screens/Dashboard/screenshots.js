import { Divider, Paper } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
  },
  button :{
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

const Screenshots = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="defualt" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title} style={{fontWeight:"1000"}}>
            Screenshots
          </Typography>
        </Toolbar>
      </AppBar>
      {[1, 2, 3].map((val, index) => {
        return (
          <div key={index} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" variant="square">
                  <ImageIcon />
                </Avatar>
              }
              action={<Button variant="contained" className={classes.button}>View</Button>}
              title="Shot_1_attach_1.png"
            />
            <Divider />
          </div>
        );
      })}
      <Paper style={{ margin: "15px" }}>
        <Button variant="outlined" color="primary" fullWidth>
          VIEW ALL
        </Button>
      </Paper>
    </div>
  );
};

export default Screenshots;
