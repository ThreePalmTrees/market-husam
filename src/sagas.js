import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_ITEMS, receiveApiItems } from "./actions";
import { fetchItems } from "./api";

function* getApiItems({ payload }) {
  try {
    // do api call
    const items = yield call(() => fetchItems());
    yield put(receiveApiItems(items));
  } catch (e) {
    console.log("Got error", e.message);
    // yield put({ type: "ERROR_CALLING_API", message: e.message });
  }
}

// function* getSortedItems(action) {
//     try
// }

export default function* mySaga() {
  yield takeLatest(REQUEST_API_ITEMS, getApiItems);
}
