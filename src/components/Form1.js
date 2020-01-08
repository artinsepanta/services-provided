import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Form1() {
  const classes = useStyles();
  
return (
    <div>

 <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="ID" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Date" />
          </Grid>
        </Grid>
      </div>
<div>
 <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">First Name</InputLabel>
        <Input
          
         
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Last Name"
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Gender"
      />
      </div>
<div>
<FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Date of Birth</InputLabel>
        <Input
         />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Health"
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Addiction"
      />
      </div>

      

  </div>

  )
}