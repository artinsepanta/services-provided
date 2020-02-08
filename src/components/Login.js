import React,{Component} from 'react'
//import React, { useState } from 'react'
import {
  Link,
  Container
} from '@material-ui/core';
//import './App.css';
//import { Redirect } from 'react-router'
//import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//   loginButton: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });



  // const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const classes = useStyles();
  // const login = (e) =>{ 
  //   e.preventDefault()
   
  //   document.cookie = `user=${username};max-age=60*1000*5`;
    
  //   window.location.replace("/Form")
   
  // }
  
  class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        formErrors: {
        email: '',
        password: ''
    }
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
  this.setState({
    [e.target.id]: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  console.log('The form was submitted with the following data:');
        console.log(this.state);
}
render() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        {/* <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={login}>
          <TextField
            required
            onChange={({ target }) => setUsername(target.value)}
            value={username}
            name="username"
            label="Username"
            type="text" />
          <TextField
            required
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            name="password"
            label="Password"
            type="password" />
          <Button
            type="submit"
            className={classes.loginButton}
            variant="contained"
            color="primary">Login</Button> */}
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit= {this.handleSubmit} className="FormFields">
              <div className="FormField">
                <br/>
                <br/>
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField_Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField_Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <button className="FormField__Button mr-20" id="bn">Sign In</button>
                <h5>Don't have an Account?</h5>
                <Link to="/signup" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </Container>
        </div>
    )
 }
}

  export default Login;