import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Popover, List, ListItem, ListItemIcon, Checkbox, ListItemText } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

const filterTypes = [
    {
        name: "Assessment"
    },
    {
        name: "Report"
    },
    {
        name: "Appointment"
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1),
        // '&:hover': {
        //   backgroundColor: fade(theme.palette.common.white, 0.25),
        // },
        margin: theme.spacing(1),
        width: '300px',
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: "100%"
      },
      inputInput: {
        padding: theme.spacing(1.5, 1, 1.5, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // backgroundColor: "#fff",
        // [theme.breakpoints.up('md')]: {
        //   width: '20ch',
        // },
      },
      filter:{
        margin: theme.spacing(1),
      }
}));

export default function Search() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon color={"action"} />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className={classes.filter}>
        <Button color="secondary" onClick={handleClick} >{"All Types "}
          <KeyboardArrowDownRoundedIcon />
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
        <List className={classes.root}>
            {filterTypes.map((value, index) => {
                const labelId = `checkbox-list-label-${value.name}`;
                return (
                <ListItem key={index} role={undefined} dense button onClick={handleToggle(value.name)}>
                    <ListItemIcon style={{minWidth: "36px"}}>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(value.name) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${value.name}`} />
                </ListItem>
                );
            })}
        </List>
      </Popover>
      </div>
    </Grid>
  );
}
