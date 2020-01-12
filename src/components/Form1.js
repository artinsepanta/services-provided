import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
//import AddService from '../containers/AddService'
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
    margin: theme.spacing(1),
  },
}));

//export default function Form1() {
const Form1 = (props) => {
  const classes = useStyles();
  console.log('newServ', props.services)

  return (
    <div>
      <div>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">ID</InputLabel>
          <Input
          />
          <br />

        </FormControl>
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
      </div>
      <div>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Gender
          </InputLabel>
          <Input
          />
        </FormControl>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Health"
        />

        <Container>
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
                <TableCell align="right">Clerk</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {props.newServs.map((newServ, idx) => (
                <TableRow key={newServ.NGO_ID}>
                  <TableCell component="th" scope="serv">
                    {serv.NGO_ID}
                  </TableCell>
                  <TableCell align="right">{service.service_Service}</TableCell>
                  <TableCell align="right">{service.service_clerk}</TableCell>
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