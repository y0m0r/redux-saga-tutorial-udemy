import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects'
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers(): Generator {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            // @ts-ignore
            items: result.data.data
        }));

    } catch (e) {
        console.log(e)
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

function* createUser(action: any) {
    try {
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName})
        yield call(getUsers)
    } catch (e) {
        console.log(e)
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId}: {userId:number}) {
    try{
        yield call(api.deleteUser, userId)
        yield call(getUsers)
    }catch(e){
        console.log(e)
    }


}

function* watchDeleteUserRequest() {
    while (true) {
        // @ts-ignore
        const action = yield take(actions.Types.DELETE_USER_REQUEST)
        yield call(deleteUser, {userId: action.payload.userId})
    }

}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
]
export default usersSagas;