import React, { useEffect } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import { AppWrapper, ContentWrapper } from "./App.styles";
import Header from "./Header/Header";
import Products from "./Products/Products";
import Sorting from "./Sorting/Sorting";
import Filtering from "./Filtering/Filtering";

import "./app.css";
import Title from "./Title/Title";
import { requestApiItems } from "../actions";

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

const brands = [
  {
    slug: "Dickens-Franecki",
    name: "Dickens - Franecki",
    address: "12158 Randall Port",
    city: "East Maureenbury",
    state: "NE",
    zip: "74529",
    account: 31010023,
    contact: "Lonzo Stracke",
  },
  {
    slug: "Weissnat-Schowalter-and-Koelpin",
    name: "Weissnat, Schowalter and Koelpin",
    address: "92027 Murphy Cove",
    city: "Port Malachi",
    state: "WY",
    zip: "56670-0684",
    account: 81813543,
    contact: "Kathryne Ernser",
  },
  {
    slug: "Cruickshank-Bayer-and-Gerlach",
    name: "Cruickshank, Bayer and Gerlach",
    address: "45974 Paxton Corner",
    city: "Gerlachmouth",
    state: "OR",
    zip: "67061",
    account: 43249604,
    contact: "Bernhard Greenholt",
  },
  {
    slug: "Boyle-LLC",
    name: "Boyle LLC",
    address: "54371 Mikel Spurs",
    city: "South Josephland",
    state: "SD",
    zip: "49608",
    account: 75111551,
    contact: "Roxanne Walsh",
  },
  {
    slug: "Bernier-Hane",
    name: "Bernier - Hane",
    address: "45929 Chaya Lane",
    city: "Hettingerchester",
    state: "GA",
    zip: "30052-7026",
    account: 98542630,
    contact: "Thea Gleichner",
  },
  {
    slug: "OHara-Group",
    name: "O'Hara Group",
    address: "582 Metz Harbor",
    city: "North Columbus",
    state: "HI",
    zip: "12645-4049",
    account: 8697837,
    contact: "Madalyn Prohaska",
  },
  {
    slug: "Bayer-and-Sons",
    name: "Bayer and Sons",
    address: "1577 Waters Alley",
    city: "New Sabrinahaven",
    state: "AR",
    zip: "86634",
    account: 43975119,
    contact: "Buck Hickle",
  },
];

const products = [
  {
    tags: ["Trees"],
    price: 10.99,
    name: "Handcrafted Trees Mug",
    description:
      "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
    slug: "Handcrafted-Trees-Mug",
    added: 1485723766805,
    manufacturer: "OHara-Group",
    itemType: "mug",
  },
  {
    tags: ["Beach", "Ocean", "Water"],
    price: 19.99,
    name: "Rustic Beach Mug",
    description:
      "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
    slug: "Rustic-Beach-Mug",
    added: 1481573896833,
    manufacturer: "Sipes-Inc",
    itemType: "mug",
  },
  {
    tags: ["Animal", "Bear"],
    price: 17.99,
    name: "Handcrafted Bear Mug",
    description:
      "vitae mollitia et in accusantium est voluptas officiis est non",
    slug: "Handcrafted-Bear-Mug",
    added: 1485991071829,
    manufacturer: "Weissnat-Schowalter-and-Koelpin",
    itemType: "mug",
  },
  {
    tags: ["Road"],
    price: 15.99,
    name: "Refined Road Mug",
    description:
      "explicabo fugit magnam fugit dolorem itaque unde quidem est quia ut a veritatis sit facere possimus fugit ipsam",
    slug: "Refined-Road-Mug",
    added: 1482213983048,
    manufacturer: "Bernier-Hane",
    itemType: "mug",
  },
  {
    tags: ["Ocean", "Rocks"],
    price: 10.99,
    name: "Unbranded Ocean Mug",
    description:
      "facilis aut velit vitae sit dolorum illum nostrum pariatur dolorem vel atque quasi placeat qui",
    slug: "Unbranded-Ocean-Mug",
    added: 1483408192004,
    manufacturer: "Franecki---Gaylord",
    itemType: "mug",
  },
  {
    tags: ["Sunset", "Beach", "Ocean"],
    price: 9.99,
    name: "Rustic Ocean Mug",
    description:
      "libero reprehenderit blanditiis quidem laborum ullam quae fuga consequuntur minima praesentium consequatur qui excepturi nostrum tempora sunt deleniti",
    slug: "Rustic-Ocean-Mug",
    added: 1485511118573,
    manufacturer: "Bayer-and-Sons",
    itemType: "mug",
  },
  {
    tags: ["Rust", "Old", "Car"],
    price: 19.99,
    name: "Sleek Old Mug",
    description:
      "necessitatibus suscipit iure quia voluptates voluptas quidem ipsum laboriosam adipisci",
    slug: "Sleek-Old-Mug",
    added: 1485759837725,
    manufacturer: "Boyle-LLC",
    itemType: "mug",
  },
  {
    tags: ["Coffee"],
    price: 14.99,
    name: "Sleek Coffee Mug",
    description:
      "et adipisci explicabo consequatur rerum voluptas dolorem qui omnis vel",
    slug: "Sleek-Coffee-Mug",
    added: 1479259996312,
    manufacturer: "Franecki---Gaylord",
    itemType: "mug",
  },
  {
    tags: ["Trees", "Fog", "People"],
    price: 16.99,
    name: "Rustic Trees Mug",
    description:
      "ut architecto est similique sit nostrum sit sed ipsa itaque aliquam nesciunt reprehenderit et neque aut id nulla dolore sed sit facere eligendi",
    slug: "Rustic-Trees-Mug",
    added: 1480664800826,
    manufacturer: "Weissnat-Schowalter-and-Koelpin",
    itemType: "mug",
  },
  {
    tags: ["Sunset", "Ocean", "Dock"],
    price: 18.99,
    name: "Sleek Ocean Mug",
    description:
      "magnam maxime nostrum minima dolores repellat laborum pariatur et quia maiores quidem eos quod est voluptas voluptatem quia ipsum odit dolorem et blanditiis aut voluptates",
    slug: "Sleek-Ocean-Mug",
    added: 1485278625462,
    manufacturer: "Cruickshank-Bayer-and-Gerlach",
    itemType: "mug",
  },
  {
    tags: ["Person", "Hills", "Animals", "Sheep"],
    price: 16.99,
    name: "Ergonomic Person Mug",
    description:
      "sunt id omnis nihil consectetur et porro ut molestias ab et rem quia omnis voluptatem est libero reiciendis voluptatem dolores excepturi",
    slug: "Ergonomic-Person-Mug",
    added: 1485835498313,
    manufacturer: "Rice-Inc",
    itemType: "mug",
  },
  {
    tags: ["Fog", "Lake", "Water"],
    price: 9.99,
    name: "Gorgeous Water Mug",
    description:
      "perspiciatis in qui et nemo nisi ad quam consequatur et dignissimos",
    slug: "Gorgeous-Water-Mug",
    added: 1485880263998,
    manufacturer: "Boyle-LLC",
    itemType: "mug",
  },
  {
    tags: ["Person", "Fog"],
    price: 14.99,
    name: "Generic Fog Mug",
    description:
      "consectetur voluptas sint excepturi voluptas aut culpa qui excepturi dicta ut voluptas",
    slug: "Generic-Fog-Mug",
    added: 1484633915311,
    manufacturer: "McCullough---Lueilwitz",
    itemType: "mug",
  },
  {
    tags: ["Building", "Metal"],
    price: 11.99,
    name: "Gorgeous Building Mug",
    description:
      "quisquam maxime laudantium error totam unde commodi ullam qui quo sed aperiam",
    slug: "Gorgeous-Building-Mug",
    added: 1482336621275,
    manufacturer: "Sipes-Inc",
    itemType: "mug",
  },
  {
    tags: ["Sunset", "Person", "Woman", "Meadow"],
    price: 10.99,
    name: "Intelligent Sunset Mug",
    description:
      "qui ipsa hic voluptas et rem sed architecto reiciendis labore saepe fugit ab sed sed quos ut adipisci accusantium molestias",
    slug: "Intelligent-Sunset-Mug",
    added: 1484735389245,
    manufacturer: "Bernier-Hane",
    itemType: "mug",
  },
];

const tags = products.reduce((acc, { tags }) => {
  tags.forEach((tag) => {
    if (!acc.includes(tag)) {
      acc.push(tag);
    }
  });
  return acc;
}, []);
console.log(tags);

const App = (props) => {
  // useEffect(() => {
  //   props.requestApiItems();
  // }, []);

  // console.log(props.items);
  return (
    <AppWrapper>
      <Header />
      {/* Products > Sorting + Filtering + results (w/ pagination) */}
      <ContentWrapper>
        <div>
          <Sorting items={sortingItems} selectedItem={sortingItems[0].text} />
          <Filtering
            items={brands.map((brand) => ({
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
            items={brands.map((brand) => ({
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

// const mapStateToProps = (state) => ({
//   items: state.items,
// });
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ requestApiItems }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
