import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './src/screens/SplashScreen'
import LoginScreen from './src/screens/LoginScreen'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import HomeScreen from './src/screens/HomeScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GlobalStyles } from './src/constants/styles';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import CartScreen from './src/screens/CartScreen';
import { Image, Pressable, StyleSheet, BackHandler } from 'react-native';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.primary500,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  const backButtonClick = () => {
    BackHandler.exitApp()
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.backgroundColor
          },
          contentStyle: {
            backgroundColor: GlobalStyles.colors.backgroundColor
          }

        }}>
          <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={LoginScreen} options={{
            title: '',
            headerShadowVisible: false,
            headerLeft: () => (
              <Pressable onPress={backButtonClick} style={({ pressed }) => pressed && styles.pressed}>
                <Image
                  source={require('./src/assets/images/ic_back.png')}
                  style={{ width: 10, resizeMode: 'contain' }} />
              </Pressable>

            )
          }} />
          <Stack.Screen name='Home' component={BottomTabBar} />
          <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
          <Stack.Screen name='ProductList' component={ProductListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  pressed: {
      opacity: 0.75
  },
})