import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumItem from "../../components/AlbumItem/AlbumItem";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const AlbumList = ({ navigation }) => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums?userId=1")
      .then(({ data }) => {
        setAlbums(data);
      })
      .catch((error) => setError(error));
  }, []);

  if (albums.length === 0) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title={"Home"} />
      {albums.map((album, id) => (
        <AlbumItem
          key={id}
          id={album.id}
          title={album.title}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff !important",
  },
};

export default AlbumList;
