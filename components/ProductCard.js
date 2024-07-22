import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const ProductCard = ({ product }) => {
  return (
    <View style={styles.frame} >
      <View style={styles.container} >
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode='contain' />
        <View style={styles.body} >
          <Text
            style={styles.title}
            numberOfLines={1}
            ellipsizeMode='tail'
          >{product.title}</Text>
          <Text
            style={styles.price}
          >${product.price}</Text>
        </View>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  frame: {
    backgroundColor: "white",
    height: hp(26),
    width: wp(50),
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    height: hp(25),
    width: wp(48),
    padding: wp(1),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D0B8AC",
    borderWidth: 1.5,
    borderRadius: wp(5)
  },
  image: {
    backgroundColor: "white",
    height: hp(17),
    width: wp(35)
  },
  body: {
    backgroundColor: "white",
    height: hp(6),
    width: wp(45),
    borderBottomRightRadius: wp(5),
    borderBottomLeftRadius: wp(5),
    marginLeft: wp(1.5),
    marginTop: hp(1)
  },
  title: {
    fontSize: hp(2),
    fontWeight: "400",
    fontStyle: "italic",
    color: "#62472D"
  },
  price: {
    fontSize: hp(2.3),
    fontWeight: "700",
    color: "#62472D"
  }
})