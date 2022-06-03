import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/authentication';
import { TextInput, Button } from 'react-native-paper'

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.authentication.isLoading)
    const [inputs, setInputs] = useState({ username: 'mor_2314', password: '83r5^_' })
    const { username, password } = inputs


    const handleLogin = () => {
        console.log('login')
        dispatch(login({ username, password }))
            .unwrap()
            .then((result) => {
                navigation.navigate('Home')
                console.log('result', result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleUserName = (newText) => {
        setInputs({ ...inputs, username: newText })
    }

    const handlePassword = (newText) => {
        setInputs({ ...inputs, password: newText })
    }

    return <View style={styles.container}>
        <StatusBar
            animated={true}
            barStyle='dark-content'
            backgroundColor={GlobalStyles.colors.backgroundColor}
            showHideTransition='fade' />

        {isLoading ? <ActivityIndicator /> : <View >
            <Text style={styles.title}>Login</Text>
            <TextInput
                label='Email'
                name='username'
                value={username}
                onChangeText={(newText) => handleUserName(newText)}
                underlineColor='transparent'
                theme={{
                    colors: {
                        placeholder: GlobalStyles.colors.textColorSecondary, text: GlobalStyles.colors.textColorPrimary, primary: GlobalStyles.colors.textColorSecondary,
                        underlineColor: 'red', background: 'white'
                    }
                }}
                style={{ marginVertical: 10 }} />

            <TextInput
                label='Password'
                name='password'
                value={password}
                onChangeText={(newText) => handlePassword(newText)}
                underlineColor='transparent'
                theme={{
                    colors: {
                        placeholder: GlobalStyles.colors.textColorSecondary, text: GlobalStyles.colors.textColorPrimary, primary: GlobalStyles.colors.textColorSecondary,
                        underlineColor: 'red', background: 'white'
                    }
                }}
                style={{ marginVertical: 10 }} />
            {/* <Input placeholder='Login' name='username' value={username} onChangeText={(newText) => handleUserName(newText)} /> */}
            {/* <Input placeholder='Password' name='password' value={password} onChangeText={(newText) => handlePassword(newText)} /> */}
            <Button onPress={handleLogin} mode="contained" color={GlobalStyles.colors.primary} contentStyle ={styles.buttonContent} style={styles.button}>Login</Button>
        </View>}
    </View>
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 14,
        backgroundColor: GlobalStyles.colors.backgroundColor
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 34,
    },
    buttonContent: {
        height: 48
    },
    button: {
        borderRadius: 25,
        height: 48
    }
})

export default LoginScreen