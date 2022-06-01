import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import { Input } from "@rneui/themed"
import { Button } from "@rneui/base";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/authentication';

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

    return <View>
        <StatusBar
            animated={true}
            barStyle='dark-content'
            backgroundColor={GlobalStyles.colors.backgroundColor}
            showHideTransition='fade' />
        {isLoading ? <ActivityIndicator /> : <>
            <Text>Login Scsreen</Text>
            <Input placeholder='Login' name='username' value={username} onChangeText={(newText) => handleUserName(newText)} />
            <Input placeholder='Password' name='password' value={password} onChangeText={(newText) => handlePassword(newText)} />
            <Button title='Login' onPress={handleLogin} />
        </>}
    </View>
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary
    }
})

export default LoginScreen