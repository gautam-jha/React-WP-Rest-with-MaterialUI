import React, { Component } from 'react';                                                                                                                                                                                                                                                                                               
import {RadioGroup,FormControlLabel,Radio,FormLabel,Grid,DialogActions,DialogContent,DialogTitle,Dialog,Button,Link, withStyles,InputLabel,FormHelperText,FormControl,Select,NativeSelect, Box,Paper,Typography} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import { ArrowRight } from '@material-ui/icons';

const style = theme =>({

  margin:{
    padding:10,
  },
  sortBy:{
    width:65,
    position:'relative',
  },
  searchModal:{
    width:'100%',
    '& .MuiDialog-paperWidthSm':{
      maxWidth:'100%!important',
      width: '80%',
      boxShadow: '0 1px 8px rgba(0, 0, 0, 0.1)',
    },
    '& .MuiPaper-root':{
      fontSize:14,
    },
    '& .MuiFormControlLabel-root':{
      height:33,
    }
  },
  sorting_section:{
   float:'center', 
  }


})
const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

class Search extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       age:0,
       asc:'asc',
       desc:'desc',
       open:false,
    }
   
  }
  
  
   handleFilterOpen=()=>{
          console.log('filter open');
          
          this.setState({ open:true })
        }
       handleClose=()=>{
          console.log('filter close');
          
          this.setState({ open:false })
        }
    render() {

        const {classes,search_data} = this.props;

        const uniqueTags = [];

     

        const {age,open, setOpen} = this.state;
        console.log('search-data',search_data);
       
        function handleChange() {
         console.log("chnage triggered")
        }
        
        
        return (
            <div>
                <Grid container className={classes.sorting_section} >
                <Grid item xs={12} sm={4} ></Grid><Grid item xs={12} sm={4} >
                <FormControl className={classes.margin}>
                  <InputLabel className={classes.sortBy} htmlFor="age-native-simple">Sort By</InputLabel>
                  
                </FormControl>
                  <FormControl className={classes.margin}>
                  <InputLabel htmlFor="age-native-simple"></InputLabel>
                  <Select
                    native
                    value={age}
                    onChange={handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple',
                    }}
                  >
                    <option value="" />
                    <option value={0}>Price Asc</option>
                    <option value={100}>Price Desc</option>
                    <option value={0}>Name Asc</option>
                    <option value={100}>Name Desc</option>
                    <option value={0}>Date Asc</option>
                    <option value={100}>Date Desc</option>
                  </Select>
                </FormControl>
                </Grid>
                 <Grid item xs={12} sm={4} >
                <FormControl className={classes.margin}>
                <InputLabel >
                <Button variant="outlined" color="primary" onClick={this.handleFilterOpen}>
                 Filter
                </Button>
                </InputLabel>
                  
                </FormControl>
                </Grid>
                </Grid>
                <Dialog id="searchModal" className={classes.searchModal} onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle className={classes.searchTitle} id="customized-dialog-title" onClose={this.handleClose}> Filter </DialogTitle>
              <DialogContent className={classes.searchcontainer}  dividers>
              
              <Grid container>
              <Grid item sm={3} xs={6}>
              <div className={classes.filterWrapper}>
              <h3>Localities</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup  aria-label="Localities" name="localities">
                  {search_data && search_data.map((locality) =>
                    <FormControlLabel value={locality.locality.locality_name} control={<Radio />} label={locality.locality.locality_name} />
                  )}
                  </RadioGroup>
                </FormControl>
            </div>
              </Grid>
              <Grid item sm={3} xs={6}>
              <div className={classes.filterWrapper}>
              <h3>Packages Type</h3>
              <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup aria-label="package-type" name="package-type">
                  
                    <FormControlLabel value="veg" control={<Radio />} label="Veg" />
                    <FormControlLabel value="non-veg" control={<Radio />} label="Non-Veg" />
                    <FormControlLabel value="liquor" control={<Radio />} label="Liquor" />
                  </RadioGroup>
              </FormControl>
            </div>
              </Grid>
              <Grid item sm={3} xs={6}>
              <div className={classes.filterWrapper}>
              <h3>Venue Type</h3>
              <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup aria-label="venue-type" name="venue-type">
                    <FormControlLabel value="fine-dining" control={<Radio />} label="Fine Dining" />
                    <FormControlLabel value="cafe-lounge" control={<Radio />} label="Cafe/Lounge" />
                    <FormControlLabel value="cuxury-dining" control={<Radio />} label="Casual Dining" />
                    <FormControlLabel value="luxury-dining" control={<Radio />} label="Luxury Dining" />
                  </RadioGroup>
              </FormControl>
            </div>
              </Grid>
              <Grid item sm={3} xs={6}>
              <div className={classes.filterWrapper}>
              <h3>City</h3>
              <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup aria-label="city" name="city">
                     { 
                      search_data && search_data.map(city => {
                          if (uniqueTags.indexOf(city.city.name) === -1) {
                              uniqueTags.push(city.city.name)
                          }
                      }) }
                  {/* {search_data && search_data.map((city) =>
                    <FormControlLabel value={city.city.name} control={<Radio />} label={city.city.name}  />
                  )} */}
                   
                 </RadioGroup>
              </FormControl>
            </div>
              </Grid>
              </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={this.handleClose} color="primary">
                  Filter
                </Button>
              </DialogActions>
      </Dialog>
            </div>
        )
    }
}

export default withStyles(style)(Search);
