import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { MaterialIcons } from '@expo/vector-icons';

const MyBackHandler = ({onPress}) => {

  return (
    <View style={styles.container} >
      <TouchableOpacity 
        onPress={onPress}
        style={styles.icon} >
        <MaterialIcons
          name="arrow-back-ios"
          size={hp(5.3)}
          color={"#D0B8AC"}
          style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

export default MyBackHandler

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: hp(7),
    width: wp(100),
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    marginLeft: wp(2),
    height: hp(6),
    width: wp(6),
    justifyContent: "center",
    alignItems: "center"
  }
})