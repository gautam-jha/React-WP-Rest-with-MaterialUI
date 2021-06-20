import React, { Component,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,TextField,Stepper,Step,StepLabel,Button,Typography,Radio,RadioGroup,FormHelperText,FormControlLabel,FormControl,FormLabel} from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding:'5px 0px 20px 0px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  form_value:{
      textAlign:'left',
      height:265,
      overflowY:'auto',
      paddingLeft:34,
  },
  inputfield:{
      width:'90%',
  }
  
}));

function getSteps() {
  return ["Occasion", "No. Of Guest", "Your Detail"];
}




export default function Form(props) {

    console.log(props,'formevents');
    
    const [value, setValue] = React.useState('Birthday Party');
    
    const handleChange = event => {
        setValue(event.target.value);
      };
      const [selectedDate, handleDateChange] = useState(new Date());

      
     
      const [contact, setContact] = useState('')
      const [email, setEmail] = useState('')
      const [name, setName] = useState('')
      
    function getStepContent(stepIndex) {
    
        switch (stepIndex) {
          case 0:
            return (<div className={classes.form_value}>
                    <FormControl component="fieldset" >
                    <FormLabel component="legend">Occasion</FormLabel>
                    <RadioGroup aria-label="occasion" name="occasion" value={value} onChange={handleChange} >
                     
                    <FormControlLabel value="Birthday Party" control={<Radio />} label="Birthday Party" />
                   
                    <FormControlLabel value="Corporate Party" control={<Radio />} label="Corporate Party" />
                    <FormControlLabel value="Cocktail Party" control={<Radio />} label="Cocktail Party" />
                    </RadioGroup>
                    </FormControl>
                   </div>);
          case 1:
            return (<div className={classes.form_value}>
                  <Grid item xs={6}>
                <FormControl component="fieldset" >
                <FormLabel component="legend">No. Of Guests</FormLabel>
                <RadioGroup aria-label="guests" name="guests" value={value} onChange={handleChange} >
                <FormControlLabel value="10-50" control={<Radio />} label="10-50" />
                <FormControlLabel value="51-100" control={<Radio />} label="51-100" />
                <FormControlLabel value="101-150" control={<Radio />} label="101-150" />
                </RadioGroup>
                </FormControl>
                </Grid>
                <Grid item  xs={6}>
                <FormControl component="fieldset" >
                <FormLabel component="legend">Occasion Date</FormLabel>
                
                </FormControl>
                
                </Grid>
               </div>);
          case 2:
            return (<div className={classes.form_value}>
                <FormLabel component="legend">Your Detail</FormLabel>
                <TextField variant="outlined" margin="normal" className={classes.inputfield} required fullWidth  id="name" label="Your Name"
                    name="name" autoComplete="name" onChange={e => setName(e.target.value)} autoFocus/>
                <TextField variant="outlined" margin="normal"  className={classes.inputfield}  required fullWidth  id="contact" label="Your Contact"
                    name="contact" autoComplete="Your Contact" onChange={e => setContact(e.target.value)} autoFocus/>
                <TextField variant="outlined" margin="normal" className={classes.inputfield}  required fullWidth id="email" label="Email Address"
                  name="email" autoComplete="email"  onChange={e => setEmail(e.target.value)} autoFocus />
               </div>);
          default:
            return 'Unknown stepIndex';
        }
      }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper className={classes.steplabel} activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={`${classes.form_value} ${classes.instructions}`}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Grid className={classes.instructions}>{getStepContent(activeStep)}</Grid>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
