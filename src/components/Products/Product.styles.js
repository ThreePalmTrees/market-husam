import styled from "styled-components";

export const ProductsPageWrapper = styled.div`
  padding: 10px;
  max-width: 596px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: #fff;
  box-shadow: 0px 4px 24px rgb(93 62 188 / 4%);
  font-size: 14px;
  // margin: 16px;
  justify-content: center;
  // justify-content: flex-start;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  width: 124px;
  height: 225px;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  padding: 14px;
  border: 1px solid #e8e6f2;
  border-radius: 12px;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductPrice = styled.p`
  color: #1ea4ce;
  & span {
    font-weight: 700;
  }
`;

export const ProductName = styled.p``;

export const AddProductButton = styled.button`
  background: #1ea4ce;
  height: 22px;
  border: 0;
  color: #fff;
  padding: 6px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

// actual products, desktop: 4 products, tablet: 3 products, phone 2 products
// sorting & filtering: hidden on phone (render button to show them)
// pagination: phone: Previous - %{first} - %{current} - ... - %{last} - Next
