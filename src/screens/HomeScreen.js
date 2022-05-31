import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import ProductHorizontalList from '../components/ProductsHorizontalList';

const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    // const dispatch = useDispatch()
    // const productCategories = useSelector(state => state.categories.categories)
    // const isLoading = useSelector(state => state.categories.isLoading)

    const getProductCategoryies = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const json = await response.json();
            setCategories(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductCategoryies()
    }, [])

    return <View style={styles.container}>
        {
            isLoading ?
                <ActivityIndicator />
                : <>
                    {categories.map((category) => {
                        return <ProductHorizontalList key={category} category={category} />
                    })}
                </>
        }


    </View>
}

const styles = StyleSheet.create({

})

export default HomeScreen