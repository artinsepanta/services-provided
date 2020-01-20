import React, { Component, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import providedService from '../providedService.json';
//import AddService from '../containers/AddService';
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

//Using @material-ui styling
  const styles = () => ({
  margin: {
    margin: '20px',
    width: 200,
  },
  submitButton: {
    marginTop:'25px',
    backgroundColor:'blue',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
})

//functions in ES6+ then pass in the keyword to access  objects
class Form extends Component {
  state = {
    userId: '',
    firstName: '',
    lastName: '',
    gender: '',
    health:'',
   // searchName: '',
    //searchResult: []
  }

  handleChange = (e) => {
    console.log('event', e.target)
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = () => {
    const newServs = {
      userId: this.state.userId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      health: this.state.health
    }
    // post to mysql database here
    console.log('newUser', newServs)
  }

  //searchFirstName = () => {
    
    //let firstName = this.state.firstName
    //let uid=this.state.userId;


  //   let user = users.map(x => x.userId == uid)
  //   alert(user.firstName)
  //   console.log("user: " + user)
  //   this.setState({searchResult : user})
  // }

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
                      id="input-with-icon-textfield1"
                      name="lastName"
                      label="Last Name"
                      value={ this.state.lastName }
                      onChange={ this.handleChange }
                    />
                    <TextField
                      className={classes.margin}
                      id="input-with-icon-textfield2"
                      name="gender"
                      label="Gender"
                      value={ this.state.gender }
                      onChange={ this.handleChange }
                    />
                    <TextField
                      className={classes.margin}
                      id="input-with-icon-textfield3"
                      name="health"
                      label="Health"
                      value={ this.state.health }
                      onChange={ this.handleChange }
                    />
                  </div>
                </div> 

                <div className={ classes.buttonContainer }>
                  <Button 
                    className={ classes.submitButton } 
                    onClick={ this.onSubmit }
                  >
                    New User
                 </Button>
                </div>

                  <Container>
                    <h2>Services Provided</h2>
                    {/* <div className={ classes.serviceButtons }> */}
                    <div>
                    <Button
                      // className={ classes.serviceButton }
                     // onClick={this.searchFirstName} 
                      onClick={this.props.fetchServices} 
                      variant="contained" 
                      color="primary"
                    >
                      Services
                    </Button>
                    </div>

             
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

                          <TableCell>
                            {userService.ngo}
                          </TableCell>

                          <TableCell>
                            {userService.service}
                          </TableCell>
                          <TableCell>
                            {userService.date}
                          </TableCell>
                         </TableRow>
                        ))}      
                      </TableBody>
                    </Table>
                  </Container>
                </div>
               )
    }
  }
            {/* </div>
            <br/>
            <br/>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">NGO</TableCell>
                  <TableCell align="right">Service</TableCell>
                  <TableCell align="right">Date</TableCell> 
                </TableRow>
              </TableHead>
              <TableBody>
        {/* {this.searchResult.map((userServices, idx) => (
            <TableRow key={userServices.Id}>
                <TableCell component="th" scope="userServices">
                    {userServices.userId}
                </TableCell>
                <TableCell align="right">{userServices.services.ngo}</TableCell>
                <TableCell align="right">{userServices.services.service}</TableCell>
                <TableCell align="right">{userServices.services.date}</TableCell>
                {document.cookie === "loggedIn=true" ? (
                <TableCell align="right">
                    <DeleteIcon 
                        onClick={() => this.props.deleteNewServs(idx)}
                        className="icon text-red" />
                </TableCell>
                  ):(null)}
            </TableRow>
        ))} */}
//         </TableBody>
//             </Table>
//           </Container>
//         </div>
//       </div>  
//     )
//   }
// } */}


export default withStyles(styles)(Form)