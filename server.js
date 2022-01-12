const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 8000;

server.use(middlewares);
// https://market-husam.herokuapp.com/api/items
// http://localhost:8000/api/items?_page=1&_limit=100&tags_like=Beach|Trees|Sun$|People
// https://market-husam.herokuapp.com/api/companies

/* price low to high: http://localhost:8000/api/items?_sort=price&_order=asc */
/* price high to low: http://localhost:8000/api/items?_sort=price&_order=desc */
/* new to old: http://localhost:8000/api/items?_sort=added&_order=desc */
/* old to new: http://localhost:8000/api/items?_sort=added&_order=asc */
// Selecting a new sort will reset the results to the first page. Same for filtering.
// And if page !== 1 then window.scrollTo(0, 0);

/*
NOTE: if we have selected tags|brands, then they need to be appended to the requested URL
e.g: http://localhost:8000/api/items?_sort=price&_order=desc&tags_like=beach
So probably need to handle this through redux to getFilteredBrands and getFilteredTags then append them to the requested URL, 
NOTE TOO: on every change to the filtered brands/tags the pagination needs to be updated
const pagesCound = Math.ceil(totalCount / 16 );
 reduxSetTotalCount(res.headers["x-total-count"])
 */

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log("Server is running");
});
