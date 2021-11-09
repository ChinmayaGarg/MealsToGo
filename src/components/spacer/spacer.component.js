import React from "react";
import styled, { useTheme } from "styled-components/native";
import { View } from "react-native";

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

// export const Spacer = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;
// The above code breaks for android because, here we are running a dynamic function inside the render body of the styled view but we need to seperate the 2 out.
// To seperate the two, 1. we made a styled component SpacerView which returns static prop variant.
// 2. To return the static prop of 1. we have to calculate somewhere, we did it in Spacer in step 2.

// Step 1:
const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

// Step 2:
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme(); // we can use the theme of ThemeProvider.
  const variant = getVariant(position, size, theme); // we calculated the variant ahead of time and then we are passing it in SpacerView. {children} is used so if any children is given, it renders out them as well.
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
