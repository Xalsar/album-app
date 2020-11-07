import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Thumbnail from "../Thumbnail/Thumbnail";

const PhotoItem = ({ children }) => {
  const capitalized = children.charAt(0).toUpperCase() + children.slice(1);

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Thumbnail />
        <Text style={styles.title}>{capitalized}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  title: {
    maxWidth: "60%",
    lineHeight: 20,
  },
};

export default PhotoItem;
