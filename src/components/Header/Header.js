import React from "react";
import { HeaderBanner, Logo } from "./Header.styles";
import Basket from "../Basket/Basket";

const Header = () => {
  return (
    <HeaderBanner>
      {/* @todo: css: tablet view: display logo on the left */}
      <Logo>market</Logo>
      {/* @todo: css: tablet view: less margin-right / right for basket */}
      <Basket isOpen={true} totalAmount={123.45} />
    </HeaderBanner>
  );
};

export default Header;
