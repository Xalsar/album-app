import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { View, Text, TouchableOpacity } from "react-native";

const Header = ({ title, navigation }) => {
  const icon = navigation ? (
    <TouchableOpacity
      style={styles.leftArrow}
      onPress={() => {
        navigation.goBack(null);
      }}
    >
      <Icon name="arrowleft" size={25} color={"#39343a"} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.leftArrow}>
      <Icon name="home" size={25} color={"#39343a"} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.header}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = {
  header: {
    paddingTop: 14,
    paddingBottom: 26,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 23,
    textAlign: "center",
    color: "#39343a",
    fontFamily: "Roboto_400Regular",
  },
  leftArrow: {
    position: "absolute",
    left: 14,
    top: 17,
  },
};

export default Header;
