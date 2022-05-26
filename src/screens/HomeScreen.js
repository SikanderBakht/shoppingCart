import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductHorizontalList from '../components/ProductsHorizontalList'
import { getCategories } from '../reducers/products'

const HomeScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
            .unwrap()
            .then((result) => {
                console.log('result', result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <ProductHorizontalList/>
    </View>
}

const styles = StyleSheet.create({

})

export default HomeScreen