export const Types = {
    GET_USERS_REQUEST: "users/get_users_request",
    GET_USERS_SUCCESS: "users/get_users_success",
    CREATE_USER_REQUEST: "users/create_user_request"
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