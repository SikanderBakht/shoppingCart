import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const ProductDetailScreen = ({ route }) => {
    const navigation = useNavigation()
    const { productDetail } = route.params

    const addToCartButtonClicked = () => {
        navigation.navigate('Cart')
    }

    return <View>
        <Text>{productDetail.description}</Text>
        <Button title='Add to Cart' onPress={addToCartButtonClicked} />
    </View>
}

const styles = StyleSheet.create({

})

export default ProductDetailScreen