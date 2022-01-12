import React, { useState } from "react";
import { SortingWrapper } from "./Sorting.styles";
import Title from "../Title/Title";

const Sorting = ({ items, selectedItem }) => {
  const [sortingRule, setSortingRule] = useState(selectedItem);
  return (
    <SortingWrapper>
      <Title size="medium" text="Sorting" />
      <div style={{ background: "#fff", padding: "24px" }}>
        {items.map((item) => {
          const itemId = item.text.replace(/' '/g, "_");
          return (
            <div key={item.text} style={{ marginBottom: "18px" }}>
              {" "}
              {/* todo: remove margin bottom from last */}
              <input
                type="radio"
                id={itemId}
                checked={sortingRule === item.text}
                name="sorting"
                onChange={() => setSortingRule(item.text)} // @todo: requestApiItems({ payload: { sort: { by: "date", type: "desc" } } })
              />
              <label htmlFor={itemId}> {item.text}</label>
            </div>
          );
        })}
      </div>
    </SortingWrapper>
  );
};

export default Sorting;
