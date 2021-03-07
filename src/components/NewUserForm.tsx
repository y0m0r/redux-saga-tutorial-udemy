import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

type UserInput = {
    firstName: string,
    lastName: string

}
type Props = {
    onSubmit: (input: UserInput) => void
}


class NewUserForm extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }


    state = {
        firstName: "",
        lastName: ""
    }
    handleSubmit = (e: Event) => {
        e.preventDefault();
        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        })
        this.setState({
            firstName: "",
            lastName: ""
        })

    }
    handleFirstNameChange = (e: any) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastNameChange = (e: any) => {
        this.setState({
            lastName: e.target.value
        })
    }

    render() {


        return (
            // @ts-ignore
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        First name
                    </Label>

                    <Input placeholder="First name" onChange={this.handleFirstNameChange} value={this.state.firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Last name
                    </Label>

                    <Input placeholder="Lastname" onChange={this.handleLastNameChange} value={this.state.lastName}/>
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color={"primary"}>
                        Create
                    </Button>
                </FormGroup>
            </Form>
        )

    }
}

export default NewUserForm;