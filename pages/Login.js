import { SafeAreaView, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'

const Login = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} >
            <Image
                style={styles.image}
                source={require("../assets/images/logo.jpeg")} />
            <Formik 
                initialValues={{username: ' ', password: ' '}}
                onSubmit={formValues => console.log(formValues) } >
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
                            placeholder="enter your password"
                            name="lock" />

                        <MyButton
                            onPress={handleSubmit} />
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