import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import ProductItem from '../components/ProductItem'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'


const ProductHorizontalList = ({ category }) => {
    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

   
    const getProductByCategory = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            const json = await response.json();
            setProducts(json)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductByCategory()
    }, [])

    const viewAllButtonClicked = () => {
        navigation.navigate('ProductList', {
            productDetail: products
        })
    }
    

    return <View style={styles.container}>
        {isLoading ?
            <ActivityIndicator />
            : <View>
                <View style={styles.listTitleWihButton}>
                    <Text> Title: {category}</Text>
                    <Button title="View All" type='clear' onPress={viewAllButtonClicked}/>
                </View>
                
                <FlatList
                    horizontal
                    keyExtractor={(item) => item.id}
                    data={products}
                    renderItem={(item) => {
                        return <ProductItem product={item} />
                    }}
                />
            </View>

        }
    </View>
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    listTitleWihButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ProductHorizontalList