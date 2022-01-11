import React from "react";
import Sorting from "../Sorting/Sorting";
import Title from "../Title/Title";
import {
  ProductsPageWrapper,
  ProductItem,
  ProductImageWrapper,
  ProductImage,
  ProductPrice,
  ProductName,
  AddProductButton,
} from "./Product.styles";

const items = [
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
];

const Products = () => {
  /** State
   * ""mug "shirt" thing
   * sorting
   * selected brands
   * selected tags
   * current page
   */

  // Clicking "Add" on product adds it to the basket, or increments if already existing.

  return (
    <ProductsPageWrapper>
      {/* <Title size="large" style={{ width: "100%" }}>
        Products // shouldn't be part of the Products component
      </Title> */}
      {items.map((item, i) => (
        <ProductItem key={item.name}>
          <ProductImageWrapper>
            <ProductImage
              src={`https://picsum.photos/200?sig=${i}`}
              alt={item.name}
            />
          </ProductImageWrapper>
          <ProductPrice>
            ₺ <span>{item.price}</span>
          </ProductPrice>
          <ProductName>{item.name}</ProductName>
          <AddProductButton>Add</AddProductButton>
        </ProductItem>
      ))}
    </ProductsPageWrapper>
  );
};

export default Products;
