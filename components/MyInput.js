import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons';

const MyInput = ({ placeholder, onChangeText, value, name }) => {
    return (
        <View style={styles.frame} >
            <View style={styles.inputView} >
                <TextInput
                    style={styles.input}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
                <AntDesign name={name} size={hp(3.5)} color="brown" style={{marginRight: wp(2)}} />
            </View>
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    frame: {
        width: wp(100),
        height: hp(10),
        backgroundColor: "rgb(241, 228, 212)",
        justifyContent: "center",
        alignItems: "center"
    },
    inputView:{
        backgroundColor: "rgb(252, 246, 234)",
        width: wp(93),
        height: hp(6.5),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: hp(1),
        borderColor: "rgb(47, 18, 0)",
        borderWidth: 1
    },
    input: {
        height: hp(6.5),
        width: wp(85),
        alignSelf: "center",
        padding: wp(3)
    }
})