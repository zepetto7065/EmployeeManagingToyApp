import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users : response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className = "text-center">Users List</h1>
                <tabel className = "table table-striped">
                    <thead>
                        <tr>
                            <td>User ID</td>
                            <td>User FirstNane</td>
                            <td>User LastName</td>
                            <td>User Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                users =>
                                <tr key = {users.id}>
                                    <td>{users.id}</td>
                                    <td>{users.firstName}</td>
                                    <td>{users.lastName}</td>
                                    <td>{users.emailId}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </tabel>
            </div>
        )
    }
}

export default UserComponent