import React from 'react'
import { Image } from '@rneui/themed'
import { View, Text, StyleSheet, ActivityIndicator, Pressable } from 'react-native'
import { Rating } from 'react-native-ratings'
import { useNavigation } from '@react-navigation/native'


const ProductItem = ({ product }) => {
    const navigation = useNavigation()
    const productItem = product.item

    const productItemClick = () => {
        navigation.navigate('ProductDetail', {
            productDetail: productItem
        })
    }

    return <Pressable onPress={(item) => { productItemClick(item) }} style={({ pressed }) => pressed && styles.pressed}>
        <View>
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
    </Pressable>

}

const styles = StyleSheet.create({
    item: {
        width: 148,
        height: 184,
        marginHorizontal: 5
    },
    pressed: {
        opacity: 0.75
    },
})

export default ProductItem