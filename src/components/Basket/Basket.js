import React, { useState } from "react";
import { BasketWrapper, BasketIcon } from "./Basket.styles";

const items = [1, 2, 3];

const Basket = ({ totalAmount }) => {
  const [isOpen, setIsOpen] = useState(true);
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
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 40px)",
            right: "0",
            color: "#000",
            background: "#fff",
            border: "6px solid #1ea4ce",
            minHeight: "321px",
            minWidth: "280px",
            padding: "26px",
          }}
        >
          {/* items.map(item => render item ...) */}
          {items.map((item) => (
            <div
              style={{
                display: "flex",
                textAlign: "left",
                justifyContent: "space-between",
                marginBottom: "35px",
              }}
            >
              <div>
                <p>PRODUCT NAME</p>
                <p>PRICE</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#1EA4CE",
                    marginRight: "11px",
                    fontSize: "30px",
                  }}
                >
                  -
                </p>
                <p
                  style={{
                    background: "#1EA4CE",
                    color: "#fff",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    color: "#1EA4CE",
                    marginLeft: "11px",
                    fontSize: "30px",
                  }}
                >
                  +
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </BasketWrapper>
  );
};

export default Basket;
