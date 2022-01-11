import React from "react";
import { TitleComponent } from "./Title.styles";

/**
 * @param {string} size medium | large
 * @param {string} text
 * @returns JSX.Element
 */
const Title = ({ size, text }) => (
  <TitleComponent size={size}>{text}</TitleComponent>
);

export default Title;
