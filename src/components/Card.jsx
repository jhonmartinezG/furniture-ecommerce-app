import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts, Koulen_400Regular } from "@expo-google-fonts/koulen";
import { useNavigation } from "@react-navigation/native";

export default function Card({ data }) {
  let [fontsLoaded] = useFonts({
    Koulen_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Detail", { data: data });
      }}
    >
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: data.images[0],
          }}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.nameText}>{data.title}</Text>
        <Text style={styles.priceText}>${data.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 280,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    marginRight: 20,
  },
  containerImage: {
    width: "90%",
    height: "60%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 150,
    height: 150,
  },
  containerText: {
    marginTop: 20,
    width: "90%",
    height: "30%",
  },
  nameText: {
    fontSize: 18,
    color: "#898989",
  },
  priceText: {
    fontSize: 22,
    color: "#4398D1",
    fontFamily: "Koulen_400Regular",
  },
  boton: {
    backgroundColor: "black",
    color: "white",
    width: 10,
    height: 10,
  },
});
