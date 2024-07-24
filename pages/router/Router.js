import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../Products';
import Detail from '../Detail';
import Splash from '../Splash';
import Login from '../Login';

const Router = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='SplashScreen' component={Splash} />
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='ProductsScreen' component={Products} />
        <Stack.Screen name='DetailScreen' component={Detail} />
    </Stack.Navigator>
  )
}

export default Router