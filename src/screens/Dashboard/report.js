import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, Paper } from "@material-ui/core";
import ReportIcon1 from "../../components/line-chart.svg";
import ReportIcon2 from "../../components/timer.svg";
import pdfIcon from "../../components/pdf.png";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  table: {
    minWidth: 450,
  },
}));

const Report = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title} style={{fontWeight:"1000"}}>
            Report
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        style={{
          borderRadius: "15px",
          backgroundColor: "#382f9c",
          margin: "15px 15px 5px 15px",
          color: "white",
        }}
      >
        <CardHeader
          avatar={<Avatar variant="square" style={{backgroundColor:"#534ba9", height:"60px" ,width:"60px"}}><img src={ReportIcon1} alt="React Logo" /></Avatar>}
          action={
            <Button style={{ backgroundColor: "#39c084", color: "white" }}>
              <ArrowDropUpIcon />
              17%
            </Button>
          }
          title={
            <div >
              {"Weekly Activity"}
              <h4>52%</h4>
            </div>
          }
        />
      </Paper>
      <Paper
        style={{
          borderRadius: "15px",
          backgroundColor: "#f4f4f4 ",
          margin: "15px 15px 5px 15px",
        }}
      >
        <CardHeader
          avatar={<Avatar variant="square" style={{backgroundColor:"white", height:"60px" ,width:"60px"}}><img src={ReportIcon2} alt="React Logo" /></Avatar>}
          action={
            <Button style={{ backgroundColor: "#eecfcf", color: "red" }}>
              <ArrowDropDownIcon />
              17%
            </Button>
          }
          title={
            <div>
              {"Worked this week"}
              <h4>11:56:33</h4>
            </div>
          }
        />
      </Paper>
      <Paper style={{ margin: "15px" }}>
        <Button variant="outlined" color="primary" fullWidth>
          <img src={pdfIcon} alt="pdf" /><span style={{marginLeft:"10px"}}>Export as PDF</span>
        </Button>
      </Paper>
    </div>
  );
};

export default Report;
