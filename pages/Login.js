import { SafeAreaView, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import {LOGIN_URL} from "@env"

const Login = () => {

    const navigation = useNavigation();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userName,
                    password: password,
                }),
            });

            const json = await response.json();

            if (response.ok) {
                console.log('Login successful:', json);
                // Navigate to the next screen (e.g., Home)
                navigation.replace('ProductsScreen');
            } else {
                Alert.alert('Login Failed', json.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Error during login:', error);
            Alert.alert('Login Error', 'Something went wrong. Please try again later.');
        }
    }


    return (
        <SafeAreaView style={styles.container} >
            <Image
                style={styles.image}
                source={require("../assets/images/logo.jpeg")} />

            <MyInput
                value={userName}
                onChangeText={setUserName}
                placeholder="enter your name" />
            <MyInput
                value={password}
                onChangeText={setPassword}
                placeholder="enter your password" />

            <MyButton
                onPress={handleLogin} />
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