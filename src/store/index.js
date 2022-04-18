import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "../sagas/index";
import { listSlices } from "./slices"; 


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: listSlices,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(saga);

export default store;
