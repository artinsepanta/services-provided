import React, { Component, useState } from 'react';
import { withStyles } from '@material-ui/styles';
//import FormControl from '@material-ui/core/FormControl';
//import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import providedService from '../providedService.json';
import AddService from './AddService';
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const styles = () => ({
  margin: {
    margin: '15px',
    width: '220',
    marginRight:'10px'
  },
  submitButton: {
    marginTop:'30px',
    backgroundColor:'#6666ff',
    border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  serviceButtons: {
    display: 'flex',
    justifyContent: 'center'
    },
  serviceButton: {
    // marginTop:'25px',
    backgroundColor:'#6666ff',
    border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  marginRight:'15px',
  cursor: 'pointer'
  }
})
// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(3),
//     width: 200,
//   },
// }));

// const classes = useStyles();

class Form1 extends Component {
  // const [values, handleChange] = useState({ userId: '', firstName: '', lastName: '', gender: '', health: '' })
  
  state = {
    userId: '',
    firstName: '',
    lastName: '',
    gender: '',
    health: ''
  }

  handleChange = (e) => {
    console.log('event', e.target)
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = () => {
    const newUser = {
      userId: this.state.userId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      health: this.state.health
    }
    // post to mysql database here
    console.log('newUser', newUser)
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <br/>
        <div>
          <div>
            <div>
              <TextField
                className={classes.margin}
                id="outlined-basic" 
                label="ID" 
                variant="outlined"
                name="userId"
                value={ this.state.userId }
                onChange={ this.handleChange }
              />
            </div>
            <div>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                name="firstName"
                label="First Name"
                value={ this.state.firstName }
                onChange={ this.handleChange }
              />
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                name="lastName"
                label="Last Name"
                value={ this.state.lastName }
                onChange={ this.handleChange }
              />
            
              
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                name="gender"
                label="Gender"
                value={ this.state.gender }
                onChange={ this.handleChange }
              />
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                name="health"
                label="Health"
                value={ this.state.health }
                onChange={ this.handleChange }
              />
          </div>
          <div className={ classes.buttonContainer }>
            <Button 
              className={ classes.submitButton } 
              onClick={ this.onSubmit }
            >
              Submit
            </Button>
          </div>
        </div>
          <Container>
            <br />
            <br />
            <br />
            <h2>Services Provided</h2>
            <div className={ classes.serviceButtons }>
              <Button
                className={ classes.serviceButton }
                onClick={this.props.fetchServices} 
                variant="contained" 
                color="primary"
              >
                services
              </Button>
              <AddService className={ classes.serviceButton }
               variant="contained" 
                color="primary"
                />
            </div>
            <br/>
            <br/>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">NGO</TableCell>
                  <TableCell align="right">Service</TableCell>
                  <TableCell align="right">Date</TableCell>
                  {document.cookie == "loggedIn=true" ? (
                  <TableCell align="right">Action</TableCell>
                  ):(null)}
                </TableRow>
              </TableHead>
              <TableBody>
        {providedService.map((userService, idx) => (
            <TableRow key={userService.userId}>
                <TableCell component="th" scope="row">
                    {userService.userId}
                </TableCell>
                <TableCell>{userService.ngo}</TableCell>
                <TableCell>{userService.service}</TableCell>
                <TableCell>{userService.date}</TableCell>
                {document.cookie == "loggedIn=true" ? (
       <TableCell>
                    <DeleteIcon
                        onClick={() => this.props.removUeserService(idx)}
                        className="icon text-red" />
                </TableCell>
                 ):(null)}
            </TableRow>
        ))}
        </TableBody>
            </Table>
          </Container>
        </div>
      </div>  
    )
  }
}
    
export default withStyles(styles)(Form1)