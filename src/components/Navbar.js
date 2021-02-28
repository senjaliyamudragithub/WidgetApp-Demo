import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  menuButton: {
    marginRight: "auto",
    textDecorationLine: "none",
  },
  addButton: {
    textDecorationLine: "none",
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.menuButton}>
            <Typography variant="h6" className={classes.title}>
              Dashboard
            </Typography>
          </Link>
          <Link to="/addWidget" className={classes.addButton}>
            <Typography variant="h6" className={classes.title}>
              Add Widget
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
