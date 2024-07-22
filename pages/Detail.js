import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyBackHandler from "../components/MyBackHandler"


const Detail = () => {
  return (
    <SafeAreaView style={styles.frame} >
      <StatusBar />
      <MyBackHandler />
      <View style={styles.container} >
        <Text>detail</Text>

      </View>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "orange",
    height: hp(93),
    width: wp(100),
    justifyContent: "center",
    alignItems: "center"
  }
})