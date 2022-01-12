import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppWrapper, ContentWrapper } from "./App.styles";
import Header from "./Header/Header";
import Products from "./Products/Products";
import Sorting from "./Sorting/Sorting";
import Filtering from "./Filtering/Filtering";

import "./app.css";
import Title from "./Title/Title";
import { requestApiCompanies } from "../actions";

const sortingItems = [
  {
    text: "Price low to high",
    action: () => console.log("1"),
  },
  {
    text: "Price high to low",
    action: () => console.log("2"),
  },
  {
    text: "New to old",
    action: () => console.log("3"),
  },
  {
    text: "Old to new",
    action: () => console.log("4"),
  },
];

const App = (props) => {
  useEffect(() => {
    props.requestApiCompanies();
  }, []);

  // console.log(props.items);
  return (
    <AppWrapper>
      <Header />
      {/* Products > Sorting + Filtering + results (w/ pagination) */}
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
            // @todo clicking on one of the items will call the API.
            // here we need to throttle the request for 3 seconds.
            /*
            unrelated: set brands and tags when the App component mounts
            */
            items={[].map((brand) => ({
              slug: brand.slug,
              name: brand.name,
            }))}
            title="Tags"
          />
        </div>
        <div style={{ margin: "0 16px", maxWidth: "688px" }}>
          {/* not really 688, use calc and fix margins*/}
          <Title size="large" text="Products" style={{ width: "100%" }} />
          <Products />
        </div>
      </ContentWrapper>
      {/* Footer */}
    </AppWrapper>
  );
};

const mapStateToProps = (state) => ({
  companies: state.companies,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiCompanies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
