import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const myHeader = () => {
  return (
    <View style={styles.container} >
      <Text 
      style={styles.title} >dukkan</Text>
    </View>
  )
}

export default myHeader

const styles = StyleSheet.create({
    container: {
        height: hp(8),
        width: wp(100),
        backgroundColor: "white",
        justifyContent: "center"
    },
    title: {
      marginLeft: wp(5),
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: hp(4),
      color: "#D0B8AC"
    }
})