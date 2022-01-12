import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_API_ITEMS,
  REQUEST_API_COMPANIES,
  receiveApiItems,
  receiveApiCompanies,
} from "./actions";
import { fetchItems, fetchCompanies } from "./api";

function* getApiItems({ action }) {
  console.log("calling getApiItems");
  console.log(action);
  try {
    // do api call
    const params = [];
    if (action?.payload?.sort) {
      switch (action.payload.sort.type) {
        // @todo: This approach is error-prone and not DRY. Wouldn't use this usually, but I'm racing time.
        // @todo: if any time left, allow sorting both price AND date "?_sort=price,added&_order=asc,asc" (need to change radio to checkbox)
        case "asc":
          if (action.payload.sort.by === "price") {
            params.push("_sort=price&_order=asc");
          } else if (action.payload.sort.by === "date") {
            params.push("_sort=added&_order=asc");
          }
          break;

        case "desc":
          if (action.payload.sort.by === "price") {
            params.push("_sort=price&_order=desc");
          } else if (action.payload.sort.by === "date") {
            params.push("_sort=added&_order=desc");
          }
          break;

        default:
          break;
      }
    }

    if (action?.payload?.filterByBrands) {
      const brands = action.payload.filterByBrands.join("|");
      params.push(`manufacturer_like=${brands}`);
    }

    // hack: to remove this if pagination was implemented on time
    params.push("_page=1&_limit=16");

    const items = yield call(() => fetchItems(params.join("&")));

    // @todo: set available tags properly (extract to a new saga)
    const tags = items.reduce((acc, { tags }) => {
      tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, []);
    console.log(tags);

    yield put(receiveApiItems(items));
  } catch (error) {
    console.error(error);
  }
}

function* getApiCompanies(action) {
  try {
    const companies = yield call(fetchCompanies);
    yield put(receiveApiCompanies(companies));
  } catch (error) {
    console.error(error);
  }
}

function* getItems() {
  yield takeLatest(REQUEST_API_ITEMS, getApiItems);
}

function* getCompanies() {
  yield takeLatest(REQUEST_API_COMPANIES, getApiCompanies);
}

export default function* rootSaga() {
  yield all([getItems(), getCompanies()]);
}
