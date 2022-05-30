import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { getProductByCategory } from '../reducers/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "@rneui/base"
import ProductItem from '../components/ProductItem'

const ProductHorizontalList = ({ category }) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const isLoading = useSelector(state => state.products.isLoading)

    useEffect(() => {
        dispatch(getProductByCategory(category))
            .unwrap()
            .then((result) => {
                //console.log('result', result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleLogin = () => {
        dispatch(getProductByCategory())
            .unwrap()
            .then((result) => {
                //console.log('result', result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return <View style={styles.container}>
        {/* <Text>{category}</Text> */}
        {isLoading ?
            <ActivityIndicator />
            : <>
                <Text> Title: {category}</Text>
                <ProductItem productList={products}/>
            </>

        }
        <Button title='Login' onPress={handleLogin} />
    </View>
}

const styles = StyleSheet.create({

})

export default ProductHorizontalList