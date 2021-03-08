import {Types, Action} from '../actions/users';

type ItemType = {
    name: string
}

type StateType = {
    items: ItemType[],
    error: string
}

const INITIAL_STATE = {
    items: [],
    error: ''
}
const users = (state: StateType = INITIAL_STATE, action: Action) => {
    console.log("reducer", action.type)
    switch (action.type) {
        case Types.GET_USERS_SUCCESS : {
            return {
                ...state,
                items: action.payload.items,
                error: ''
            }
        }
        case Types.USERS_ERROR: {
            console.log(action.payload.error)
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }


    }

}
export default users