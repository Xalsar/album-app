import React from "react";
import { View, Image } from "react-native";

const AlbumList = ({ url }) => {
  return (
    <Image
      source={{
        width: 100,
        height: 100,
        uri: url,
      }}
      style={styles.item}
    />
  );
};

const styles = {
  item: {
    width: 85,
    height: 85,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
};

export default AlbumList;
