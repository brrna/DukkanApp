import { Image, SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LoginScreen")
        }, 2000)
    }, [])

  return (
    <SafeAreaView style={styles.container} >
      <Image 
        style={styles.image}
        source={require("../assets/images/logo.jpeg")} />
        <Text style={styles.text} > dukkan </Text>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(241, 228, 212)",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: hp(30),
        width: wp(60)
    },
    text: {
        fontSize: hp(6),
        fontWeight: "bold",
        color: "rgb(47, 18, 0)",
        fontStyle: "italic"
    }
})