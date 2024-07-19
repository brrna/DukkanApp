import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { API_URL } from '@env';

const Products = () => {

  const apiUrl = API_URL

  return (
    <SafeAreaView style={styles.container} >
      <Text>Products</Text>
      <Text>{apiUrl}</Text>
    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    }
})