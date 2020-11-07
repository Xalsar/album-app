import React from "react";
import { LinearGradient } from "expo";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const AlbumList = (props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Album 1</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            padding: 10,
            borderRadius: 8,
          }}
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
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
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
    fontSize: 22,
  },
  item: {
    width: 85,
    height: 85,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
};

export default AlbumList;
