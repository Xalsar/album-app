import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Text, View, TouchableOpacity } from "react-native";
import capitalize from "../../utilities/capitalize";

const AlbumItem = (props) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{capitalize(props.title)}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            padding: 10,
            borderRadius: 8,
          }}
          onPress={props.handlePress}
        >
          <Text>See more</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </View>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    maxWidth: "70%",
  },
};

export default AlbumItem;
