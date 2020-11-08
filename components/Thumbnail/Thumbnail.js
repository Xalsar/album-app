import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

const Thumbnail = ({ url, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={{
          width: 100,
          height: 100,
          uri: url,
        }}
        style={styles.item}
      />
    </TouchableOpacity>
  );
};

const styles = {
  item: {
    width: 85,
    height: 85,
    backgroundColor: "lightblue",
    borderRadius: 15,
  },
};

export default Thumbnail;
