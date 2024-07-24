import { Pressable, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const MyButton = ({onPress}) => {

    const navigation = useNavigation();

  return (
    <View style={styles.frame} >
      <Pressable
        onPress={onPress} >
            <Text style={styles.text} >Sign In</Text>
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
    text: {
        color: "rgb(201, 157, 120)",
        fontWeight: "bold",
        fontSize: hp(3)
    }
})