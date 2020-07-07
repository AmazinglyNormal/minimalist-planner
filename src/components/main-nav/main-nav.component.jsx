import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  ListSubheader,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountBox from "@material-ui/icons/AccountBox";
import Settings from "@material-ui/icons/Settings";
import Equalizer from "@material-ui/icons/Equalizer";
import Dashboard from "@material-ui/icons/Dashboard";
import Add from "@material-ui/icons/Add";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    color: "#333",
    backgroundColor: "#fff",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

export default function MainNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const navIcons = [<Dashboard />, <AccountBox />, <Settings />, <Equalizer />];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" onClick={handleClick}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography variant="h6">Minimalist Planner</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Dashboard", "Profile", "Settings", "Statistics"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{navIcons[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </div>
        <Divider />
        <List subheader={<ListSubheader component="div">Topics</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary={"Add new topic"} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
