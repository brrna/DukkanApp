import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../Products';
import Detail from '../Detail';

const Router = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='ProductsScreen' component={Products} />
        <Stack.Screen name='DetailScreen' component={Detail} />
    </Stack.Navigator>
  )
}

export default Router