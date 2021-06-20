import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
//import * as NavigationUtils from '../Helpers/Navigation';

const styles = (theme) => ({
  Footer: {
    background: theme.palette.dark.main,
    color: "#ffffff",
    paddingTop: 20,
    paddingBottom: 20,
    "& a": {
      color: "#ffffff",
      textDecoration: "none",
      lineHeight: 1.8,
      fontWeight: 300,
    },
    "& a:hover": {
      color: "#cccccc",
    },
    "& .container": {
      display: "flex",
      // flexDirection:'row',
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    "& .container .widget": {
      flex: 1,
    },
    "& .container li": {
      listStyle: "none",
    },
    "& .widget-title": {
      fontSize: 20,
    },
    "& ul.menu": {
      paddingLeft: 10,
    },
    "& .connect_us_with_social, & .site-info": {
      flex: 1,
      margin: "0 auto",
      fontWeight: 300,
      textAlign: "center",
    },
    "& .social-icons a": {
      margin: 8,
    },
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer id="colophon" className={classes.Footer} role="contentinfo">
        <Container fixed>
          <div className="container">
            <div className="widget">
              <ul>
                <li id="nav_menu-3" className=" widget_nav_menu">
                  <p className="widget-title">Quick Link</p>
                  <div className="menu-primary-container">
                    <ul className="menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-215">
                        <Link to={"/"}>Home</Link>
                      </li>

                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217">
                        <Link to={"/page/about"}>About Us</Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217">
                        <Link to={"/page/premium-planning"}>
                          Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="widget">
              <ul>
                <li id="nav_menu-3" className="widget_nav_menu">
                  <p className="widget-title">Packages Type</p>
                  <div className="menu-primary-container">
                    <ul className="menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-215">
                        <a href="/packages/type/link4">Link 1</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-215">
                        <a href="/packages/type/link4">Link 2</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-215">
                        <a href="/packages/type/link4">Link 3</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-215">
                        <a href="/packages/type/link4">Link 4</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="widget">
              <ul>
                <li id="nav_menu-3" className="widget widget_nav_menu">
                  <p className="widget-title"> Other links</p>
                  <div className="menu-primary-container">
                    <ul className="menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-215">
                        <a href="/link1 ">link 1 </a>
                      </li>

                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-215">
                        <a href="/otherlink2 ">link 2</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="widget">
              <ul>
                <li id="meta-4" className="widget widget_meta">
                  <p className="widget-title">Helpful Topics</p>
                  <ul>
                    <li>
                      <a href="/user/register" title="Sign Up">
                        SignUp
                      </a>
                    </li>
                    <li>
                      <a href="/user/signin" title="Login">
                        LogIn
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="connect_us_with_social">
              <p className="widget-title">Get In Touch</p>
              <div className="th-item">
                <div className="social-icons">
                  <a href="https://www.facebook.com/company/" target="blank">
                    <Facebook />
                  </a>
                  <a href="https://www.instagram.com/gauti.san/" target="blank">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt10">
            <div className="site-info">
              <div className="site-info-inner">
                <span>Copyright </span>
                2019
                <span> Your Company</span>
                <Link to={"/page/term-and-condition"}>
                  Terms &amp; Condition{" "}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
