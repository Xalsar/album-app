import React, { useState, useEffect } from "react";
import axios from "axios";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import capitalize from "../../utilities/capitalize";
import Icon from "react-native-vector-icons/Fontisto";

const AlbumItem = ({ id, title, navigation }) => {
  const [thumbnails, setThumbnails] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(({ data }) => {
        setThumbnails(data.slice(0, 9));
      })
      .catch((error) => setError(error));
  }, []);

  if (thumbnails.length === 0) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  const thumbnailSet1 = thumbnails.slice(0, 3);
  const thumbnailSet2 = thumbnails.slice(3, 6);
  const thumbnailSet3 = thumbnails.slice(6, 9);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.navigate("Album", {
            id,
            title,
          });
        }}
      >
        <Text style={styles.title}>{capitalize(title)}</Text>
        <View>
          <Icon name="nav-icon-grid-a" size={17} color="#2c272d" />
        </View>
      </TouchableOpacity>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ width: `${100 * 3}%` }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
      >
        {[thumbnailSet1, thumbnailSet2, thumbnailSet3].map((set, id1) => {
          return (
            <View key={id1} style={styles.thumbnailsContainer}>
              {set.map((thumbnail, id) => (
                <Thumbnail
                  key={id}
                  url={thumbnail.thumbnailUrl}
                  handlePress={() => {
                    navigation.navigate("Photo", {
                      id: thumbnail.id,
                    });
                  }}
                />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: 34,
    paddingBottom: 34,
    borderBottomWidth: 1.5,
    borderBottomColor: "#ededed",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  title: {
    fontSize: 17,
    maxWidth: "70%",
    fontFamily: "Roboto_400Regular",
    color: "#2c272d",
  },
  thumbnailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexBasis: "33.3%",
    flex: 1,
    maxWidth: "33.3%",
    paddingRight: 2,
    paddingLeft: 2,
  },
};

export default AlbumItem;
