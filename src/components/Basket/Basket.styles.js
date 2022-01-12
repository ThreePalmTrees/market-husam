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

export const BasketItemsWrapper = styled.div`
  position: absolute;
  top: calc(100% + 40px);
  right: 0;
  color: #000;
  background: #fff;
  border: 6px solid #1ea4ce;
  min-height: 321px;
  min-width: 280px;
  padding: 8px 26px;
`;

export const BasketItem = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
  padding: 18px 0;
`;

export const BasketItemControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IncrementDecrementButton = styled.button`
  background: none;
  border: 0;
  color: #1ea4ce;
  // margin-right: 11px;
  ${({ placement }) => {
    if (placement === "left") {
      return "margin-right: 11px";
    } else if (placement === "right") {
      return "margin-left: 11px";
    }
  }};
  font-size: 30px;
`;

export const ItemCount = styled.p`
  background: #1ea4ce;
  color: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
