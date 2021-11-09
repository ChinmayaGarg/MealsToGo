import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";

// console.log(StatusBar.currentHeight);
const isAndroid = Platform.OS === "android";

export const First_exercise_screen = () => (
  <>
    <SafeAreaView style={styles.container}>
      {/*We gave flex:1 because this will grow according to the contents inside it(child) without flex, but we want it to fill the whole parent*/}

      <View style={styles.search}>
        {/*We will not give flex property to the view because we want it to grow dynamically, as per the requirements.*/}
        <Searchbar />
      </View>

      <View style={styles.list}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
  </>
);

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 },
  search: {
    // backgroundColor: "green",
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1, // This will not let list overflow to the safeArea but {height: "100%"} would have made it overflow in the safe area
    // flex makes the component stick to the constraints of the screen
  },
});
