import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#2c272d" />
  </View>
);

const styles = {
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
};

export default Loading;
