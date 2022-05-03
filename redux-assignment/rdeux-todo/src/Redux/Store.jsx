import { todureducer } from "./Todo/Reducer";
import { legacy_createStore as  createStore, combineReducers } from "redux";
import { Authreducer } from "./Auth/Reducer";

const rootreducer = combineReducers({
  todo: todureducer,
  authentication: Authreducer,
});
export const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);