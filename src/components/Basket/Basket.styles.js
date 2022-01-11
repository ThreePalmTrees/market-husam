import styled from "styled-components";

export const BasketWrapper = styled.div`
  font-size: 14px;
  background: #147594;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 24px;
  position: absolute;
  right: 104px;
  user-select: none;
  ${({ isOpen }) => isOpen && "border: 1px solid red;"}// for the cart
`;

export const BasketIcon = styled.div`
  margin-right: 12px;
  background: #fff;
  position: relative;
  width: 14px;
  height: 14px;
  margin-top: 4px;

  &:after {
    border: 1px solid;
  }

  &:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 6px;

    border-bottom: 0;
    top: -5px;
    left: 3px;
    border-color: #fff;
    border-radius: 2px;
  }
`;
