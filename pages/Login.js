import { SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'

const Login = () => {

    const[text, setText] = useState();

    return (
        <SafeAreaView style={styles.container} >
            <Image
                style={styles.image}
                source={require("../assets/images/logo.jpeg")} />

            <MyInput
                onChangeText={text}
                placeholder="enter your name" />
            <MyInput
                onChangeText={text}
                placeholder="enter your password" />

            <MyButton />
        </SafeAreaView>
    )
}

export default Login

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
    }
})