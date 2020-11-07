import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AlbumList from "./containers/AlbumsList/AlbumsList";
import Album from "./containers/Album/Album";
import Photo from "./containers/Photo/Photo";
import { StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerMode: "screen",
            cardStyle: { backgroundColor: "#FFFFFF" },
          }}
        >
          <Stack.Screen name="Home" component={AlbumList} />
          <Stack.Screen name="Album" component={Album} />
          <Stack.Screen name="Photo" component={Photo} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 40,
  },
});
