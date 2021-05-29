import React, { Component } from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import AddUserForm from './AddUserForm';
import Users from './Users';

export default class Home extends Component {
    constructor(props) {
        super(props);
       this.state = {
        displayUserForm: false,
        userListUpdated: false
    }
    
}

openUserForm = ()=> {   
    this.setState({displayUserForm: true})
}

onHide = () => {    
    this.setState({displayUserForm: false})
}

listUpdate = (status) => {
   this.setState({userListUpdated: status})
}
    render() {
        console.log(this.state.displayUserForm)
        return (
            <div>
                <div className="btn-wrpr"><Button label="Add user" onClick={this.openUserForm} /> </div>
                <Dialog header="Add User" visible={this.state.displayUserForm} style={{ width: '50vw' }}  onHide={() => this.onHide()}>
                       <AddUserForm onHide={this.onHide} listUpdate={this.listUpdate} />
                    </Dialog >
                <div>

               <Users />
                </div>
            </div>
        )
    }
}
