import React from 'react';
import {connect} from 'react-redux';
import {getUsersRequest} from "../actions/users";

type Props = {
    getUsersRequest: () => void
}

class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        props.getUsersRequest();
    }


    render() {
        return (
            <div>test</div>
        )
    }

}


export default connect(null, {
    getUsersRequest
})(App)