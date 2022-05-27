import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../reducers/categorySlice'
import ProductHorizontalList from '../components/ProductsHorizontalList';

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productCategories = useSelector(state => state.categories.categories)
    const isLoading = useSelector(state => state.products.isLoading)

    useEffect(() => {
        dispatch(getCategories())
            .unwrap()
            .then((result) => {
                console.log('result', result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return <View style={styles.container}>
        <Text>Home Scrseen</Text>
        {isLoading ?
            <ActivityIndicator />
            : <ProductHorizontalList/>
            
            // productCategories.map((category) => {
            //     return <ProductHorizontalList key={category} category={category}/>
            // })
        }


    </View>
}

const styles = StyleSheet.create({

})

export default HomeScreen