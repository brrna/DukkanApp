import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'

const Products = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>Products</Text>
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