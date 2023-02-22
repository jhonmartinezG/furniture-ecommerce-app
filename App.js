import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import Navigation from "./src/Navigation";
import i18n from "./src/languages/i18n";

export default function App() {
  return <Navigation />;
}
