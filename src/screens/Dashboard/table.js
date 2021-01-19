import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  topBar : {
    paddingBottom: theme.spacing.unit * 1,
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
  title: {
    flexGrow: 1,
  },
  table: {
    minWidth: 450,
  },
  tableStyle : {
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
  }
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData((<div style={{display:"inline"}}>
    {/* <Grid item sm={2}>
    <Box bgcolor="primary.main" color="primary.contrastText" textAlign="center">
      1
    </Box>
  </Grid> */}
  <Avatar variant="square" style={{borderRadius:5}}> 1</Avatar><span>Landing</span>
  </div>), "May 21,2019", "1:10pm", "9:20pm", "8:10:37"),
  createData("Mobile App", "May 22,2019", "12:00pm", "8:00pm", "8:00:00"),
  createData("UI/UX", "May 23,2019", "1:10pm", "1:20pm", "0:10:37"),
  createData("Website/Apps", "May 24,2019", "1:11pm", "9:00pm", "7:49:37"),
  // createData("Eclair", 262, 16.0, 24, 6.0),
];

const MainTable = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={0} className={classes.topBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title} >
            <b>Timesheet</b>
          </Typography>
          <Button
            variant="contained"
            className={classes.topbarButton}
          >
            View Full Sheet
          </Button>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MoreHorizIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper} elevation={0} className={classes.tableStyle}>
        <Table
          className="table-striped table-bordered"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell><h6>Project</h6></TableCell>
              <TableCell><h6>Date</h6></TableCell>
              <TableCell><h6>Start Time</h6></TableCell>
              <TableCell><h6>Stop Time</h6></TableCell>
              <TableCell><h6>Duration</h6></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MainTable;
