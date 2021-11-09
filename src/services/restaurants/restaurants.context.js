// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for
// certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.
// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

import React, { useState, createContext, useEffect, useMemo } from "react";
import { RestaurantsRequest, restaurantTransform } from "./restaurants.service";

// This will create a global contexxt for us in react.
export const RestaurantsContext = createContext();

//This will be the thing that wraps the app and provides it certain state
export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
