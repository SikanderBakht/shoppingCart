import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProductItem = ({ productList }) => {
    return <View style={styles.container}>
        <Text>{productList[0].title}</Text>
        <Text>Reviews</Text>
        <Text>Title</Text>
        <Text>Price</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default ProductItem