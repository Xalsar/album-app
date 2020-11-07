import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Thumbnail from "../Thumbnail/Thumbnail";
import capitalize from "../../utilities/capitalize";

const PhotoItem = ({ children, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Thumbnail />
        <Text style={styles.title}>{capitalize(children)}</Text>
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
    textAlign: "right",
  },
};

export default PhotoItem;
