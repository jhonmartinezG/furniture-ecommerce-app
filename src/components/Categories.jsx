import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";


export default function Categories() {

  const [categories, setCategories] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const json = await response.json();
      console.log(json)
      setCategories(json)
    } catch (error) {
      console.error(error);
  };
}

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text style={styles.items}>{item.name}</Text>}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 30
  },
  items: {
    paddingHorizontal:  10,
    fontSize: 18,
    color: '#898989'
  },
});
