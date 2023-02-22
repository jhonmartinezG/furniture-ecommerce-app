import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { useTranslation } from "react-i18next";

export default function ButtonTranslate() {
  const options = [
    { label: "En", value: "en" },
    { label: "Es", value: "es" }
  ];

  const {t, i18n} = useTranslation()

  return (
    <View style={styles.containerButton}>
      <SwitchSelector
        options={options}
        initial={0}
        backgrounColor= {'#71C4FC1A'}
        onPress={(language) => {i18n.changeLanguage(language)}}
        style={styles.container}
        textColor={'#4398D1'}
        buttonColor={'#4398D1'}
        borderColor={'#4398D1'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: '70%',
    marginBottom: 20
  }
});
