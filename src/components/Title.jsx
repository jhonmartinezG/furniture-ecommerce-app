import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts, Koulen_400Regular  } from '@expo-google-fonts/koulen';

export default function Title({ text }) {
    let [fontsLoaded] = useFonts({
        Koulen_400Regular,
      });

      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
},
  text: {
    textTransform: "uppercase",
    color: "#4398D1",
    fontWeight: '400',
    fontFamily: "Koulen_400Regular",
    fontSize: 26,
  },
});
