import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { useFonts, Koulen_400Regular } from "@expo-google-fonts/koulen";
import { useTranslation } from "react-i18next";

export default function Banner({t}) {
  let [fontsLoaded] = useFonts({
    Koulen_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  
  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textSmall}>{t('bannerText')}</Text>
        <Text style={styles.textBig}>{t('bannerDiscount')}</Text>
        <Text style={styles.textUnderline}>{t('bannerTextUnderline')}</Text>
      </View>
      <View style={styles.containerImageFirst}>
      <Image
          style={styles.imageBanner}
          source={require("../assets/chairBanner.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#87395C",
    width: "90%",
    borderRadius: 10,
    height: 130,
    marginTop: 30,
    justifyContent: "space-between",
    paddingLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  textSmall: {
    color: "white",
    fontSize: 20,
  },
  textBig: {
    color: "white",
    fontWeight: "400",
    fontFamily: "Koulen_400Regular",
    fontSize: 30,
  },
  textUnderline: {
    color: "white",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  containerImageFirst: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    marginRight: 50
  },
  imageBanner: {
    width: 120,
  },
});
