import React, { useState } from "react";
import {
  BasketWrapper,
  BasketIcon,
  BasketItemsWrapper,
  BasketItem,
  ItemControls,
  IncrementDecrementButton,
  ItemCount,
} from "./Basket.styles";

const items = [1, 2, 3];

const Basket = ({ totalAmount }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BasketWrapper
      isOpen={isOpen}
      className="foo"
      onClick={(e) => {
        if (e.target.classList.contains("foo")) {
          setIsOpen(!isOpen);
        }
      }}
    >
      <BasketIcon className="foo" />
      {totalAmount ? (
        <span className="foo">₺ {totalAmount}</span>
      ) : (
        <p>Basket</p>
      )}
      {isOpen && (
        <BasketItemsWrapper>
          {items.map((item, i) => (
            <BasketItem key={`${item.name}-${i}`}>
              <div>
                <p>PRODUCT NAME</p>
                <p>PRICE</p>
              </div>
              <ItemControls>
                <IncrementDecrementButton placement="left">
                  -
                </IncrementDecrementButton>
                <ItemCount>1</ItemCount>
                <IncrementDecrementButton placement="right">
                  +
                </IncrementDecrementButton>
              </ItemControls>
            </BasketItem>
          ))}
        </BasketItemsWrapper>
      )}
    </BasketWrapper>
  );
};

export default Basket;
