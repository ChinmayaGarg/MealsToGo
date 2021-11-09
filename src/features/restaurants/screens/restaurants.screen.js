import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList, View } from "react-native";
import styled from "styled-components";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

//we are able to use ${(props) => props.theme.colors.bg.primary} because every styled component gets the theme object on their prop
// Just like while rendering component else where we can get props from the outside, a styled component gets the theme automatically injected to itself
// const RestaurantListContainer = styled(View)`
//   background-color: ${(props) => props.theme.colors.bg.primary};
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;

export const RestaurantScreen = () => {
  //useContext hook helps access the values from the Context Provider, in this case imported RestaurantsContextProvider in the App.js
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
