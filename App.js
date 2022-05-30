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
        name="Feed1"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Home' component={BottomTabBar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}