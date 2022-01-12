import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_API_ITEMS,
  REQUEST_API_COMPANIES,
  receiveApiItems,
  receiveApiCompanies,
} from "./actions";
import { fetchItems, fetchCompanies } from "./api";

// move to ./utils
const addParam = (param, params) => {
  if (!params) {
    params += param;
  } else {
    params += `&${param}`;
  }
};

function* getApiItems({ action }) {
  try {
    // do api call
    let params = "";
    if (action?.payload?.sort) {
      switch (action.payload.sort.type) {
        // @todo: This approach is error-prone and not DRY. Wouldn't use this usually, but I'm racing time.
        case "asc":
          if (action.payload.sort.by === "price") {
            addParam("_sort=price&_order=asc", params);
          } else if (action.payload.sort.by === "date") {
            addParam("_sort=date&_order=asc", params);
          }
          break;

        case "desc":
          if (action.payload.sort.by === "price") {
            addParam("_sort=price&_order=desc", params);
          } else if (action.payload.sort.by === "date") {
            addParam("_sort=date&_order=desc", params);
          }
          break;

        default:
          break;
      }
    }

    if (action?.payload?.filterByBrands) {
      const brands = action.payload.filterByBrands.join("|");
      addParam(`manufacturer_like=${brands}`, params);
    }

    const items = yield call(() => fetchItems(params));

    // @todo: set available tags properly
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
