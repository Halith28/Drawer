import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
  Button,
  Fab,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddIcon from "@material-ui/icons/Add";

const componentList = [
  { title: "Choose an option", id: 1 },
  { title: "Choose a range", id: 2 },
];
const defaultProps = {
  options: componentList,
  getOptionLabel: (option) => option.title,
};

const useStyles = makeStyles((theme) => ({
  formFields: {
    paddingBottom: "20px",
    border: "1px solid rgb(224, 224, 224)",
    background: "rgb(245, 245, 245)",
  },
  inputFiled: {
    marginBottom: "16px",
  },
  selectComponentList: {
    marginTop: 0,
    color: "red",
  },
  addFloatingButton: {
    position: "absolute",
    right: "26px",
    bottom: "30px",
  },
}));

export default function Form(props) {
  const classes = useStyles();

  return (
    <Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ padding: "10px 20px", background: "#fff" }}
      >
        <Grid>
          <Typography
            variant={"h6"}
            style={{ fontSize: "17px" }}
            component={"p"}
          >
            {"Head Pain"}
          </Typography>
        </Grid>
        <Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                //  onChange={handleChange}
                name="checkedA"
              />
            }
            label="Skip"
          />
        </Grid>
      </Grid>
      <Divider />

      <Grid className={classes.formFields}>
        <Grid style={{ padding: "20px", backgroundColor: "#fff" }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ marginBottom: "16px" }}
          >
            <Grid>
              <Typography variant={"subtitle1"} component={"p"}>
                {"Smart Skip"}
              </Typography>
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    //  onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Required"
              />
            </Grid>
          </Grid>
          <Grid>
            <TextField
              fullWidth
              label="Question / title"
              id="outlined-size-small"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Divider />

        {[1, 2, 3].map((val, index) => {
          return (
            <Grid key={index} style={{ padding: "20px 20px 0px 20px" }}>
              <Paper
                style={{
                  padding: "8px 20px 3px 20px",
                  border: "1px solid #E0E0E0",
                }}
                elevation={0}
              >
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  style={{ marginBottom: "20px" }}
                >
                  <Grid item style={{ width: 300 }}>
                    <Autocomplete
                      {...defaultProps}
                      id="clear-on-escape"
                      clearOnEscape
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.selectComponentList}
                          size="small"
                          placeholder={"Select Filed Type"}
                          fullWidth
                          margin={"dense"}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          //  onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Required"
                    />
                    <Button color="primary">{"delete"} </Button>
                  </Grid>
                </Grid>
                <Grid item className={classes.inputFiled}>
                  <TextField
                    fullWidth
                    label="Question / title"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item className={classes.inputFiled}>
                  <TextField
                    fullWidth
                    label="Options"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Paper>
            </Grid>
          );
        })}

        {/* add floating button */}
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addFloatingButton}
        >
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  );
}
