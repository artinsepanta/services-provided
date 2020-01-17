import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'


class AddService extends Component {
    state = {
        open: false,
        id:'',
        ngo: '',
        service: '',
        date: '',
        action:''
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.userId] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.userId = this.props.serviceTotal + 1
        delete payload.open
        console.log("THE USERSSERVICES", payload)
        
        this.props.addService(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                id:'',
                ngo: '',
                service: '',
                date: '',
            })
        }
    }

    render() {
        
        return (
            <Fragment>
                <Button
                     color='primary'
                     variant="contained"
                     className="addService"
                    onClick={this.toggleDialog}
                >
                    Add Service
                </Button>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Service</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="id" 
                                    placeholder="ID" 
                                    value={this.state.id} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="ngo" 
                                    placeholder="NGO" 
                                    value={this.state.ngo} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="service" 
                                    placeholder="Service" 
                                    value={this.state.service} 
                                    onChange={this.handleTextChange} 
                                    required />
                                 <TextField 
                                    id="date" 
                                    placeholder="Date" 
                                    value={this.state.date} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddService;