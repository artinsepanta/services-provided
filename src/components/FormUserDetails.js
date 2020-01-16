import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  
  render () {
    const {values,handleChange} = this.props;
    
    return (
      <div>
        <div>
      <FormControl >
        <InputLabel htmlFor="input-with-icon-adornment">ID</InputLabel>
        <Input
        />
        <br />
      </FormControl>
      </div>
      <TextField
        
        id="input-with-icon-textfield"
        label="First Name"
        hintText="Enter First Name"
        floatingLabelText="First Name"
        onChange={handleChange('firstName')}
        defaultValue = {values.firstName}
      />
      <TextField
        
        id="input-with-icon-textfield"
        label="Last Name"
      />
    </div>
    )
  }
}

export default FormUserDetails;