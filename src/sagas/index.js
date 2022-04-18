import {
  fetchGetRequest,
  fetchGetError,
  fetchGetSuccess,
  fetchGetIdRequest,
  fetchGetIdError,
  fetchGetIdSuccess,
} from '../store/slices';
import {spawn, put, take, call, fork} from 'redux-saga/effects';

// export const getServicesEpic = (action$) => action$.pipe(
//   ofType(FETCH_GET_REQUEST),
//   concatMap(() => ajax.getJSON(process.env.REACT_APP_API_URL).pipe(
//     map((o) => fetchGetSuccess(o)),
//     catchError((e) => of(fetchGetError(e))),
//   ))
// )

// export const getIdServicesEpic = (action$) => action$.pipe(
//   ofType(FETCH_GET_ID_REQUEST),
//   map((o) => o.payload.id),
//   concatMap((id) => ajax.getJSON(`${process.env.REACT_APP_API_URL}/${id}`).pipe(
//     map((o) => fetchGetIdSuccess(o)),
//     catchError((e) => of(fetchGetIdError(e))),
//   ))
// )

async function getServices() {
  const response = await fetch(process.env.REACT_APP_API_URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  };
  return await response.json();
}

async function getIdService(id) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  };
  return await response.json();
}

function* handleGetServicesSaga() {
  try {
    const data = yield call(getServices);
    yield put(fetchGetSuccess(data));
  } catch (error) {
    yield put(fetchGetError(error.message));
  }
 }

 function* watchGetServiceSaga() {
   while(true) {
    const action = yield take(fetchGetRequest);
    yield fork(handleGetServicesSaga, action)
   }
 }

 function* handleGetIdServicesSaga(action) {
  try {
    const data = yield call(getIdService, action.payload);
    yield put(fetchGetIdSuccess(data));
  } catch (error) {
    yield put(fetchGetIdError(error.message));
  }
 }

 function* watchGetIdServiceSaga() {
   while(true) {
    const action = yield take(fetchGetIdRequest);
    yield fork(handleGetIdServicesSaga, action)
   }
 }

export default function* saga() {
  yield spawn(watchGetServiceSaga);
  yield spawn(watchGetIdServiceSaga);
}
