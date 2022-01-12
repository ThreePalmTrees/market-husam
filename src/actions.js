export const REQUEST_API_ITEMS = "REQUEST_API_ITEMS";
export const RECEIVE_API_ITEMS = "RECEIVE_API_ITEMS";

export const requestApiItems = (action) => ({
  type: REQUEST_API_ITEMS,
  action,
});
export const receiveApiItems = (items) => ({ type: RECEIVE_API_ITEMS, items });
