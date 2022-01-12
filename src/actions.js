/* Constants */
export const REQUEST_API_ITEMS = "REQUEST_API_ITEMS";
export const RECEIVE_API_ITEMS = "RECEIVE_API_ITEMS";
export const REQUEST_API_COMPANIES = "REQUEST_API_COMPANIES";
export const RECEIVE_API_COMPANIES = "RECEIVE_API_COMPANIES";

/* Requesters */
export const requestApiItems = (action) => ({
  type: REQUEST_API_ITEMS,
  action,
});
export const requestApiCompanies = (action) => ({
  type: REQUEST_API_COMPANIES,
  action,
});

/* Receivers */
export const receiveApiItems = (items) => ({ type: RECEIVE_API_ITEMS, items });
export const receiveApiCompanies = (companies) => ({
  type: RECEIVE_API_COMPANIES,
  companies,
});
