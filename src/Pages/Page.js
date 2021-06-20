import React, { Component } from 'react'
import parse from 'html-react-parser';
import {CircularProgress, Box, Grid, Typography, withStyles} from '@material-ui/core';

const styles = theme =>({
    title:{
        fontSize:32
    },
    media: {
        height: 0,
        paddingTop: '45.25%', // 16:9,
        marginTop:'30',
        cursor:'pointer'
        // maxHeight:200
      },
      topSec:{
          background:'#f9f9f9'
      }
});
class Page extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading:true,
            page:[],
        }
    }
    async loadPageData(slug){
        window.scrollTo(0, 0);
        this.setState({
            loading:true,
            page: []
        });
        fetch("https://wordpress.org/news/wp-json/wp/v2/pages/?slug="+slug)
        .then(res =>res.json())
        .then(
            
            (result)=>{
                
                console.log(result);
                setTimeout(function(){
                    this.setState({
                        loading:false,
                        page: result
                    });
                }.bind(this),1000)
            
            },
            (error) =>{
                this.setState({
                    loading: true,
                    error
                  })
            }
            
        )
    }
   
    async componentWillReceiveProps(nextProps) {
        const {slug} = nextProps.match.params;
        if (slug !== this.props.match.params.slug) {
           
            await this.loadPageData(slug);
        }
    }
    async componentDidMount(){
      // console.log(this.props.match.params,this.state.slug)
       
       const {slug} = this.props.match.params;
       await this.loadPageData(slug);
        
    }
   


    render() {
        const {loading,page} = this.state
        const {classes} = this.props
        return (
            <Box >
            {loading &&
                <CircularProgress color="secondary" className=""/>
            }
            {page &&
            <Grid>
               <Typography variant="h3" component="h1" className={classes.title}>{page.pageName}</Typography> 
               <Typography variant="body1" component="div">
               {typeof(page.pageDescription) == 'string' &&
                   parse(page.pageDescription)
                }
               </Typography>
            </Grid>
            }
            </Box>
        )
    }
}
export default withStyles(styles)(Page);