import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import React, {useEffect} from 'react'
import ProductCard from '../components/ProductCard';
import Header from '../components/myHeader';
import {BASE_URL} from "@env"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import useFetch from '../hooks/useFetch';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const Products = () => {

  const navigation = useNavigation();

  const {loading, data, error} = useFetch(BASE_URL);

  const handlePress = (id) => {
    navigation.navigate('DetailScreen', {id})
  };

  const renderProduct = ({ item }) => <ProductCard product={item} onPress={() => handlePress(item.id)} />
  const keyProduct = (item) => item.id.toString();

  useEffect(() => {
    const backAction = () => {
        BackHandler.exitApp();
        return true;
    }

    const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
    );

    return () => backHandler.remove();
}, []);

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
    <SafeAreaView style={styles.container} >
      <StatusBar />
      <Header />
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={keyProduct}
        numColumns={"2"} />
    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingView: {
    backgroundColor: "#FBFEFB",
    height: hp(100),
    width: wp(100),
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#D0B8AC",
    fontWeight: "bold",
    fontSize: wp(10)
  }
})