import React from "react";
import { View, Text, Image } from "react-native";
import capitalize from "../../utilities/capitalize";

const Photo = ({ route }) => {
  const { title, url } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{
          width: 300,
          height: 300,
          uri: url,
        }}
        fadeDuration={1000}
      />
      <Text style={styles.title}>{capitalize(title)}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
  },
};

export default Photo;
