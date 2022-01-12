/**@TODO
 * set brands and tags when the App component mounts
 * throttle API calls by 3 seconds (sorting & filtering). pagination will have data available, so no calls to the API.
 */
import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppWrapper, ContentWrapper, ProductsWrapper } from "./App.styles";
import Header from "./Header/Header";
import Products from "./Products/Products";
import Sorting from "./Sorting/Sorting";
import Filtering from "./Filtering/Filtering";

import "./app.css";
import Title from "./Title/Title";
import { requestApiItems, requestApiCompanies } from "../actions";

const App = (props) => {
  useEffect(() => {
    props.requestApiCompanies();
  }, []);

  // sortingItems are passed to <Sorting /> to avoid hardcoding the sorting options inside the component
  const sortingItems = [
    {
      text: "Price low to high",
      action: () =>
        props.requestApiItems({
          payload: { sort: { by: "price", type: "asc" } },
        }),
    },
    {
      text: "Price high to low",
      action: () =>
        props.requestApiItems({
          payload: { sort: { by: "price", type: "desc" } },
        }),
    },
    {
      text: "New to old",
      action: () =>
        props.requestApiItems({
          payload: { sort: { by: "date", type: "desc" } },
        }),
    },
    {
      text: "Old to new",
      action: () =>
        props.requestApiItems({
          payload: { sort: { by: "date", type: "asc" } },
        }),
    },
  ];

  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <div>
          <Sorting items={sortingItems} selectedItem={sortingItems[0].text} />
          <Filtering
            items={props.companies.map((brand) => ({
              slug: brand.slug,
              name: brand.name,
            }))}
            title="Brands"
          />
          <Filtering
            items={[].map((brand) => ({
              slug: brand.slug,
              name: brand.name,
            }))}
            title="Tags"
          />
        </div>
        <ProductsWrapper>
          <Products />
        </ProductsWrapper>
      </ContentWrapper>
      {/* Footer */}
    </AppWrapper>
  );
};

const mapStateToProps = (state) => ({
  companies: state.companies,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiItems, requestApiCompanies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
