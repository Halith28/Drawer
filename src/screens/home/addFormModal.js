import React from "react";
import {
  Button,
  Grid,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

const categoryData = [
  {
    name: "Assessment",
  },
  {
    name: "Report",
  },
  {
    name: "Appointment",
  },
];

const useStyles = makeStyles((theme) => ({
  selectedTab: {
    backgroundColor: theme.palette.primary.main + " !important",
    color: "#fff !important",
  },
  selecteTab: {
    padding: "10px",
    margin: "10px 16px 0px 0px",
    borderRadius: "6px !important",
    border: "1px solid rgba(0, 0, 0, 0.12) !important",
  },
  lable: {
    margin: "auto 0",
  },
  footer: {
    padding: "16px 24px",
  },
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(null);
  const onChangeSwitch = (e, newAlignment) => {
    setState(newAlignment);
  };
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={props.open}
        onClose={() => props.modalClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Form</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid item xs={12} style={{ margin: "16px 0px" }}>
            <TextField
              fullWidth
              label="Form Name"
              id="outlined-size-small"
              variant="outlined"
              size="medium"
            />
          </Grid>
          <Grid item xs={12} style={{ margin: "16px 0px" }}>
            <Typography className={classes.lable}>{"Form Type"}</Typography>
            <ToggleButtonGroup
              size={"small"}
              value={state}
              exclusive
              onChange={onChangeSwitch}
              aria-label="text alignment"
            >
              {categoryData.map((name, index) => {
                return (
                  <ToggleButton
                    key={index}
                    value={name.name}
                    aria-label="left"
                    classes={{
                      root: classes.selecteTab,
                      selected: classes.selectedTab,
                    }}
                  >
                    <Typography component={"p"} variant={"caption"}>
                      {name.name}
                    </Typography>
                  </ToggleButton>
                );
              })}
              {/* <ToggleButton value={"no"} aria-label="centered" classes={{ root: classes.selecteTab, selected: classes.selectedTab }}>
                <Typography component={"p"} variant={"caption"}>Report</Typography>
              </ToggleButton> */}
            </ToggleButtonGroup>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.footer}>
          <Button
            onClick={() => props.modalClose()}
            variant="outlined"
            color="primary"
          >
            Add Form
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
