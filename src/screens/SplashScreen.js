import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { GlobalStyles } from '../constants/styles'

const SplashScreen = ({navigation}) => {
    navigateToLogin(navigation)
    return <View style={styles.container}>
        <Text>Splah Screen</Text>
    </View>
}

//# region functions
const navigateToLogin = (navigation) => {
    setTimeout(() => {
        navigation.navigate('Login')
    })
}
//# endregion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary
    }
})

export default SplashScreen