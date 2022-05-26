import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const renderProductItem = (itemData) => {
    return <ExpenseItem {...itemData.item}/>
}

const ProductHorizontalList = () => {
    return <View style={styles.container}>
        <Text>Product Horizontal List</Text>
        {/* <FlatList
            keyExtractor={(item) => item.id}
            data={expenses}
            renderItem={renderProductItem} /> */}
    </View>
}

const styles = StyleSheet.create({

})

export default ProductHorizontalList