import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { PostsActionTypes } from './types'
import { callApi } from '../../utils/api';
import { fetchRequest, fetchError, fetchSuccess, fetchRequestById, fetchSuccessById, updateRequestById, updateSuccessById, createRequest, createSuccess } from './actions'

const API_ENDPOINT = 'http://jsonplaceholder.typicode.com/posts';

// generator function for handling ajax calls    -- handler 
// it will send ajax calls 
// get the resp and yield the result to reducers 


// generator function for watching over the req from component   -- watcher 
// watcher function will be actively watching for actions from components 
// upon getting actions then the handler will be called 


function* handleFetch() {
  console.log("Execution flow Step 2 : Handle Fetch Before")
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_ENDPOINT)

    console.log("Execution Flow 4 : Handle Fetch After");
    console.log(res);
    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      console.log("Execution Flow 5 :About to call fetch Sucess")
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  console.log("watchFetchRequest");
  yield takeEvery(PostsActionTypes.FETCH_REQUEST, handleFetch)
}


function* handleFetchById(action: ReturnType<typeof fetchRequestById>) {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', `${API_ENDPOINT}/${action.payload}`)

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccessById(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchById() {
  yield takeEvery(PostsActionTypes.FETCH_REQUEST_BY_ID, handleFetchById)
}


function* handleUpdateById(action: ReturnType<typeof updateRequestById>) {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'put', `${API_ENDPOINT}/${action.payload.id}`)

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(updateSuccessById(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchUpdateById() {
  yield takeEvery(PostsActionTypes.UPDATE_REQUEST_BY_ID, handleUpdateById)
}

function* handleCreate(action: ReturnType<typeof createRequest>) {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'post', `${API_ENDPOINT}`, action.payload)
    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(createSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchCreate() {
  yield takeEvery(PostsActionTypes.CREATE_REQUEST, handleCreate)
}


// We can also use `fork()` here to split our saga into multiple watchers.
function* postsSaga() {
  yield all([
    fork(watchCreate),
    fork(watchFetchRequest),
    fork(watchFetchById),
    fork(watchUpdateById)
  ])
}

export default postsSaga;