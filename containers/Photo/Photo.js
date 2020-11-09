import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Image, Animated, Dimensions } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import capitalize from "../../utilities/capitalize";

const screen = Dimensions.get("window");

const Photo = ({ route, navigation }) => {
  const { id } = route.params;
  const [photo, setPhoto] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(({ data }) => setPhoto(data))
      .catch((error) => setError(error));
  }, []);

  if (!photo) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  const scale = new Animated.Value(1);

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale: scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View>
      <Header title={"Photo"} navigation={navigation} />
      <PinchGestureHandler
        onGestureEvent={onPinchEvent}
        onHandlerStateChange={onPinchStateChange}
      >
        <Animated.Image
          source={{ uri: photo.url }}
          style={{
            width: screen.width,
            height: 300,
            transform: [{ scale: scale }],
          }}
          resizeMode="contain"
        />
      </PinchGestureHandler>
      <Text style={styles.title}>{capitalize(photo.title)}</Text>
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
    fontFamily: "Roboto_400Regular",
    color: "#2c272d",
    zIndex: -2,
  },
};

export default Photo;
