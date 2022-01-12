import React from "react";
import Title from "../Title/Title";
import { FilteringWrapper } from "./Filtering.styles";

/**
 * @param {array} items array of objects, eg: [{brand: 'foo'}]
 * @param {string} selected.identifier string correlates to a property in the `items` array, eg: 'brands'
 * @param {array} selected.items array of strings that will be selected by default
 * @returns JSX.Element
 */
const Filtering = ({ items, selected, title }) => {
  return (
    <FilteringWrapper>
      <Title size="medium" text={title} />
      <div
        style={{
          background: "#fff",
          padding: "24px",
          height: "244px",
          overflowY: "scroll",
        }}
      >
        <input
          type="text"
          placeholder={`Search ${title}`}
          style={{
            padding: "12px 16px",
            border: "2px solid #E0E0E0",
            width: "100%",
            marginBottom: "24px",
          }}
        />

        <div
          style={{
            overflowY: "scroll",
            position: "relative",
          }}
        >
          <input type="checkbox" id={`all-${title}`} />
          <label htmlFor={`all-${title}`}>All</label> ({items.length})
          {items.map((item, i) => (
            <div key={`${item.name}-${i}`} style={{ marginBottom: "18px" }}>
              <input type="checkbox" id={item.slug} data-slug={item.slug} />
              <label htmlFor={item.slug}>{item.name}</label>
            </div>
          ))}
        </div>
      </div>
    </FilteringWrapper>
  );
};

export default Filtering;
