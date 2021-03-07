import {takeEvery, call, fork, put} from 'redux-saga/effects'
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers(): Generator {
    try {
        const result = yield call(api.getUsers);
        console.log(result);
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

const usersSagas = [
    fork(watchGetUsersRequest)
]
export default usersSagas;