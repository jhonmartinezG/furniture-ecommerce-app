import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import ButtonTranslate from "../components/ButtonTranslate";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Koulen_400Regular } from "@expo-google-fonts/koulen";

export default function DetailItem({ route }) {
  let [fontsLoaded] = useFonts({
    Koulen_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigation = useNavigation();
  const { data } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ButtonTranslate />
      <View style={styles.containerImage}>
        <View style={styles.containerIcons}>
          <MaterialCommunityIcons
            name={"keyboard-backspace"}
            size={28}
            color="#0D99FF"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <MaterialCommunityIcons
            name={"heart-outline"}
            size={28}
            color="#0D99FF"
          />
        </View>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: data.images[0],
            }}
          />
        </View>
      </View>
      <View style={styles.containerContent}>
        <View style={styles.containerInfo}>
          <Text style={styles.textName}>{data.title}</Text>
          <Text style={styles.textPrice}>${data.price}</Text>
        </View>
        <View style={styles.containerSubtitles}>
          <Text style={styles.textSubtitle}>Details</Text>
          <Text>{data.description}</Text>
          <Text style={styles.textSubtitle}>Qty</Text>
          <Text>{data.creationAt}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  containerIcons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  containerImage: {
    height: 400,
    backgroundColor: "#71C4FC1A",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90%",
  },
  image: {
    width: 300,
    height: 300,
  },
  containerInfo: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textName: {
    color: "#898989",
    fontSize: 20,
    fontWeight: "500",
  },
  textPrice: {
    fontFamily: "Koulen_400Regular",
    fontSize: 26,
    color: "#4398D1",
  },
  textSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#898989",
  },
  containerContent: {
    paddingHorizontal: 30
  },
  containerSubtitles: {
    justifyContent: 'space-between',
    height: '50%',
    paddingBottom: 30
  }
});
