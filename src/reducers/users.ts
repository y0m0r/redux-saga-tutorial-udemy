import {Types, Action} from '../actions/users';

type ItemType = {
    name: string
}

type StateType = {
    items: ItemType[]
}

const INITIAL_STATE = {
    items: []
}
const users = (state: StateType = INITIAL_STATE, action: Action) => {
    console.log("reducer", action.type)
    switch (action.type) {
        case Types.GET_USERS_SUCCESS : {
            return {
                items: action.payload.items
            }
        }
        default: {
            return state;
        }


    }

}
export default users