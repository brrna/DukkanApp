import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, ActivityIndicator, Image, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyBackHandler from "../components/MyBackHandler"
import { BASE_URL } from "@env"
import useFetch from '../hooks/useFetch'
import { useNavigation } from '@react-navigation/native'
import StarRating from 'react-native-star-rating-widget'

const Detail = ({ route }) => {

  const { id } = route.params;
  const { loading, error, data } = useFetch(`${BASE_URL}/${id}`)

  const [rating, setRating] = useState(0)

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('ProductsScreen')
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingView} >
        <StatusBar />
        <Text
          style={styles.text} >Loading...</Text>
        <ActivityIndicator
          size="large"
          color="#D0B8AC" />
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView style={styles.loadingView} >
        <Text
          style={styles.text}>
          Error fetching data
        </Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.frame} >
      <StatusBar />
      <ScrollView style={styles.container} >
        <MyBackHandler onPress={handleBack} />
        <Image
          style={styles.image}
          source={{ uri: data.image }}
          resizeMode="contain"
        />
        <View style={styles.introduction} >
          <View style={styles.titleView} >
            <Text style={styles.title} >{data.title}</Text>
          </View>

          <View style={styles.categoryView} >
            <Text style={styles.category} >{data.category} </Text>
            <Text style={styles.category} >${data.price} </Text>
          </View>

          <View style={styles.rateStyle} >
            <StarRating
              rating={data.rating.rate}
              onChange={setRating}
              starSize={hp(4.5)}
              color='#F3D8C7' />
          </View>
        </View>
        <View style={styles.descriptionView} >
          <Text style={styles.header} >Ürün Özellikleri</Text>
          <Text style={styles.description} > {data.description} </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    width: wp(100),
  },
  image: {
    width: wp(100),
    height: hp(45)
  },
  introduction: {
    backgroundColor: "pink",
    width: wp(100),
    marginTop: hp(2)
  },
  titleView: {
    backgroundColor: "white",
    width: wp(100),
    borderTopColor: "#F3D8C7",
    borderTopWidth: 1,
    padding: wp(2)
  },
  title: {
    fontSize: hp(2.8),
    fontWeight: "800",
    color: "#D0B8AC"
  },
  categoryView: {
    backgroundColor: "white",
    width: wp(100),
    flexDirection: "row",
    justifyContent: "space-between",
    padding: wp(2)
  },
  category: {
    fontSize: hp(2),
    fontWeight: "400",
    color: "#62472D"
  },
  rateStyle: {
    backgroundColor: "white",
    width: wp(100),
    height: hp(5),
    justifyContent: "center"
  },
  descriptionView: {
    backgroundColor: "white",
    width: wp(100),
    padding: wp(2)
  },
  header: {
    fontSize: hp(2.5),
    fontWeight: "500",
    margin: wp(1),
    color: "#62472D"
  },
  description: {
    fontSize: hp(2.2),
    color: "#62472D"
  }
})