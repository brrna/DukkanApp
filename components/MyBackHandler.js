import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MyBackHandler = () => {

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('ProductsScreen');
  }

  return (
    <View style={styles.container} >
      <Pressable 
        onPress={handleBack}
        style={styles.icon} >
        <MaterialIcons
          name="arrow-back-ios"
          size={hp(5.3)}
          color={"#D0B8AC"}
          style={styles.icon} />
      </Pressable>
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
    backgroundColor: "white",
    marginLeft: wp(2),
    height: hp(6),
    width: wp(6),
    justifyContent: "center",
    alignItems: "center"
  }
})