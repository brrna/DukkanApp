import { SafeAreaView, StyleSheet, Image, View, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import usePost from '../hooks/usePost'
import { LOGIN_URL } from "@env"

const Login = () => {

    const navigation = useNavigation();

    const {data, error, loading, post} = usePost();

    const handleLogin = (values) => {
        post(LOGIN_URL, values );
    }

    useEffect(() => {
        if(error) {
            Alert.alert("dukkan", "something went wrong")
        }
    }, [error])

    useEffect(() => {
        if(data) {
            if(data.status === 'Error') {
                Alert.alert("dukkan", "user not found")
            } else {
                navigation.navigate("ProductsScreen")
            }
        }
    }, [data])

    return (
        <SafeAreaView style={styles.container} >
            <Image
                style={styles.image}
                source={require("../assets/images/logo.jpeg")} />
            <Formik 
                initialValues={{username: '', password: ''}}
                onSubmit={handleLogin} >
                {({handleSubmit, handleChange, values}) => (
                    <View>
                        <MyInput
                            value={values.username}
                            onChangeText={handleChange("username")}
                            placeholder="enter your name"
                            name="user" />
                        <MyInput
                            value={values.password}
                            onChangeText={handleChange("password")}
                            placeholder={"enter your password"}
                            name="lock" />

                        <MyButton
                            onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
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