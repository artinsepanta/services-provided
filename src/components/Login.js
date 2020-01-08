import React, { useState } from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import { Redirect } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  loginButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});



  const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const login = (e) =>{ 
    e.preventDefault()
   
    document.cookie = `user=${username};max-age=60*1000*5`;
    
    window.location.replace("/Form1")
   
  }
  
  return (
    <div className="App">
      <Container maxWidth="sm">
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={login}>
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
            color="primary">Login</Button>
        </form>
      </Container>
    </div>
  )
 }

  export default Login;