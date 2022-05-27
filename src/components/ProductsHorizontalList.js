import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ProductItem from './ProductItem'
import { Button } from "@rneui/base";
import { getCategories } from '../reducers/products'
import { useDispatch, useSelector } from 'react-redux'

const ProductHorizontalList = ({ category }) => {
    const dispatch = useDispatch()
    const productCategories = useSelector(state => state.products.categories)
    const isLoading = useSelector(state => state.products.isLoading)

    // useEffect(() => {
    //     dispatch(getCategories())
    //         .unwrap()
    //         .then((result) => {
    //             console.log('result', result)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    const handleLogin = () => {
        dispatch(getCategories())
            .unwrap()
            .then((result) => {
                console.log('result', result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return <View style={styles.container}>
        <Text>{category}</Text>
        <Button title='Login' onPress={handleLogin} />
        {/* {isLoading ?
            <ActivityIndicator />
            : productCategories.map((category) => {
                return <ProductHorizontalList key={category} category={category}/>
            })
        } */}
    </View>
}

const styles = StyleSheet.create({

})

export default ProductHorizontalList