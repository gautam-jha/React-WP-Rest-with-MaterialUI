import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };


const useStyles = makeStyles(theme => ({
    review_heading:{
        width:'100%',
      },
      rating: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
      },
    
  }));
export default function Review(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  // console.log(props,"Props");
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  return (
    <div  className={classes.review_heading}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.venue_name}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="review"
            label="Review"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            Rating
          </DialogContentText>
          <div className={classes.rating}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Rate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}