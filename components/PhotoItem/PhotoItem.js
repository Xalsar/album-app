import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Thumbnail from "../Thumbnail/Thumbnail";
import capitalize from "../../utilities/capitalize";
import Loading from "../Loading/Loading";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

const PhotoItem = ({ children, handlePress, url }) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  const content = !fontsLoaded ? (
    <Loading />
  ) : (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Thumbnail url={url} />
        <Text style={styles.title}>{capitalize(children)}</Text>
      </View>
    </TouchableOpacity>
  );

  return content;
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    paddingBottom: 24,
    paddingLeft: 3,
    paddingRight: 3,
    borderBottomWidth: 1.5,
    borderBottomColor: "#ededed",
  },
  title: {
    maxWidth: "60%",
    lineHeight: 20,
    textAlign: "right",
    fontFamily: "Roboto_400Regular",
    color: "#2c272d",
  },
};

export default PhotoItem;
