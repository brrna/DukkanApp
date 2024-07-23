import { StyleSheet, View, Image, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import StarRating from 'react-native-star-rating-widget'

const ProductCard = ({ product, onPress }) => {

  const [rating, setRating] = useState(product.rating.rate)

  return (
    <Pressable
      onPress={onPress}>
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
            <View style={styles.rate} >
            <StarRating
              rating={rating}
              onChange={setRating}
              starSize={hp(2.3)}
              color='#D0B8AC'
            />
            <Text style={styles.rateText} >({product.rating.count})</Text>
            </View>
            <Text
              style={styles.price}
            >${product.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  frame: {
    backgroundColor: "white",
    height: hp(30),
    width: wp(50),
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    height: hp(29),
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
    height: hp(9),
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
  },
  rate: {
    backgroundColor: "white",
    height: hp(3),
    width: wp(38),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  rateText: {
    color: "#62472D",
    fontSize: hp(1.3)
  }
})