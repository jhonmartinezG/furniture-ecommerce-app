import { View, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './Card'

/*const DATA = [
{
    name: 'Silla Morada test',
    price: 1800,
    imageUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/PoltronaNube_1_500x500_crop_center.jpg?v=1665074889"
},
{
    name: 'Silla 2',
    price: 150,
    imageUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/PoltronaNube_1_500x500_crop_center.jpg?v=1665074889"
},
{
    name: 'Silla 3',
    price: 150,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0318/3188/3907/products/PoltronaNube_1_500x500_crop_center.jpg?v=1665074889'
},
{
    name: 'Silla 4',
    price: 150,
    imageUrl: "https://cdn.shopify.com/s/files/1/0318/3188/3907/products/PoltronaNube_1_500x500_crop_center.jpg?v=1665074889" }
] */




export default function CardsContainer() {

  const [data, setData] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const json = await response.json();
      console.log(json)
      setData(json)
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
        data={data}
        renderItem={({ item }) => <Card data={item} />}
        horizontal={true}
        scrollEnabled={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
})