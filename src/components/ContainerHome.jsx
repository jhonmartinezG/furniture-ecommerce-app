import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Touchable,
} from "react-native";
import Title from "../components/Title";
import InputSearch from "../components/InputSearch";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Card from "../components/Card";
import CardsContainer from "../components/CardsContainer";
import ButtonTranslate from "../components/ButtonTranslate";

export default function ContainerHome() {
  return (
    <SafeAreaView style={styles.container}>
      <ButtonTranslate />
      <Title text={"Find the best furniture"} />
      <InputSearch placeholder={"Search"} />
      <Banner />
      <Categories />
      <CardsContainer />
    </SafeAreaView>
  );
}
