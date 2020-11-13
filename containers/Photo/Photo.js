import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import ImageViewer from "react-native-image-zoom-viewer";
import capitalize from "../../utilities/capitalize";

const Photo = ({ route, navigation }) => {
  const { id } = route.params;
  const [photo, setPhoto] = useState();
  const [error, setError] = useState(false);
  const [zoom, setZoom] = useState(false);

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

  const image = [
    {
      url: photo.url,
    },
  ];

  return (
    <ScrollView>
      <Header title={"Photo"} navigation={navigation} />
      <TouchableOpacity onPress={() => setZoom(true)}>
        <Image
          style={{ width: 300, height: 300, backgroundColor: "lightblue" }}
          source={{
            uri: photo.url,
          }}
        />
      </TouchableOpacity>
      {zoom ? (
        <Modal visible={true} transparent={true}>
          <ImageViewer
            imageUrls={image}
            renderIndicator={() => null}
            enableSwipeDown={true}
            onCancel={() => setZoom(false)}
          />
        </Modal>
      ) : undefined}
      <Text style={styles.title}>{capitalize(photo.title)}</Text>
    </ScrollView>
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
