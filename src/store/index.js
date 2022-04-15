import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import reducerGet from "./reducerGet";
import reducerGetId from "./reducerGetId";
import { getServicesEpic, getIdServicesEpic } from "../epic/index";

const reducer = combineReducers({
  serviceList: reducerGet,
  serviceItem: reducerGetId,
});

const epic = combineEpics(
  getServicesEpic,
  getIdServicesEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(epic);

export default store;
