import React, { useEffect } from "react"
import { View, Text, StyleSheet } from 'react-native'
import { getCarts } from "../reducers/cartSlice"
import { useDispatch, useSelector } from 'react-redux'

const CartScreen = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCarts())
            .unwrap()
            .then((result) => {
                console.log('result', result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return <View>
        <Text>CartScreen</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default CartScreen