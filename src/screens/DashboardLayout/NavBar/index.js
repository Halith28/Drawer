import { Box, Divider, Drawer, List, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon,
  HelpCircle as Help,
  Folder as ProjectIcon,
} from "react-feather";
import { useLocation } from "react-router-dom";
import ReactLogo from "../cells.svg";
import NavItem from "./NavItem";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';

// const NavBreak = () => {
//   return <img src={Break} alt="allah" height="10px" width="30px" style={{color:"white"}}></img>
// }

const items = [
  {
    href: "/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/drawer",
    icon: UsersIcon,
    title: "Activity",
  },
  {
    href: "/drawer2",
    icon: ShoppingBagIcon,
    title: "Timesheet",
  },
  // {
  //   href: "/none",
  //   icon: RemoveIcon,
  //   title: "",
  // },
  {
    href: "/app/account",
    icon: EventAvailableOutlinedIcon,
    title: "To-Do",
  },
  {
    href: "/app/settings",
    icon: ReceiptOutlinedIcon,
    title: "Invoices",
  },
  {
    href: "/login",
    icon: ProjectIcon,
    title: "Projects",
  },
  // {
  //   href: "/none",
  //   icon: RemoveIcon,
  //   title: "",
  //   disable: true,
  // },
  {
    href: "/help",
    icon: Help,
    title: "Help",
  },
  {
    href: "/download",
    icon: GetAppOutlinedIcon,
    title: "Download App",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    // top: 64,
    height: "calc(100%)",
    backgroundColor: "#382f9c",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box p={3}>
        <img src={ReactLogo} alt="React Logo" />
      </Box>
      <Box p={2}>
        <List>
          
          <Group11 items={items.slice(0,3)} />
          <Divider style={{backgroundColor: "white",
    width: "18px",
    margin: "15px 10px"}} />
          <Group11 items={items.slice(3,6)} />
          <Divider />
          <Group11 items={items.slice(6,8)} />
        </List>

      </Box>
      <Box flexGrow={1} />
      <Box p={1}>
        <IconButton style={{color:"white"}}>
  <NotificationsNoneIcon />
</IconButton>
<IconButton style={{ marginLeft:"40px",color:"white"}}>
<SettingsIcon />
</IconButton>
<IconButton style={{color:"white",float:"right"}}>
  <AccountCircleIcon />
</IconButton>
        
      </Box>
    </Box>
  );

  return (
    <>
      {/* <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden> */}
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </>
  );
};


const Group11 = ({items}) => {
return(
  <>
  {items.map((item) => (
    <NavItem
      href={item.href}
      key={item.title}
      title={item.title}
      icon={item.icon}
      disable={item.disable}
    />
  ))}
  </>
);
}
NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
