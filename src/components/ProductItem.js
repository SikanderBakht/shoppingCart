import React from 'react'
import { Image } from '@rneui/themed'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

const ProductItem = ({ product }) => {

    const productItem = product.item
    return <View>
        <Image
            source={{ uri: productItem.image }}
            containerStyle={styles.item}
            PlaceholderContent={<ActivityIndicator />}
        />

        <Rating
            readonly
            ratingCount={5}
            imageSize={15}
            tintColor='grey'
            startingValue={productItem.rating.rate}
        />
        <Text>{productItem.price}</Text>
    </View>
}

const styles = StyleSheet.create({
    item: {
        width: 148,
        height: 184,
        marginHorizontal: 5
    }
})

export default ProductItem