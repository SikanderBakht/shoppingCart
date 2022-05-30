import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import ProductItem from '../components/ProductItem'

const ProductHorizontalList = ({ category }) => {
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])


    const getProductByCategory = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const json = await response.json();
            console.log(json);
            setProducts(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductByCategory()
    }, [])

    return <View style={styles.container}>
        {isLoading ?
            <ActivityIndicator />
            : <>
                <Text> Title: {category}</Text>
                <FlatList
                    horizontal
                    keyExtractor={(item) => item.id}
                    data={products}
                    renderItem={(item) => {
                        return <ProductItem product={item} />
                    }}
                />

            </>

        }
    </View>
}

const styles = StyleSheet.create({

})

export default ProductHorizontalList