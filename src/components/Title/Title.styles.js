import styled from "styled-components";

export const TitleComponent = styled.p`
  font-size: ${({ size }) => size === "medium" && "13px"}
    ${({ size }) => size === "large" && "20px"};
  color: #697488;
  width: 100%;
  margin-bottom: 12px;
`;
