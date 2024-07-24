import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const MyInput = ({ placeholder, onChangeText }) => {
    return (
        <View style={styles.frame} >
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    frame: {
        width: wp(100),
        height: hp(10),
        backgroundColor: "rgb(241, 228, 212)",
        justifyContent: "center"
    },
    input: {
        backgroundColor: "rgb(252, 246, 234)",
        height: hp(6.5),
        width: wp(90),
        alignSelf: "center",
        borderRadius: hp(1),
        padding: wp(3),
        borderColor: "rgb(47, 18, 0)",
        borderWidth: 1
    }
})