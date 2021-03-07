import React from 'react';
import {connect} from 'react-redux';
import {getUsersRequest} from "../actions/users";
import UserList from './UserList'
import NewUserForm from './NewUserForm';

type Props = {
    users: any,
    getUsersRequest: () => void
}

class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        props.getUsersRequest();
    }

    handleSubmit = ({firstName, lastName}: { firstName: string, lastName: string }) => {
        console.log(firstName, lastName)
    }


    render() {
        const users = this.props.users;


        return (
            <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
                <NewUserForm onSubmit={this.handleSubmit}></NewUserForm>
                <UserList users={users.items}/>
            </div>
        )
    }

}


// @ts-ignore
export default connect(({users}) => ({users}), {
    getUsersRequest
})(App)