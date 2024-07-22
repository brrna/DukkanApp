import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import axios from 'axios';
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


  if(loading) {
    return(
      <SafeAreaView style={styles.container} >
        <StatusBar />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  if(error) {
    return(
      <SafeAreaView style={styles.container} >
        <Text>
          Error fetching data
        </Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar />
      <Text>Products</Text>
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
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  }
})