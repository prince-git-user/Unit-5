import { Add_Todo } from "./Action";
const initState = {
  todo: [],
};

export const todureducer = (store = initState, { type, payload }) => {
  switch (type) {
    case Add_Todo:
      return { ...store, todo: [...payload] };

    default:
      return store;
  }
};