import {
  fetchGetError,
  fetchGetSuccess,
  fetchGetIdError,
  fetchGetIdSuccess,
} from '../store/slices';

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

export function* saga() {
  yield console.log('saga');
}
