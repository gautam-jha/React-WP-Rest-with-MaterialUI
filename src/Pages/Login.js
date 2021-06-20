import React,{useState,useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { AppContext } from '../Layout';
import Auth from '../Helpers/Model_auth';



const useStyles = makeStyles(theme => ({
  loginForm:{


  },
  paper: {
    // marginTop: theme.spacing(8),
    padding:theme.spacing(3),
    background:'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // flex:1,
    // justifyContent:'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {

  const {authenticate} = useContext(AppContext);
  
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async(e) =>{
    e.preventDefault();
    //const formData  = new FormData();

    //formData.append('email',email)
    //formData.append('password',password)
   
    try{
      let data = {email:email,password:password};
      const response = await Auth.signin(data);
      console.log(response);
      if(typeof(response.error) == 'undefined'){
        authenticate(response.success.token); 
      }else{
        alert('INCORRECT CREDENTIALS');
        setPassword('')
      }

    }catch(err){
      console.log(err)

    }
    /*fetch(`/api/v1/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      },
    }).then(res =>res.json())
    .then(res => {
      console.log(res);
      if(typeof(res.error) == 'undefined'){
        authenticate(res.success.token); 
      }else{
        alert('INCORRECT CREDENTIALS');
        setPassword('')
      }     
    })
    .catch(() => alert("There was an error, please try again"))
    */
    
  }

  return (
    <Container component="div" maxWidth="xs" className={classes.loginForm}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={submit} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2" >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}