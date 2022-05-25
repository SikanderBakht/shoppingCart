import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import { Input } from "@rneui/themed"
import { Button } from "@rneui/base";
//import { useDispatch, useSelector } from 'react-redux'

const LoginScreen = () => {
    
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    // const [username, setUsername] = useState('')
    // const [password, setPasword] = useState('')
    const { username, password } = inputs
    //const dispatch = useDispatch()

    const handleLogin = () => {
        
    }

    const handleUserName = (newText) => {
        setInputs({username: newText})
    }

    const handlePassword = (newText) => {
        setInputs({password: newText})
    }

    return <View>
        <Text>Login Screen</Text>

        {/* <Input placeholder='Login' name='username' value={username} onChangeText={(newText) => { setUsername(newText) }} /> */}
        <Input placeholder='Login' name='username' value={username} onChangeText={(newText) => handleUserName(newText)} />
        <Input placeholder='Password' name='password' value={password} onChangeText={(newText) => handlePassword(newText)} />
        <Button title='Login' onPress={handleLogin} />
    </View>
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary
    }
})

export default LoginScreen