import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import FormControl from '@material-ui/core/FormControl';
//import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete'
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(3),
    width: 200,
  },
}));

const Form1 = (props) => {
  const classes = useStyles();
  console.log('newServ', props.services)

  return (
    <div>
      <br/>
      <div>
        <TextField id="outlined-basic" label="ID" variant="outlined" />
      </div>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="First Name"
        />
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Last Name"
        />
      <div>
      <div>  
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Gender"
        />
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Health"
        />
      </div> 
        <Container>
          <br />
          <br />
          <br />
          <div className={classes.button} >
            <Button onClick={props.fetchServices} variant="contained" color="primary" >
              services
            </Button>
          </div>
          <h2>Services Provided</h2>
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
      {props.userServices.map((userService, idx) => (
          <TableRow key={userService.id}>
              <TableCell component="th" scope="row">
                  {userService.id}
              </TableCell>
              <TableCell>{userService.ngo}</TableCell>
              <TableCell>{userService.service}</TableCell>
              <TableCell>{userService.date}</TableCell>
              {document.cookie == "loggedIn=true" ? (
     <TableCell>
                  <DeleteIcon
                      onClick={() => props.removUeserService(idx)}
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
    
export default Form1