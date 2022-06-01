import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { GlobalStyles } from '../constants/styles'

const SplashScreen = ({ navigation }) => {
    navigateToLogin(navigation)
    return <View style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor={GlobalStyles.colors.primary}
            showHideTransition='fade' />
        <Text style={styles.text}>Shopping Cart</Text>
    </View>
}

//# region functions
const navigateToLogin = (navigation) => {
    setTimeout(() => {
        navigation.replace('Login')
    })
}
//# endregion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary
    },
    text: {
        fontSize: 36,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
})

export default SplashScreen