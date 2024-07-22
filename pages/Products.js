import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import Header from '../components/myHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Products = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const renderProduct = ({ item }) => <ProductCard product={item} />
  const keyProduct = (item) => item.id.toString();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setLoading(true); // Yükleniyor durumunu başlat
    try {
      console.log("Fetching data...");
      const { data: productData } = await axios.get("https://fakestoreapi.com/products");
      console.log("Data fetched successfully");
      setData(productData);
    } catch (err) {
      console.error("Error fetching data:", err.response?.data || err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  };


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