import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="lightblue" />
  </View>
);

const styles = {
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
};

export default Loading;
