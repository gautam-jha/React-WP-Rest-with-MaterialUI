import React, { Component } from 'react'
import {Typography, Box} from '@material-ui/core'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    Headings:{
        paddingLeft:20,
        // borderStyle: 'solid',
        // borderLeftWidth: 100,
        // borderTopWidth: 0,
        // borderLeftColor: theme.palette.secondary.main,
        // borderTopColor: 'red',
        borderLeft:`5px solid ${theme.palette.secondary.main}`,
        marginTop:30,
        marginBottom:10
    },
    Title:{
        fontSize:26,
        fontWeight:600,
        lineHeight:1.8
    },
    Subtitle:{
        fontSize:16,
    }
})

class Title extends Component {
    render() {
        const {title, subtitle, classes} = this.props;
        return (

            <Box className={classes.Headings}>
            <Typography variant="h3" color="textPrimary" align="left" className={classes.Title}>{title}</Typography>
                {subtitle && (
                    <Typography variant="body2" color="textSecondary" align="left" className={classes.Subtitle}>
                        {subtitle}
                    </Typography>
                )}
            </Box>
        )
    }
}

export default withStyles(styles)(Title);   