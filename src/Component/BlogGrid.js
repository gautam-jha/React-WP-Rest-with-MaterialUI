import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
// import {Redirect, Link} from 'react-router-dom'

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Hidden from '@material-ui/core/Hidden';
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  blogList: {
    margin: 10,
    position: "relative",
  },

  card: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    background: "transparent",
    boxShadow: "none",
    transition: "all 1s cubic-bezier(0.22, 0.61, 0.36, 1)",
    zIndex: 2,
    "&:hover": {
      transform: "translateY(-20px)",
    },
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    // width: '100%',
    minHeight: 300,
    borderRadius: 20,
    transition: "all 1s cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  margin10: {
    marginTop: 10,
    marginBottom: 10,
  },
  postTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  },
  postSubTitle: {
    fontSize: 16,
    fontWeight: 400,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Box key={post.id} className={classes.blogList}>
      <CardActionArea
        component="a"
        href={post.link}
        target="_blank"
        className="shade"
      >
        <CardMedia
          className={classes.cardMedia}
          image="https://picsum.photos/400/250"
          title={post.title}
        />
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography
                component="h3"
                variant="h5"
                className={`${classes.postTitle} ${classes.margin10}`}
              >
                {parse(post.title.rendered)}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={`${classes.postTitle} ${classes.postSubTitle}`}
              >
                {post.date}
              </Typography>
            </CardContent>
          </div>
          {/*<Hidden xsDown>
           
          </Hidden>*/}
        </Card>
      </CardActionArea>
    </Box>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
