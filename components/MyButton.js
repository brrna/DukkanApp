import { Pressable, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const MyButton = ({ onPress, loading }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.frame} >
      <Pressable
        style={styles.button}
        onPress={onPress} >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.text} >Sign In</Text>
        )}
      </Pressable>
    </View>
  )
}

export default MyButton

const styles = StyleSheet.create({
  frame: {
    width: wp(100),
    height: hp(10),
    backgroundColor: "rgb(241, 228, 212)",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgb(201, 157, 120)",
    height: hp(6, 5),
    width: wp(93),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(2),
    borderColor: "rgb(252, 246, 234)",
    borderWidth: 1
  },
  text: {
    color: "rgb(252, 246, 234)",
    fontWeight: "bold",
    fontSize: hp(3)
  }
})