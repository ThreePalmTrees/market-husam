import { RECEIVE_API_COMPANIES } from "../actions";

export default (state = [], { type, companies = [] }) => {
  switch (type) {
    case RECEIVE_API_COMPANIES:
      return companies;
    default:
      return state;
  }
};
