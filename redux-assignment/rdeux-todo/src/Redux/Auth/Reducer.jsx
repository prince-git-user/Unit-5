// import { store } from "../Store";
import { ISAUTH } from "./Action";
const initState = {
  isAuth: false,
};
export const Authreducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ISAUTH:
      return { ...store, isAuth: (store.isAuth = payload) };

    default:
      return store;
  }
};