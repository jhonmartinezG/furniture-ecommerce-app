import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";
import InputSearch from "../components/InputSearch";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CardsContainer from "../components/CardsContainer";
import ButtonTranslate from "../components/ButtonTranslate";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default function Home() {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation()
  return (
    <SafeAreaView style={styles.container}>
      <ButtonTranslate />
      <Title text={t('titleHome')} />
      <InputSearch placeholder={t('placeholder')} />
      <Banner t={t} />
      <Categories />
      <CardsContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingLeft: 30,
  },
});
