import axios from 'axios';

export const getUsers = () => {
    return axios.get("/users", {
        params: {
            limit: 1000
        }
    })
};


export const createUser = ({firstName, lastName}: { firstName: string, lastName: string }) => {
    return axios.post('/users', {
        firstName,
        lastName
    })
}

export const deleteUser =(userId:number) => {
    return axios.delete(`/users/${userId}`)
}