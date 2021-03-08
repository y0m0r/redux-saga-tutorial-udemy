export const Types = {
    GET_USERS_REQUEST: "users/get_users_request",
    GET_USERS_SUCCESS: "users/get_users_success",
    CREATE_USER_REQUEST: "users/create_user_request",
    DELETE_USER_REQUEST: 'users/delete_suer_request',
    USERS_ERROR: 'users/user_error'
}

export type Action = {
    type: string
    payload: any
}


export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST
})


type Item = {}

type UserSuccessParams = {
    items: Item[]
}

export const getUsersSuccess = (params: UserSuccessParams) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items: params.items
    }
})

type CreateUserRequestParams = {
    firstName: string,
    lastName: string
}
export const createUserRequest = (params: CreateUserRequestParams) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: {
        firstName: params.firstName,
        lastName: params.lastName
    }
})

export const deleteUserRequest = (userId: number) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: {
        userId: userId
    }
})

export const usersError = ({error}: {error:string}) => ({
    type: Types.USERS_ERROR,
    payload: {
        error: error
    }
})