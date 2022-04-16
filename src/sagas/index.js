import { ofType } from 'redux-observable';
import { FETCH_GET_REQUEST, FETCH_GET_ID_REQUEST } from '../store/action';
import {
  fetchGetError,
  fetchGetSuccess,
  fetchGetIdError,
  fetchGetIdSuccess,
} from '../store/action';
import { catchError, concatMap, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export const getServicesEpic = (action$) => action$.pipe(
  ofType(FETCH_GET_REQUEST),
  concatMap(() => ajax.getJSON(process.env.REACT_APP_API_URL).pipe(
    map((o) => fetchGetSuccess(o)),
    catchError((e) => of(fetchGetError(e))),
  ))
)

export const getIdServicesEpic = (action$) => action$.pipe(
  ofType(FETCH_GET_ID_REQUEST),
  map((o) => o.payload.id),
  concatMap((id) => ajax.getJSON(`${process.env.REACT_APP_API_URL}/${id}`).pipe(
    map((o) => fetchGetIdSuccess(o)),
    catchError((e) => of(fetchGetIdError(e))),
  ))
)

export function* saga() {
  yield console.log('saga');
}
