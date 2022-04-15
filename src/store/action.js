export const FETCH_GET_SUCCESS = 'FETCH_GET_SUCCESS';
export const FETCH_GET_ERROR = 'FETCH_GET_ERROR';
export const FETCH_GET_REQUEST = 'FETCH_GET_REQUEST';

export const FETCH_GET_ID_SUCCESS = 'FETCH_GET_ID_SUCCESS';
export const FETCH_GET_ID_ERROR = 'FETCH_GET_ID_ERROR';
export const FETCH_GET_ID_REQUEST = 'FETCH_GET_ID_REQUEST';

export const fetchGetRequest = () => ({
  type: FETCH_GET_REQUEST,
});

export const fetchGetError = (error) => ({
  type: FETCH_GET_ERROR,
  payload: {
    error,
  },
});

export const fetchGetSuccess = (items) => ({
  type: FETCH_GET_SUCCESS,
  payload: {
    items,
  },
});

export const fetchGetIdRequest = (id) => ({
  type: FETCH_GET_ID_REQUEST,
  payload: {
    id
  }
});

export const fetchGetIdError = (error) => ({
  type: FETCH_GET_ID_ERROR,
  payload: {
    error,
  },
});

export const fetchGetIdSuccess = (item) => ({
  type: FETCH_GET_ID_SUCCESS,
  payload: {
    item
  }
});
