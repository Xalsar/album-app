import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumItem from "../../components/AlbumItem/AlbumItem";
import Loading from "../../components/Loading/Loading";

const AlbumList = ({ navigation }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums?userId=1")
      .then(({ data }) => {
        setAlbums(data);
      });
  }, []);

  const content =
    albums.length === 0 ? (
      <Loading />
    ) : (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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

  return content;
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff !important",
  },
};

export default AlbumList;
