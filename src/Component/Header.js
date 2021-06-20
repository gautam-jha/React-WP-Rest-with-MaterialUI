import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  InputBase,
  fade,
  withStyles,
  Menu,
  MenuItem,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { AccountCircle } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import { AppContext } from "../Layout";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "muli sans-serif",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      height: 50,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
  mainMenu: {
    flexGrow: 1,
    marginLeft: 30,
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  loginbtn: {
    marginLeft: 10,
  },
  list: {
    width: 250,
  },
  display_name: {
    cursor: "pointer",
    marginLeft: "-5px",
  },
  dropdowns: {
    marginTop: 40,
  },
});

class Header extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      anchorEl: null,
      left: false,
      username: "",
    };
  }

  componentDidMount() {
    const { authenticated, username, handleSignOut } = this.context;
    console.log(handleSignOut, "user");

    this.setState({
      auth: authenticated,
      username: username,
    });
  }
  render() {
    const { handleSignOut } = this.context;
    console.log(handleSignOut, "user");

    const { classes } = this.props;
    const { username } = this.state;

    const open = Boolean(this.state.anchorEl);

    // const handleChange = event => {
    //   this.setState({auth:event.target.checked});
    // };

    const handleMenu = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    const handleClose = () => {
      this.setState({ anchorEl: null });
    };
    const sideList = (side) => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {[
            { name: "Home", url: "/" },

            { name: "About", url: "/page/about" },
          ].map((text, index) => (
            <ListItem button key={text + index} component={Link} to={text.url}>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    const toggleDrawer = (open) => (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      this.setState({ left: open });
    };

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Container fixed>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <img
                src="https://via.placeholder.com/100x30?text=Logo"
                className={classes.logo}
                alt="logo1"
              />

              <div className={classes.mainMenu}>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>

                <Button color="inherit" component={Link} to="/page/about">
                  About
                </Button>
              </div>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
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
              {this.state.auth && username && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <span className={classes.display_name} onClick={handleMenu}>
                    {username}
                  </span>
                  <Menu
                    className={classes.dropdowns}
                    id="menu-appbar"
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      to="/user/profile"
                    >
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Enquiries</MenuItem>

                    <MenuItem onClick={handleSignOut}>SignOut</MenuItem>
                  </Menu>
                </div>
              )}
              {!this.state.auth && (
                <Button
                  color="inherit"
                  className={classes.loginbtn}
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        <SwipeableDrawer
          open={this.state.left}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {sideList("left")}
        </SwipeableDrawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
