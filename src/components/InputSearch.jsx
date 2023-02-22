import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'

export default function InputSearch({placeholder}) {
  return (
    <View >
      <TextInput style={styles.input} placeholder= {placeholder}
        keyboardType="text" />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: '90%',
      padding: 10,
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: '#F2F2F2',
      fontSize: 18,
      borderRadius: 10,
      marginTop: 30
    },
  });