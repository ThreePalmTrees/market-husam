import { RECEIVE_API_ITEMS } from "../actions";

export default (state = [], { type, items = [] }) => {
  switch (type) {
    case RECEIVE_API_ITEMS:
      return items;
    default:
      return state;
  }
};
