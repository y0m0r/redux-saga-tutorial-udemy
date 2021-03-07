import React from 'react';
import {connect} from 'react-redux';
import {getUsersRequest, createUserRequest, deleteUserRequest} from "../actions/users";
import UserList from './UserList'
import NewUserForm from './NewUserForm';

type Props = {
    users: any,
    getUsersRequest: () => void
    createUserRequest: (input: { firstName: string, lastName: string }) => void
    deleteUserRequest: (userId:number) => void;
}

class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        props.getUsersRequest();
    }

    handleSubmit = ({firstName, lastName}: { firstName: string, lastName: string }) => {
        this.props.createUserRequest({firstName: firstName, lastName: lastName})
    }

    handleDeleteUserClick = (userId: number) => {

        this.props.deleteUserRequest(userId)

    }


    render() {
        const users = this.props.users;


        return (
            <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
                <NewUserForm onSubmit={this.handleSubmit}></NewUserForm>
                <UserList users={users.items} onDeleteUser={this.handleDeleteUserClick}/>
            </div>
        )
    }

}


// @ts-ignore
export default connect(({users}) => ({users}), {
    getUsersRequest,
    createUserRequest,
    deleteUserRequest,
})(App)